(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-class-component')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue-class-component'], factory) :
	(factory((global['vue-mixin-decorator'] = {}),global.VueClassComponent));
}(this, (function (exports,VCComponent) { 'use strict';

VCComponent = VCComponent && VCComponent.hasOwnProperty('default') ? VCComponent['default'] : VCComponent;

/**
 * @file Mixins Vue Extension
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
/**
 *
 * @param {typeof Vue} parent
 * @param {typeof Vue} mixins
 * @returns {VueClass<T extends Vue>}
 * @constructor
 */
function Mixins(parent) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    return parent.extend({ mixins: mixins });
}

/**
 * @file Component Decorator
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
/**
 * Component decorator
 * @param {ComponentOptions<U extends Vue> | V} options
 * @returns {any}
 * @constructor
 */
function Component(options) {
    return VCComponent(options);
}

/**
 * @file Vue Mixin Decorator
 */
// Third Party Dependencies

exports.Mixin = VCComponent;
exports.Mixins = Mixins;
exports.Component = Component;

Object.defineProperty(exports, '__esModule', { value: true });

})));
