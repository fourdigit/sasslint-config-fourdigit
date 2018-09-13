'use strict';

import test from 'ava';
import sasslint from 'sass-lint';

const runSassLint = file => {
    const options = {
        options: {
            'config-file': require.resolve('../config.yml'),
            'cache-config': false
        }
    };

    return sasslint.lintFiles(require.resolve(file), options);
};

test('sasslint sass', t => {
    const result = runSassLint('./fixtures/example.sass');

    t.is(1, result[0].errorCount);
    t.is(result[0].messages[0].ruleId, 'no-color-literals');
});

test('sasslint scss', t => {
    const result = runSassLint('./fixtures/example.scss');

    t.is(1, result[0].errorCount);
    t.is(result[0].messages[0].ruleId, 'no-color-literals');
});
