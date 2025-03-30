import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';

export default defineConfig({
  output: {
    assetPrefix: '/what-s-me/',
  },
  html: {
    template: "./public/index.html"
  },
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginTypedCSSModules()
  ],
  tools: {
    postcss: {
      postcssOptions: {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        plugins: [require('@tailwindcss/postcss')],
      },
    },
  }
});
