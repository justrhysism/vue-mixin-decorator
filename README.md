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

### Single Mixin

```typescript
import Vue from 'vue';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';

@Mixin
class MyMixin extends Vue {
  created() {
    console.log('Mixin created()');
  }

  mixinMethod() {
    console.log('Mixin method called.');
  }
}

@Component
class MyComponent extends Mixins<MyMixin>(MyMixin) {
  created() {
    this.mixinMethod();
  }
}
```

### Multiple Mixins
```typescript
import Vue from 'vue';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';

@Mixin
class MyMixin extends Vue {
  created() {
    console.log('Mixin created()');
  }

  mixinMethod() {
    console.log('Mixin method called.');
  }
}

@Mixin
class MyOtherMixin extends Vue {
  created() {
    console.log('Other mixin created()');
  }

  otherMixinMethod() {
    console.log('Other mixin method called.');
  }
}

// Create an interface extending the mixins to provide
interface IMixinInterface extends MyMixin, MyOtherMixin {}

@Component
class MyComponent extends Mixins<IMixinInterface>(MyMixin, MyOtherMixin) {
  created() {
    this.mixinMethod();
    this.otherMixinMethod();
  }
}
```

## See also

* [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
* [vuex-class](https://github.com/ktsn/vuex-class/)
