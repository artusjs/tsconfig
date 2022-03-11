# @artus/tsconfig

TSConfigs for Artus projects to extend.

## install

```bash
npm i -D @artus/tsconfig
```

## usage

```json
// your_tsconfig.json
{
  "extends": "@artus/tsconfig",
  // custom config...
  "compilerOptions": {
    "outDir": "./lib",
    "rootDir": "./src",
  },
  "exclude": [
    "lib",
    "test",
    "**/*.test.ts"
  ]
}
```