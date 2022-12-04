'use strict';

/**
 * black-listed-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::black-listed-app.black-listed-app');
