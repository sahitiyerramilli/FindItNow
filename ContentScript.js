document.addEventListener('mouseup', function (event) {
    var sel = "hello";

    if (sel.length)
        chrome.runtime.sendMessage({ greeting : sel }, function (response) { })
})