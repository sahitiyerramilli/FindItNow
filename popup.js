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
    chrome.storage.sync.set({ language: mb.value }, function () { })
}