/**
 * Copyright 2021 Marius Wilms, Christoph Labacher All rights reserved.
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js', 'src/index.css'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  target: 'es6',
  minify: process.env.MINIFY === 'y',
  plugins: [pnpPlugin()],
  watch: process.env.WATCH === 'y',
  outdir: 'build',
}).catch(() => process.exit(1));
