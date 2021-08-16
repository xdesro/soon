import { nodeResolve } from '@rollup/plugin-node-resolve';
import glslify from 'rollup-plugin-glslify';

export default [
  {
    input: 'src/js/index.js',
    output: {
      compact: true,
      file: 'dist/js/index.js',
      format: 'umd'
    },
    plugins: [glslify(), nodeResolve()]
  },
  {
    input: 'src/js/case-studies-gl.js',
    output: {
      compact: true,
      file: 'dist/js/case-studies-gl.js',
      format: 'umd'
    },
    plugins: [glslify(), nodeResolve()]
  }
];
