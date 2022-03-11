'use strict';

const coffee = require('coffee');
const path = require('path');
const { promises: fs } = require('fs');
const assert = require('assert');

jest.setTimeout(10*1000);

describe('test/index.test.ts', () => {
  it('should work', async () => {
    const tsc = require.resolve('typescript/bin/tsc');
    const projectPath = path.join(__dirname, "artus_project")
    const tsconfigPath = path.join(projectPath, 'tsconfig.json');
    await coffee.fork(tsc, [ '-p', tsconfigPath ], {
      cwd: projectPath,
    })
      .debug()
      .expect('code', 0)
      .end();

    assert(await fs.stat(path.join(projectPath, 'lib')));
  });
});