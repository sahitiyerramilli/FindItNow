document.addEventListener('mouseup', function (event) {
    var sel = window.getSelection().toString();
    console.log("hello" + sel);
    var popup = document.createElement("DIV");
    popup.text = "selected";
    popup.id = "tooltip";
    document.body.appendChild(popup);
    $("#tooltip").css({
         top: event.pageY + 'px',
        left: event.pageX + 'px',
         position : 'absolute'
    });
    $('#tooltip').css('background-color', '#EEE');
    $('#tooltip').css('display', 'inline-block');
    $('#tooltip').css('padding-top', '5px');
    $('#tooltip').css('padding-right', '5px');
    $('#tooltip').css('padding-bottom', '5px');
    $('#tooltip').css('padding-left', '5px');
    $('#tooltip').css('border', '1px solid');
    $('#tooltip').css('border-color', '#3333FF');
    $('#tooltip').css('border-radius', '2px');
    $('#tooltip').css('display', 'none'); 
    if (sel.length)
        chrome.runtime.sendMessage({ greeting : sel }, function (response) { })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    var result;
    console.log("onchanged");
    chrome.storage.sync.get(['response'], function (result) {
        console.log("hi " + result.key);
        console.log("Tootltip " + $("#tooltip"));
        $("#tooltip").text("this is a para");
        $("#tooltip").show();
    });
})