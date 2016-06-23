define(function (require) {
    require('jquery.min');
    require('bootstrap');
    require('expand');
    var print = require('print');
    require('./lang');
    require('./loadtempl');
    LOADTEMPL.load();
    print('Hellow');
});