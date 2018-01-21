/**
 * @file Component Decorator
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
import VCComponent from 'vue-class-component';
/**
 * Component decorator
 * @param {ComponentOptions<U extends Vue> | V} options
 * @returns {any}
 * @constructor
 */
export function Component(options) {
    return VCComponent(options);
}
