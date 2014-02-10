var appendStyles = function(){
    $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', chrome.extension.getURL("hide-ad.css")));
//    $('head').append($('<link rel="stylesheet" type="text/css" href="https://raw2.github.com/r00ger/seasonvar-no-ad/master/hide-ad.css"/>'));
}

if ($('head').length) {
    appendStyles();
} else {
    $(appendStyles);
}