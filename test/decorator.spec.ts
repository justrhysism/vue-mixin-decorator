import 'jest';
import { mount } from '@vue/test-utils';

import { Vue, Component, Mixin, Mixins } from './mediator';

const componentOptions = {
	template: '<div />'
};

describe('@Component', () => {
	it('should call `created()` and `destroyed()` lifecycle methods', () => {
		// Arrange
		const first = Symbol('first');
		const second = Symbol('second');
		const third = Symbol('third');
		const spy = jest.fn();

		@Component(componentOptions)
		class MyComp extends Vue {

			created() {
				spy(first);
			}

			destroyed() {
				spy(third);
			}
		}

		// Act
		const wrapper = mount(MyComp);
		spy(second);
		wrapper.destroy();

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
		expect(spy).toHaveBeenNthCalledWith(1, first);
		expect(spy).toHaveBeenNthCalledWith(2, second);
		expect(spy).toHaveBeenNthCalledWith(3, third);
	});
});

describe('@Mixin', () => {
	test('decorator test', () => {
		// Arrange
		@Mixin(componentOptions)
		class MyMixin extends Vue {}

		// Act
		const wrapper = mount(MyMixin);

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('should bind a single mixin', () => {
		// Arrange
		const mixinOneCreated = jest.fn();
		const mixinOneCalledFromComponent = jest.fn();

		@Mixin
		class MyMixinOne extends Vue {
			created() {
				mixinOneCreated();
			}

			mixinOneMethod() {
				mixinOneCalledFromComponent();
			}
		}

		@Component(componentOptions)
		class MyComponent extends Mixins<MyMixinOne>(MyMixinOne) {
			created() {
				this.mixinOneMethod();
			}
		}

		// Act
		const wrapper = mount<MyComponent>(MyComponent);

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
		expect(mixinOneCreated).toBeCalledTimes(1);
		expect(mixinOneCalledFromComponent).toBeCalledTimes(1);
	});

	it('should bind multiple mixins', () => {
		// Arrange
		const mixinOneCreated = jest.fn();
		const mixinTwoCreated = jest.fn();
		const mixinOneCalledFromComponent = jest.fn();
		const mixinTwoCalledFromComponent = jest.fn();

		@Mixin
		class MyMixinOne extends Vue {
			created() {
				mixinOneCreated();
			}

			mixinOneMethod() {
				mixinOneCalledFromComponent();
			}
		}

		@Mixin
		class MyMixinTwo extends Vue {
			created() {
				mixinTwoCreated();
			}

			mixinTwoMethod() {
				mixinTwoCalledFromComponent();
			}
		}

		/*
			To handle multiple mixins (complete with Typescript completion)
			an interface needs to be created extending your mixins.
		 */
		interface IMixinInterface extends MyMixinOne, MyMixinTwo {}

		/*
			Provide `Mixins` with the interface
		 */
		@Component(componentOptions)
		class MyComponent extends Mixins<IMixinInterface>(MyMixinOne, MyMixinTwo) {
			created() {
				this.mixinOneMethod();
				this.mixinTwoMethod();
			}
		}

		// Act
		const wrapper = mount<MyComponent>(MyComponent);

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
		expect(mixinOneCreated).toBeCalledTimes(1);
		expect(mixinTwoCreated).toBeCalledTimes(1);
		expect(mixinOneCalledFromComponent).toBeCalledTimes(1);
		expect(mixinTwoCalledFromComponent).toBeCalledTimes(1);
	});
});
