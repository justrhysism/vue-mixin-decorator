/**
 * @file Mixins Vue Extension
 * @see https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798
 */
/**
 *
 * @param {typeof Vue} parent
 * @param {typeof Vue} mixins
 * @returns {VClass<T extends Vue>}
 * @constructor
 */
export function Mixins(parent) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    return parent.extend({ mixins: mixins });
}
