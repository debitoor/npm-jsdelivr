#!/usr/bin/env node

'use strict';

var fs = require('fs');
var request = require('request');

request.get({
        url: 'http://api.jsdelivr.com/v1/jsdelivr/libraries'
    }, function (err, res, body) {
        fs.writeFile('./packages.json', body);
    });
