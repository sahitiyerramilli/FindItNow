document.addEventListener('mouseup', function (event) {
    var sel = window.getSelection().toString();
    console.log(sel)
    if (sel.length)
        chrome.runtime.sendMessage({ greeting : sel }, function (response) { })
})