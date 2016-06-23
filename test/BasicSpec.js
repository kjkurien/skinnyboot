define(['lang'], function(l) {

    describe("Basic Test Spec", function() {
        it("simple test", function() {
            expect(true).toBe(true);
        });
        it("Language Get Test", function() {
            var obj = {'messageen': 'Hello', 'messagefr': 'Allo'};
            expect(obj.messageen).toBe(LANG.get(obj));
        });       
    });
});