!SLIDE section
# Mocking  #

!SLIDE execute
# Jack #

    @@@ javaScript
    jack(function(){
        jack.expect("jQuery.get").exactly("1 time");
    });

<br /><br /><br /><br /><br />

    @@@ javaScript
    jack(function(){
        jack.expect("jQuery.get").exactly("1 time");
        jQuery.get("/pouet");
    });

!SLIDE execute

    @@@ javaScript
    jack(function(){
       jack.expect("jQuery.get")
           .exactly("1 time")
           .whereArgument(0).is("/pouet");
       jQuery.get("/plop");
    });

<br /><br /><br /><br /><br />

    @@@ javaScript
    jack(function(){
       jack.expect("jQuery.get")
           .exactly("1 time")
           .whereArgument(0).is("/pouet");
       jQuery.get("/pouet");
    });

!SLIDE 
# Mockjax #

    @@@ javaScript
    $.mockjax({
      url: '/api/0.1/user/1/',
      responseTime: 750,
      responseText: "plop"
    });

    $.mockjax({
      url: '/api/0.1/user/1/',
      response: function() {
         return "plop";
      }
    });

    
