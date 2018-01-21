import Vue from 'vue';
import { Component, Mixin, Mixins } from '../src';
import { test as Test } from 'ava';
const test: typeof Test = require('ava').test;

test('@Component decorator test', t => {
	// Arrange
	let created = false;
	let destroyed = false;

	// Act
	@Component
	class Comp extends Vue {
		created() {
			created = true;
		}
		destroyed() {
			destroyed = true;
		}
	}

	const comp = new Comp();
	const destroyedBefore = destroyed;
	comp.$destroy();
	const destroyedAfter = destroyed;

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
