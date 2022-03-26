'use strict';

/**
 * epoxy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::epoxy.epoxy');
