'use strict';

/**
 * slogan-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::slogan-test.slogan-test');
