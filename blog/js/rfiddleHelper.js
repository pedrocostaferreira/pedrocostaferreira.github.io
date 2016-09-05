$('document').ready(function(){
    renderPage();
});

function renderPage(){
    $.fn.inlineStyle = function (prop) {
        return this.prop("style")[$.camelCase(prop)];
    };
    $('pre.rfiddle').each(function(){
        var url = "http://r-fiddle.org/#/query/preview?code=";
        var iframe = document.createElement("iframe");
        var code = $(this).text();
        var height = $(this).inlineStyle('height');

        iframe.src = url + encodeURIComponent(code);
        iframe.width ='100%';
        
        if(!height)
           iframe.height = 38 + 19 * getNumberOfLines(code) + 'px';
        else
            iframe.height = height;
        iframe.frameBorder='0';
        iframe.allowFullScreen = 'allowfullscreen'
        $(this).replaceWith(iframe);
    });

    $('pre.rfiddle-interactive').each(function(){
        var url = "http://r-fiddle.org/#/query/embed?code=";
        var iframe = document.createElement("iframe");
        var code = $(this).text();
        var height = $(this).inlineStyle('height');


        iframe.src = url + encodeURIComponent(code);
        iframe.width ='100%';
        if(!height)
            iframe.height = 85 + 38 + 19 * getNumberOfLines(code) + 'px';
        else
            iframe.height = height;
        iframe.frameBorder='0';
        iframe.allowFullScreen = 'allowfullscreen'
        $(this).replaceWith(iframe);
    });
}

function getNumberOfLines(str){
    //get the number of lines
    var lines = str.split(/\r\n|\r|\n/);
    return lines.length;
}