'use strict';

/**
 * committee-member service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::committee-member.committee-member');
