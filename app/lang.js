var LANG = (function () {
    'use strict';
    var self = {};
    self.LANG = 'data-en';
    self.ENGLISH = 'data-en';
    self.FRENCH = 'data-fr';
    self.get = function (obj) {
        if (obj) {
            if (self.LANG === self.ENGLISH) {
                return obj.messageen;
            } else if (self.LANG === self.FRENCH) {
                return obj.messagefr;	
            }
        }
        return '';
    };
    self.getmsg = function (obj) {
        if (self.LANG === self.ENGLISH) {
            return obj.messageen;
        } else if (self.LANG === self.FRENCH) {
            return obj.messagefr;
        } else {
            return '';
        }
    };
    self.lookup = function (bundle, attrname) {
        if (bundle.hasOwnProperty(attrname)) {
            return LANG.get(bundle[attrname]);
        } else {
            return attrname;
        }
    };
    self.viewTranslate = function (select) {
        var selector = '[data-en]', ls = {}, i = 0;
        if (select) {
            selector = select + ' ' + selector;
        }
        ls = $(selector);
        for (i = 0; i < ls.length; i += 1) {
            $(ls[i]).text($(ls[i]).attr(self.LANG));
        }
		
        if (self.LANG === self.ENGLISH) {
            $('.english').show();
        } else {
            $('.french').show();
        }
    };
    return self;
}());