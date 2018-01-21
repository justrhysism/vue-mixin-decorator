/**
 * @file Mixins Vue Extension
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */

// Third Party Dependencies
import Vue from 'vue';

// Local Dependencies
import { VClass } from './declarations';

/**
 * Extend a Vue Component with mixins
 * @param {VClass<T extends Vue>} parent
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(parent: VClass<T>): VClass<T>;

/**
 * Extend a Vue Component with mixins
 * @param {VClass<Vue>} parent
 * @param {VClass<Vue>} mixins
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(
	parent: VClass<Vue>,
	...mixins: VClass<Vue>[]
): VClass<T>;

/**
 *
 * @param {typeof Vue} parent
 * @param {typeof Vue} mixins
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(
	parent: typeof Vue,
	...mixins: (typeof Vue)[]
): VClass<T> {
	return parent.extend({ mixins }) as any;
}
