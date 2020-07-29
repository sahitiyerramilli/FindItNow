var meaning = null;
var translation = null;
var count = 0;

document.addEventListener('mouseup', function (event) {
    var sel = window.getSelection().toString();
    sel = sel.trim();
    console.log("hello" + sel);
    var popup = document.createElement("DIV");
    popup.textContent = sel;
    popup.id = "tooltip";
    document.body.appendChild(popup);
    $("#tooltip").css({
        top: event.pageY + 'px',
        left: event.pageX + 'px',
        position: 'absolute'
    });
    $('#tooltip').css('background-color', '#ADD8E6');
    $('#tooltip').css('display', 'inline-block');
    $('#tooltip').css('padding-top', '5px');
    $('#tooltip').css('padding-right', '5px');
    $('#tooltip').css('padding-bottom', '5px');
    $('#tooltip').css('padding-left', '5px');
    $('#tooltip').css('fontSize', '17px');
    //$('#tooltip').css('border', '1px solid');
    //$('#tooltip').css('border-color', '#3333FF');
    $('#tooltip').css('font-style', 'Microsoft GothicNeo');
    $('#tooltip').css('border-radius', '2px');
    $('#tooltip').css('display', 'none');
    console.log(sel)
    if (sel.length && sel.split(' ').length < 50)
        chrome.runtime.sendMessage({ greeting: sel }, function (response) { })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        if ("response" == key) {
            var storageChange = changes[key];
            translation = storageChange.newValue;
            count = count + 1;
            displayData();
            /*document.getElementById("tooltip").textContent += "\nTranslation: " + storageChange.newValue;
            $("#tooltip").show();*/
            console.log('Transaltion is - "%s".', storageChange.newValue, count);
        }
        if ("meaning" == key) {
            var storageChange = changes[key];
            meaning = storageChange.newValue;
            count = count + 1;
            displayData();
            //document.getElementById("tooltip").textContent += "\nMeaning: " + storageChange.newValue;
            //$("#tooltip").show();
            console.log('\nMeaning is - "%s".', storageChange.newValue);
        }
    }
})

function displayData() {
    var sel = window.getSelection().toString();
    if (count == 2) {
        var data = sel;
        if (meaning != "" && meaning != null)
            data += "<br><br><b>Meaning:</b> " + meaning
        else
            data += "<br>";
        if (translation != "")
            data += "<br><b>Translation:</b> " + translation;
        document.getElementById("tooltip").innerHTML = data;
        $("#tooltip").fadeTo("fast",0.85);
        $("#tooltip").show();
        count = 0;
    }
}