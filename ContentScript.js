document.addEventListener('mouseup', function (event) {
    var sel = window.getSelection().toString();
    console.log(sel)
    if (sel.length)
        chrome.runtime.sendMessage({ greeting : sel }, function (response) { })
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    var result;
    console.log("onchanged");
    chrome.storage.sync.get(['response'], function (result) {
        console.log("hi " + result.key);
        /*var popup = document.getElementById("myPopup");
        popup.innerHTML = "hello";
        popup.classList.toggle("show");*/
    });
})