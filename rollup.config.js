import babel from 'rollup-plugin-babel';

export default [{
  input: 'src/Pagination/index.js',
  output: [
    {
      file: 'dist/react-paginating.cjs.js',
      name: 'react-paginating-cjs',
      format: 'cjs'
    },
    {
      file: 'dist/react-paginating.umd.js',
      name: 'react-paginating-umd',
      format: 'umd',
      sourcemap: true
    },
    {
      file: 'dist/react-paginating.esm.js',
      name: 'react-paginating-esm',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ] 
}];