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

test('sasslint scss BAD', t => {
    const result = runSassLint('./fixtures/bad.scss');

    t.is(3, result[0].errorCount);

    t.is(result[0].messages[0].ruleId, 'indentation');
    t.is(result[0].messages[1].ruleId, 'property-units');
    t.is(result[0].messages[2].ruleId, 'property-units');
});

test('sasslint scss GOOD', t => {
    const result = runSassLint('./fixtures/good.scss');

    t.is(0, result[0].errorCount);
});
