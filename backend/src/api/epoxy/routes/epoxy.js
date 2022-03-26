'use strict';

/**
 * epoxy router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::epoxy.epoxy');
