//document.addEventListener('DOMContentLoaded', function () {
//    console.log('DOM loaded');
//    var el = document.getElementById("plang");
//    el.addEventListener('onchange', SetLang);
//});

window.onload = function ()
{
    var mb = document.getElementById("plang");
    mb.addEventListener("onchange", SetLang);
}

function SetLang()
{
    console.log("Getting hit on popup");
}