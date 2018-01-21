'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var Mixin = _interopDefault(require('vue-class-component'));

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

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

/**
 * @file Vue Mixin Decorator
 */
// Third Party Dependencies

var test = require('ava').test;
test('@Component decorator test', function (t) {
    // Arrange
    var created = false;
    var destroyed = false;
    // Act
    var Comp = /** @class */ (function (_super) {
        __extends(Comp, _super);
        function Comp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Comp.prototype.created = function () {
            created = true;
        };
        Comp.prototype.destroyed = function () {
            destroyed = true;
        };
        Comp = __decorate([
            Mixin
        ], Comp);
        return Comp;
    }(Vue));
    var comp = new Comp();
    var destroyedBefore = destroyed;
    comp.$destroy();
    var destroyedAfter = destroyed;
    // Assert
    t.true(created);
    t.false(destroyedBefore);
    t.true(destroyedAfter);
});
/*test('@Emit decorator test', t => {

  @Component
  class Child extends Vue {
    count = 0

    @Emit('reset') resetCount() {
      this.count = 0
    }

    @Emit() increment(n: number) {
      this.count += n
    }

    @Emit() canceled() {
      return false
    }
  }
  const child = new Child()

  let result = {
    called: false,
    event: '',
    arg: 0
  }

  child.$emit = (event, ...args) => {
    result.called = true
    result.event = event
    result.arg = args[0]

    return child
  }

  child.resetCount()
  t.is(result.called, true)
  t.is(result.event, 'reset')
  t.is(result.arg, undefined)

  result.called = false
  child.increment(30)
  t.is(result.event, 'increment')
  t.is(result.arg, 30)

  result.called = false
  child.canceled()
  t.is(result.called, false)

})*/
