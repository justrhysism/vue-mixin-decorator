import 'jest';
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { spy } from 'sinon';

import { Component, Mixin, Mixins } from '../src';

describe('@Component', () => {
	it('should call `created()` and `destroyed()` lifecycle methods', () => {
		// Arrange
		const created = spy();
		const destroyed = spy();

		@Component
		class MyComp extends Vue {
			created() {
				created();
			}

			destroyed() {
				destroyed();
			}
		}

		// Act
		const wrapper = mount(MyComp);
		const destroyedBefore = destroyed.notCalled;
		wrapper.destroy();
		const destroyedAfter = destroyed.calledOnce;

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
		expect(created.calledOnce).toBe(true);
		expect(destroyedBefore).toBe(true);
		expect(destroyedAfter).toBe(true);
	});
});

describe('@Mixin', () => {
	test('decorator test', () => {
		// Arrange
		@Mixin
		class MyMixin extends Vue {}

		// Act
		const wrapper = mount(MyMixin);

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
	});

	it('should bind a single mixin', () => {
		// Arrange
		const mixinOneCreated = spy();
		const mixinOneCalledFromComponent = spy();

		@Mixin
		class MyMixinOne extends Vue {
			created() {
				mixinOneCreated();
			}

			mixinOneMethod() {
				mixinOneCalledFromComponent();
			}
		}

		@Component
		class MyComponent extends Mixins<MyMixinOne>(MyMixinOne) {
			created() {
				this.mixinOneMethod();
			}
		}

		// Act
		const wrapper = mount<MyComponent>(MyComponent);

		// Assert
		expect(wrapper.isVueInstance()).toBe(true);
		expect(mixinOneCreated.calledOnce).toBe(true);
		expect(mixinOneCalledFromComponent.calledOnce).toBe(true);
	});

	it('should bind multiple mixins', () => {
		// Arrange
		const mixinOneCreated = spy();
		const mixinTwoCreated = spy();
		const mixinOneCalledFromComponent = spy();
		const mixinTwoCalledFromComponent = spy();

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
		@Component
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
		expect(mixinOneCreated.calledOnce).toBe(true);
		expect(mixinTwoCreated.calledOnce).toBe(true);
		expect(mixinOneCalledFromComponent.calledOnce).toBe(true);
		expect(mixinTwoCalledFromComponent.calledOnce).toBe(true);
	});
});
