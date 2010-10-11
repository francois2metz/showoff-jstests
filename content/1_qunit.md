!SLIDE section
# Why ? #

!SLIDE section
# How ? #

!SLIDE

# Example #

    @@@ Javascript
    /* Some code */
    function calc(one, two) {
        return one + two;
    }
    test("calc should compute args", function() {
       equals(calc(1, 1), 2, "== 2")
    });

!SLIDE
# Assertions #

    @@@ Javascript
    equals(2, 2, "2 == 2");
    ok(true, "always true");
    same({pouet:'plop'}, {pouet:'plop'});

!SLIDE
# Organisation #

    @@@ Javascript
    ...
    module('calc');
    test("plop", function() {
    ...
    module("menu");
    test("plop", function() {
    ...

!SLIDE
# Situation #

<iframe src="http://localhost:5280/af83/tests.html" width="100%" height="600px" />

!SLIDE
# Setup / TearDown #

    @@@ Javascript
    ...
    module('calc', {'setup' : function() {
                     // called before each test
                   },
                   teardown: function() {
                     // called after each test
                   }});
    test("...

!SLIDE
# Async : Theory #

    @@@ Javascript
    ...
    asyncTest('my asynchronous test', function() {
       function myAsyncCall() {
          start();
          ok(true);
       }
       setTimeout(myAsyncCall, 10);
    });

!SLIDE
# Async : Practice #

    @@@ Javascript
    ...
    asyncTest('ajax call on server', function() {
       $('body').bind('ajaxComplete', function(e, xhr, settings) {
           start();
           equal(settings.type, 'post');
       });
       $.post('/pouet');
    });
