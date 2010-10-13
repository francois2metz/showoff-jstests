!SLIDE section
# Simulate Events #

!SLIDE
# With jQuery #

    @@@ Javascript
    $("#myelement").click();

<br /><br />

    @@@ Javascript
    $("#myelement").trigger('mycustomevent');

!SLIDE execute
# With Syn #

    @@@ javaScript
    Syn.type("Hello", "myinputtext");

<br />
<center>
  <input type="text" id="myinputtext" />
</center>

    @@@ javaScript
    Syn.click({}, "mysubmit");

<br />
<center>
  <input type="submit" id="mysubmit" value="Hello Word" onclick="alert('plop');" />
</center>

    @@@ javaScript
    $("#myinputtext").triggerSyn("type", "Hello");


!SLIDE

# With Syn (2) #

    @@@ javaScript
    Syn.type('ice water','title')
       .type('ice and water','description')
       .click({},'create')
       .drag({to: 'favorites'},'newRecipe', function(){
           ok($('#newRecipe').parents('#favorites').length);
        });
