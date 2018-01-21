export default {
	input: 'lib/vue-mixin-decorator.js',
	name: 'VueMixinDecorator',
	output: {
		file: 'lib/vue-mixin-decorator.umd.js',
		format: 'umd',
	},
	external: ['vue', 'vue-class-component'],
	exports: 'named',
	name: 'vue-mixin-decorator',
	globals: {
		vue: 'Vue',
		'vue-class-component': 'VueClassComponent',
	},
};
