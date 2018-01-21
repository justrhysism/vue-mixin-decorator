/**
 * @file Declarations
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */

// Third Party Dependencies
import Vue, { ComponentOptions, FunctionalComponentOptions } from 'vue';

export type VClass<T extends Vue> = {
	new (): T;
	extend(
		option: ComponentOptions<Vue> | FunctionalComponentOptions,
	): typeof Vue;
};
