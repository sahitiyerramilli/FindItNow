var seltext = null;
    
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    seltext = request.greeting;

    fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '3cb97d073a764608af07f2857d578cee',
            'Ocp-Apim-Subscription-Region': 'centralindia'
        },
        body: JSON.stringify([
            { 'Text': 'Hey, this is awesome' }
        ])
    }).then(res => {
        return res.json()
    }).then(data => console.log(data))
}
);