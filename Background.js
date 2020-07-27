var seltext = null;
    
chrome.extension.onMessage.addListener(function(request, sender, sendResponse)
{
    seltext = request.greeting;
    Console.log("done");
}
);