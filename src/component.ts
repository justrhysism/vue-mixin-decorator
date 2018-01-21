/**
 * @file Component Decorator
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */

// Third Party Dependencies
import Vue, { ComponentOptions } from 'vue';
import VCComponent from 'vue-class-component';

/**
 * Component decorator
 * @param {ComponentOptions<U extends Vue> | V} options
 * @returns {any}
 * @constructor
 */
export function Component<V, U extends Vue>(
	options: ComponentOptions<U> | V,
): any {
	return VCComponent(options);
}
