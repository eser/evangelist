import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

export default [
    {
        input: './src/index.ts',
        output: [
            // browser-friendly UMD build
            {
                file: `./dist/${pkg.name}.umd.js`,
                format: 'umd',
                exports: 'named',
                name: pkg.name,
            },
            // browser-friendly UMD build (minified)
            {
                file: `./dist/${pkg.name}.umd.min.js`,
                format: 'umd',
                exports: 'named',
                name: pkg.name,
            },
            // ES module
            {
                file: `./dist/${pkg.name}.js`,
                format: 'es',
            },
            // ES module (minified)
            {
                file: `./dist/${pkg.name}.min.js`,
                format: 'es',
            },
        ],
        external: [], // Object.keys(pkg.dependencies),
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                        module: 'es2015',
                    },
                },
            }),
            terser({
                include: [ /^.+\.min\.js$/ ],
            }),
            sizeSnapshot(),
        ],
    },
    {
        input: './dist/npm/index.d.ts',
        output: [
            // ES module
            {
                file: `./dist/${pkg.name}.d.ts`,
                format: 'es',
            },
        ],
        plugins: [
            dts(),
        ],
    },
];
