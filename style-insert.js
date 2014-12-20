
(function($){
    $(function(){
        if (location.href.indexOf('serial') === -1) return;
        var $clearFrame = $('<div id="clear-frame" style="height: 100%;"></div>'),
            $body = $('body'),
            $video = $('object'),
            $menu = $('.td-for-content h2>a').parent().css({'text-align': 'left', margin: '10px'}),
            $marks = $('#addMarks'),
            $otm = $('div.otm');
        $body.append($clearFrame.append($('#logo')).append($menu).append($otm).append($marks).append($video)).attr('style', 'padding: 0px !important; height: 100% !important;');
        $('body > *').not($clearFrame).hide();
        $('html').css('height', '100%');
    })
}(jQuery))