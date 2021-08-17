import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import glslify from 'rollup-plugin-glslify';

export default [
  {
    input: 'src/js/index.js',
    output: {
      compact: true,
      format: 'iife',
      dir: 'dist/js'
    },
    plugins: [nodeResolve(), terser()]
  },
  {
    input: 'src/js/gl.js',
    output: {
      compact: true,
      format: 'iife',
      dir: 'dist/js'
    },
    plugins: [glslify(), nodeResolve(), terser()]
  },
  {
    input: 'src/js/transitions.js',
    output: {
      compact: true,
      format: 'iife',
      dir: 'dist/js'
    },
    plugins: [nodeResolve(), terser()]
  }
];
