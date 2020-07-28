//document.addEventListener('DOMContentLoaded', function () {
//    console.log('DOM loaded');
//    var el = document.getElementById("plang");
//    el.addEventListener('onchange', SetLang);
//});

window.onload = function ()
{
    console.log("onload");
    var mb = document.getElementById("plang");
    console.log("mb " + mb);
    mb.addEventListener("change", SetLang);
}

function SetLang()
{
    console.log("setlang");
    var mb = document.getElementById("plang");
    chrome.storage.sync.set({ language: "telugu" }, function () { })
}