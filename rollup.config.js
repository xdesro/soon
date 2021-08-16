import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import glslify from 'rollup-plugin-glslify';

export default [
  {
    input: 'src/js/index.js',
    output: {
      compact: true,
      format: 'iife',
      minifyInternalExports: true,
      dir: 'dist/js'
    },
    plugins: [glslify(), nodeResolve(), terser()]
  }
];
