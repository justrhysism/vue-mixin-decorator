# Vue Mixin Decorator

[![npm](https://img.shields.io/npm/v/vue-mixin-decorator.svg)](https://www.npmjs.com/package/vue-mixin-decorator) [![Build Status](https://travis-ci.org/justrhysism/vue-mixin-decorator.svg?branch=master)](https://travis-ci.org/justrhysism/vue-mixin-decorator)

This library fully depends on [vue-class-component](https://github.com/vuejs/vue-class-component).

Most ideas and code are ~~stolen~~ _borrowed_ from [@HerringtonDarkholme](https://github.com/HerringtonDarkholme)
and his **[av-ts](https://github.com/HerringtonDarkholme/av-ts)** project. Also from 
[@JsonSong89](https://github.com/JsonSong89)'s 
[comment](https://github.com/vuejs/vue-class-component/issues/91#issuecomment-312534798), who suggested that the idea
should be extracted into a separate project _which is why I've begrudgingly done so_.

Project template shamelessly stolen from **[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)**.

**Best case scenario** is this project/implementation/concept 
gets merged/provided into/by an officially supported project
and this one can be deprecated.

## License

MIT License

## Install

```bash
npm i -S vue-mixin-decorator
```

## Usage

There are 2 decorators:

* `@Mixin` 
* `@Component` 

and an extension class:

* `Mixins`

_Note: `@Mixin` is `@Component` exported from `vue-class-component`._

```typescript
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

const s = Symbol('baz')

@Component
export class MyComponent extends Vue {

  @Emit()
  addToCount(n: number){ this.count += n }

  @Emit('reset')
  resetCount(){ this.count = 0 }

  @Inject() foo: string
  @Inject('bar') bar: string
  @Inject(s) baz: string

  @Model('change') checked: boolean

  @Prop()
  propA: number

  @Prop({ default: 'default value' })
  propB: string

  @Prop([String, Boolean])
  propC: string | boolean

  @Provide() foo = 'foo'
  @Provide('bar') baz = 'bar'

  @Watch('child')
  onChildChanged(val: string, oldVal: string) { }

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged(val: Person, oldVal: Person) { }
}

```

is equivalent to

```js
const s = Symbol('baz')

export const MyComponent = Vue.extend({
  name: 'MyComponent',
  inject: {
    foo: 'foo',
    bar: 'bar',
    [s]: s
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    propA: Number,
    propB: {
      type: String,
      default: 'default value'
    },
    propC: [String, Boolean],
  },
  data () {
    return {
      foo: 'foo',
      baz: 'bar'
    }
  },
  provide () {
    return {
      foo: this.foo,
      bar: this.baz
    }
  },
  methods: {
    addToCount(n){
      this.count += n
      this.$emit("add-to-count", n)
    },
    resetCount(){
      this.count = 0
      this.$emit("reset")
    },
    onChildChanged(val, oldVal) { },
    onPersonChanged(val, oldVal) { }
  },
  watch: {
    'child': {
      handler: 'onChildChanged',
      immediate: false,
      deep: false
    },
    'person': {
      handler: 'onPersonChanged',
      immediate: true,
      deep: true
    }
  }
})
```

## emitDecoratorMetadata

As you can see at `propA` and `propB`, the type can be inferred automatically when it's a simple type. For more complex types like enums you do need to specify it specifically.
Also this library needs to have `emitDecoratorMetadata` set to `true` for this to work.

## See also

[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
[vuex-class](https://github.com/ktsn/vuex-class/)
