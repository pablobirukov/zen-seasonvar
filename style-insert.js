var appendStyles = function(){
    $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', chrome.extension.getURL("hide-ad.css")));
	$('object').each(function(i, o){ if ($(o).css('position') === 'fixed') $(o).hide();})
}

if ($('head').length) {
    appendStyles();
} else {
    $(appendStyles);
}