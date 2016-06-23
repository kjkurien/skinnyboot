var LOADTEMPL = (function () {
    'use strict';
    var self = {};
   
    self.load = function () {
        var dataobj = { a: {  service : 'This is a Test', name : 'X'}};
        var dataarr = [{ b: { name : 'Box1 '}}, { b: { name : 'Box2'} }, { b: { name : 'Box3'} }];
        var t1 = document.querySelector('#templ1');
        var t2 = document.querySelector('#templ2');
        var clone1 = document.importNode(t1.content, true);

        Expand(clone1, dataobj);
        $('#templ1holder').append(clone1);
        for (var i=0; i<dataarr.length; i+=1) {
            var clone2 = document.importNode(t2.content, true);
            Expand(clone2, dataarr[i]);
            $('#templ2holder').append(clone2);
        }
    };
    
    return self;
}());