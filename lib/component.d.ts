/**
 * @file Component Decorator
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
import Vue, { ComponentOptions } from 'vue';
/**
 * Component decorator
 * @param {ComponentOptions<U extends Vue> | V} options
 * @returns {any}
 * @constructor
 */
export declare function Component<V, U extends Vue>(options: ComponentOptions<U> | V): any;
