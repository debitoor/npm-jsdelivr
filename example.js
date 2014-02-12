#!/usr/bin/env node

'use strict';

var transform = require('./');
var packages = require('./packages');


main();

function main() {
    var result = transform(packages);

    console.log(require('util').inspect(result, {
        depth: null,
        colors: false
    }));

    console.log('\n\nlength', result.length);
}
