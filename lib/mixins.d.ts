/**
 * @file Mixins Vue Extension
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
import Vue from 'vue';
import { VClass } from './declarations';
/**
 * Extend a Vue Component with mixins
 * @param {VClass<T extends Vue>} parent
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export declare function Mixins<T extends Vue>(parent: VClass<T>): VClass<T>;
/**
 * Extend a Vue Component with mixins
 * @param {VClass<Vue>} parent
 * @param {VClass<Vue>} mixins
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export declare function Mixins<T extends Vue>(parent: VClass<Vue>, ...mixins: VClass<Vue>[]): VClass<T>;
