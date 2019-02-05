import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isMinify = process.env.BUILD_MINIFY ? true : false;

let output = [
  {
    file: 'dist/react-paginating.cjs.js',
    name: 'react-paginating-cjs',
    format: 'cjs'
  },
  {
    file: 'dist/react-paginating.esm.js',
    name: 'react-paginating-esm',
    format: 'esm'
  },
  {
    file: 'dist/react-paginating.umd.js',
    name: 'react-paginating-umd',
    format: 'umd',
    sourcemap: true
  },
];

if (isMinify) {
  output = {
    file: 'dist/react-paginating.umd.min.js',
    name: 'react-paginating.umd.min',
    format: 'iife',
    sourcemap: true
  };
}

export default [{
  input: 'src/Pagination/index.js',
  output,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    isMinify ? terser() : null
  ]
}];