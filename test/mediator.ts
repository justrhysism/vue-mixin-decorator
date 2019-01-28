/**
 * Mediator is required to prevent circular dependencies in the test file:
 * https://github.com/Microsoft/TypeScript/issues/11576#issuecomment-367641255
 */

import Vue from 'vue';
export { Vue };
export { Component, Mixin, Mixins } from '../src';
