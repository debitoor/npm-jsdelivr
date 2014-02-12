# npm-jsdelivr

[![build status](https://secure.travis-ci.org/jsdelivr/npm-jsdelivr.png)](http://travis-ci.org/jsdelivr/npm-jsdelivr)

`npm -jsdelivr` provides a CLI interface and an API to interface with [jsDelivr](http://www.jsdelivr.com/) [packages JSON](http://api.jsdelivr.com/v1/jsdelivr/libraries).

## Command-line Tool

Install `jsdelivr` globally:

`npm install -g jsdelivr`

### Search

To search jsDelivr:

`jsdelivr search angular`

```
restangular                   : //cdn.jsdelivr.net/restangular/1.3.1/restangular.min.js
elastic-angular-client        : //cdn.jsdelivr.net/elastic.js/1.1.1/elastic-angular-client.min.js
angular-restful               : //cdn.jsdelivr.net/angular-restful/0.0.3/angular-restful.min.js
```

### URL

To get a url for a library:

`jsdelivr url jquery`

```
jquery                        : //cdn.jsdelivr.net/jquery/2.1.0/jquery.min.js
```

The url method also supports versioning:

`jsdelivr url jquery@1.11.0`

```
jquery                        : //cdn.jsdelivr.net/jquery/1.11.0/jquery.min.js
```

### Default

With only one argument passed, `jsdelivr` assumes you want to search.

`jsdelivr angular`

```
Unknown method, assuming search.
restangular                   : //cdn.jsdelivr.net/restangular/1.3.1/restangular.min.js
elastic-angular-client        : //cdn.jsdelivr.net/elastic.js/1.1.1/elastic-angular-client.min.js
angular-restful               : //cdn.jsdelivr.net/angular-restful/0.0.3/angular-restful.min.js
```

## Module

`jsdelivr` can also be used as a module. The methods are roughly the same.

### Install

Install via npm:

`npm install jsdelivr`

### Search

Search `jsdelivr` for a given identifier:

```javascript
var jsdelivr = require('jsdelivr');
var util = require('util');

jsdelivr.search('angular', function(err, packages) {
    console.log(util.inspect(packages, {
        depth: null,
        colors: true
    }));
});

/*
[ { name: 'angular-strap',
    url: '//cdnjs.cloudflare.com/ajax/libs/angular-strap/0.7.3/angular-strap.min.js',
    versions:
     { '0.7.3': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/0.7.3/angular-strap.min.js',
       ... } },
  { name: 'angular-ui-bootstrap',
    url: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.2.0/ui-bootstrap-tpls.min.js',
    versions: { '0.2.0': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.2.0/ui-bootstrap-tpls.min.js' } },
  { name: 'angular-ui',
    url: '//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js',
    versions: { '0.4.0': '//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js' } },
  { name: 'angular.js',
    url: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.3/angular.min.js',
    versions:
     { '1.1.3': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.3/angular.min.js',
       '1.1.1': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js',
       ... } },
  ... ]
 */
```

### URL

Grab a URL for a specific package (it supports versions too):

```javascript
var jsdelivr = require('jsdelivr');
var util = require('util');

jsdelivr.url('angular.js', function(err, packages) {
    console.log(util.inspect(packages, {
        depth: null,
        colors: true
    }));
});

/*
{ name: 'angular.js',
  url: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.3/angular.min.js',
  versions:
   { '1.1.3': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.3/angular.min.js',
     '1.1.1': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js',
     ... } }
 */

jsdelivr.url('angular.js@1.0.0', function (err, packages) {
    console.log(util.inspect(packages, {
        depth: null,
        colors: true
    }));
});

/*
{ name: 'angular.js@1.0.0',
  url: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.0.0/angular.min.js',
  versions:
   { '1.1.3': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.3/angular.min.js',
     '1.1.1': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.1/angular.min.js',
     ... } }
 */
```

## Contributors

* [Tom Ashworth](https://github.com/phuu) - Creator of original [cdnjs-transform](https://github.com/phuu/cdnjs-transform) and [cdnjs](https://github.com/phuu/cdnjs) modules this library is based upon.
* [Juho Vepsäläinen](https://github.com/bebraw) - jsDelivr specific tweaks

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
