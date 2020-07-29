window.onload = function ()
{
    console.log("onload");
    //chrome.storage.sync.get(['language'], function (result) {
    //    console.log("Out " + result.key)
    //    if (result.key != null)
    //    {
    //        console.log("Inside ")
    //        ChangePreferredLanguageDisplay(result.key)
    //    }
        
    //});

    result = getLocalStorageValue("language").then(result => ChangePreferredLanguageDisplay(result.language));
    //ChangePreferredLanguageDisplay(result)

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
    console.log("Changing Preferred Language Display %s", langCode);
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

async function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value);
            })
        }
        catch (ex) {
            reject(ex);
        }
    });
}
