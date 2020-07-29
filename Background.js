var seltext = null;

var languageCode = 'hi';    
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    seltext = request.greeting;
    console.log("background");
    if (seltext.split(' ').length < 2) {
        fetch('https://api.dictionaryapi.dev/api/v1/entries/en/' + seltext).then(res => {
            return res.json()
        }).then(data =>
            //console.log("Object" + (data[0].meaning
            chrome.storage.sync.set({ meaning: (data[0].meaning[Object.keys(data[0].meaning)[0]])[0].definition }, function () { }));
    }
    else {
        chrome.storage.sync.set({ meaning: "" }, function () { });
    }

    fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + languageCode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '3cb97d073a764608af07f2857d578cee',
            'Ocp-Apim-Subscription-Region': 'centralindia'
        },
        body: JSON.stringify([
            { 'Text': seltext }
        ])
    }).then(res => {
        return res.json()
    }).then(data => chrome.storage.sync.set({ response: data[0].translations[0].text }, function () { }));
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        if ("language" == key) {
            var storageChange = changes[key];
            console.log("Language changed to %s", storageChange.newValue);
            languageCode = storageChange.newValue;
        }
    }
})