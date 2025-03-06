import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: 'src/index.ts',
  external: [/node_modules/],
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    nodeResolve(),  // <-- Resolver to handle node modules
  ]
};