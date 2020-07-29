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
    ChangePreferredLanguageDisplay(mb.value)
}

function ChangePreferredLanguageDisplay(langCode)
{
    console.log("Changing Preferred Language Display");
    var element = document.getElementById("Language");
    switch (langCode)
    {
        case "hi":
            {
                element.innerHTML = "Hindi";
                break;
            }
        case "te":
            {
                element.innerHTML = "Telugu";
                break;
            }
        case "ta":
            {
                element.innerHTML = "Tamil";
                break;
            }
        case "ml":
            {
                element.innerHTML = "Malayalam";
                break;
            }
        case "kn":
            {
                element.innerHTML = "Kannada";
                break;
            }
        case "mr":
            {
                element.innerHTML = "Marathi";
                break;
            }
        default:
            {
                element.innerHTML = "Unknown";
            }
    }
}