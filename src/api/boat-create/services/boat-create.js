'use strict';

/**
 * boat-create service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boat-create.boat-create');
