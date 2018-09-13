# SassLint Config

> SassLint [shareable config](https://github.com/sasstools/sass-lint#sass-lint-----)

[![NPM Version](https://img.shields.io/npm/v/@cknow/sasslint-config.svg)](https://www.npmjs.com/package/@cknow/sasslint-config)
[![Downloads](https://img.shields.io/npm/dt/@cknow/sasslint-config.svg)](https://www.npmjs.com/package/@cknow/sasslint-config)
[![MIT License](https://img.shields.io/npm/l/@cknow/sasslint-config.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/sasslint-config.svg?branch=master)](https://travis-ci.org/cknow/sasslint-config)
[![Build status](https://ci.appveyor.com/api/projects/status/79q1tlym2xu1pxq1/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/sasslint-config/branch/master)

[![Dependencies Status](https://david-dm.org/cknow/sasslint-config/status.svg)](https://david-dm.org/cknow/sasslint-config)
[![devDependencies Status](https://david-dm.org/cknow/sasslint-config/dev-status.svg)](https://david-dm.org/cknow/sasslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/sasslint-config/peer-status.svg)](https://david-dm.org/cknow/sasslint-config?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/sasslint-config.svg)](http://isitmaintained.com/project/cknow/sasslint-config)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/sasslint-config.svg)](http://isitmaintained.com/project/cknow/sasslint-config)
[![Gitter](https://badges.gitter.im/cknow/sasslint-config.svg)](https://gitter.im/cknow/sasslint-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install

```bash
npm install --save-dev @fourdigit/sasslint-config-fourdigit
```

## Usage

> SassLint [configuration](https://github.com/sasstools/sass-lint#configuring)

Add some SassLint config to your `.sass-lint.yml`:

```yaml
options:
  config-file: ./node_modules/@fourdigit/sasslint-config-fourdigit/config.yml
```

## Usage direct on command line

```bash
sass-lint --config ./node_modules/@fourdigit/sasslint-config-fourdigit/config.yml
```

> **Note:** It is not necessary to create the `.sass-lint.yml` file.
