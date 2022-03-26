'use strict';

/**
 * staining service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staining.staining');
