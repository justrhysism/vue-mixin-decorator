export default {
	input: 'lib/index.js',
	output: {
		name: 'vue-mixin-decorator',
		file: 'dist/vue-mixin-decorator.umd.js',
		format: 'umd',
		globals: {
			vue: 'Vue',
			'vue-class-component': 'VueClassComponent',
		},
		exports: 'named',
	},
	external: ['vue', 'vue-class-component'],
};
