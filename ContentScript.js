document.addEventListener('mouseup', function (event) {
    var sel = window.getSelection().toString();
    console.log(sel)
    if (sel.length)
        chrome.runtime.sendMessage({ greeting : sel }, function (response) { })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        if ("response" == key) {
            var storageChange = changes[key];
            console.log('Transaltion is - "%s".', storageChange.newValue);
        }
    }
});