import terser from '@rollup/plugin-terser';

export default {
    input: "userScript.js",
    output: { file: "../../dist/userScript.js", format: "iife" },
    plugins: [
        terser({
            ecma: '5',
            mangle: true,
        }),
    ]
};