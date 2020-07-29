var seltext = null;

function getData() {
    getMeaning();
    getTranslation();
}

function getMeaning() {
    return fetch('https://api.dictionaryapi.dev/api/v1/entries/en/' + seltext).then(res => {
        return res.json()
    }).then(data =>
        //console.log("Object" + (data[0].meaning)));
        chrome.storage.sync.set({ meaning: (data[0].meaning[Object.keys(data[0].meaning)[0]])[0].definition }, function () { }));
}

function getTranslation() {
    return fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es', {
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
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    seltext = request.greeting;
    console.log("background");
    var result = "seltext\n";
    getData(seltext);//.then(([meaning, translation]) => result.concat("Meaning: " + meaning + "\nTransLation: " + translation));
    console.log("storage set "+result);
    return true;
}
);
