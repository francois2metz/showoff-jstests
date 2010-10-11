!SLIDE
# Simulate events with jquery #

    @@@ Javascript
    $("#myelement").click();

!SLIDE execute
# Simulate event with Syn #

    @@@ javaScript
    Syn.type("Hello", 'myinputtext');

<br />
<center>
  <input type="text" id="myinputtext" />
</center>

    @@@ javaScript
    Syn.click({}, 'mysubmit');

<br />
<center>
  <input type="submit" id="mysubmit" value="Hello Word" onclick="alert('plop');" />
</center>
