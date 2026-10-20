
/**
 * HASNAIN-MD v4.5.0 - Cloud Configuration Manager
 * Customized for Hasnain
 * Configuration with environment and MongoDB fallbacks
 */

import fs from 'fs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import chalk from 'chalk';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const envPaths = [
    './config.env',
    './.env',
    join(__dirname, 'config.env'),
    join(__dirname, '.env')
];

for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
        break;
    }
}

// Cloud configuration cache
const cloudConfigCache = new Map();

// Boolean helper
function toBoolean(text) {
    if (typeof text === 'boolean') return text;

    if (typeof text === 'string') {
        const lower = text.toLowerCase().trim();
        return ['true', '1', 'yes', 'on'].includes(lower);
    }

    return false;
}

// Environment variable helper
function getEnv(key, defaultValue, type = 'string') {
    const value = process.env[key];

    if (value === undefined || value === '') {
        return defaultValue;
    }

    switch (type) {
        case 'number': {
            const num = Number(value);
            return Number.isNaN(num) ? defaultValue : num;
        }

        case 'boolean':
            return toBoolean(value);

        case 'array':
            return value.split(',').map(v => v.trim()).filter(Boolean);

        default:
            return value;
    }
}

// Owner numbers
// Add your own WhatsApp number to config.env when ready.
// Use country code without +, for example: 923001234567
const rawOwnerNumbers = getEnv('OWNER_NUMBER', '', 'string');

const OWNER_NUMBERS = rawOwnerNumbers
    .split(',')
    .map(n => n.trim())
    .filter(Boolean);

// Core configuration
const config = {
    // Session server variables
    SESSION_ID: process.argv[2] || getEnv('SESSION_ID', '', 'string'),
    PORT: getEnv('PORT', 8000, 'number'),

    // Bot identity
    PREFIX: getEnv('PREFIX', '.', 'string'),
    BOT_NAME: getEnv('BOT_NAME', 'HASNAIN-MD', 'string'),
    STICKER_NAME: getEnv('STICKER_NAME', 'HASNAIN-MD', 'string'),
    MODE: getEnv('MODE', 'public', 'string').toLowerCase(),

    // Owner settings
    OWNER_NUMBERS: OWNER_NUMBERS,
    OWNER_NAME: getEnv('OWNER_NAME', 'Hasnain', 'string'),

    // Security settings
    ANTI_CALL: getEnv('ANTI_CALL', 'true', 'string'),
    ANTI_DELETE: getEnv('ANTI_DELETE', 'true', 'string'),
    ANTI_LINK: getEnv('ANTI_LINK', 'true', 'string'),
    ANTI_BAD: getEnv('ANTI_BAD', 'false', 'string'),
    ANTI_BOT: getEnv('ANTI_BOT', 'true', 'string'),
    ANTI_VV: getEnv('ANTI_VV', 'true', 'string'),

    // Automation settings
    AUTO_STATUS_SEEN: getEnv('AUTO_STATUS_SEEN', 'true', 'string'),
    READ_MESSAGE: getEnv('READ_MESSAGE', 'true', 'string'),
    SEND_WELCOME: getEnv('SEND_WELCOME', 'false', 'string'),
    GOODBYE: getEnv('GOODBYE', 'false', 'string'),
    AUTO_REACT: getEnv('AUTO_REACT', 'true', 'string'),

    // Auto-reply settings
    AUTO_REPLY: getEnv('AUTO_REPLY', 'false', 'string'),
    AUTO_REPLY_MSG: getEnv('AUTO_REPLY_MSG', '', 'string'),
    AUTO_REPLY_DELAY: getEnv('AUTO_REPLY_DELAY', '60', 'string'),

    // Reload configuration from MongoDB
    async reloadFromCloud() {
        try {
            if (mongoose.connection.readyState !== 1) return;

            const db = mongoose.connection.db;
            const collection = db.collection('global_system_configs');

            const systemSettingsDoc = await collection.findOne({
                configId: 'GLOBAL_MATRIX'
            });

            if (systemSettingsDoc && systemSettingsDoc.settings) {
                Object.keys(systemSettingsDoc.settings).forEach(key => {
                    config[key] = systemSettingsDoc.settings[key];
                    cloudConfigCache.set(
                        key,
                        systemSettingsDoc.settings[key]
                    );
                });

                console.log(
                    chalk.green(
                        '✓ [HASNAIN-MD] Cloud configuration synced.'
                    )
                );
            }
        } catch (err) {
            console.log(
                chalk.yellow(
                    '⚠️ Cloud sync skipped. Using local configuration.'
                )
            );
        }
    },

    // Update configuration in MongoDB
    async updateCloudSetting(key, value) {
        try {
            config[key] = value;
            cloudConfigCache.set(key, value);

            if (mongoose.connection.readyState === 1) {
                const db = mongoose.connection.db;
                const collection = db.collection('global_system_configs');
                const updatedSettings = Object.fromEntries(cloudConfigCache);

                await collection.findOneAndUpdate(
                    { configId: 'GLOBAL_MATRIX' },
                    {
                        $set: {
                            settings: updatedSettings,
                            lastUpdated: Date.now()
                        }
                    },
                    { upsert: true }
                );
            }

            return true;
        } catch (err) {
            return false;
        }
    }
};

// Startup message
if (process.env.NODE_ENV !== 'production') {
    console.log(
        chalk.dim('📋 HASNAIN-MD configuration loaded.')
    );
}

export default config;
                
