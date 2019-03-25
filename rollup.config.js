import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.min.js',
        format: 'umd',
        name: 'evangelist',
        compact: true,
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: './',
        }),
        nodeResolve({
            extensions: [ '.mjs', '.js', '.ts', '.json' ],
        }),
        commonjs({
            extensions: [ '.mjs', '.js', '.ts', '.json' ],
        }),
    ],
};
