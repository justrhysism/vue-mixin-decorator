/**
 * @file Mixins Vue Extension
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */

// Third Party Dependencies
import Vue from 'vue';
import {VueClass} from 'vue-class-component/lib/declarations';


/**
 * Extend a Vue Component with mixins
 * @param {VueClass<T extends Vue>} parent
 * @returns {VueClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(parent: VueClass<T>): VueClass<T>;

/**
 * Extend a Vue Component with mixins
 * @param {VueClass<Vue>} parent
 * @param {VueClass<Vue>} mixins
 * @returns {VueClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(
	parent: VueClass<Vue>,
	...mixins: VueClass<Vue>[]
): VueClass<T>;

/**
 *
 * @param {typeof Vue} parent
 * @param {typeof Vue} mixins
 * @returns {VueClass<T extends Vue>}
 * @constructor
 */
export function Mixins<T extends Vue>(
	parent: typeof Vue,
	...mixins: (typeof Vue)[]
): VueClass<T> {
	return parent.extend({ mixins }) as any;
}
