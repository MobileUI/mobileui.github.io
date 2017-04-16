$(document).ready(function(){
  $('textarea.bind-code').each(function(i, block) {
    var mode = $(block).attr('mode')
    var absolute = $(block).attr('header-absolute')
    if(!mode) {
      mode = 'text/html'
    }
    var editor = CodeMirror.fromTextArea(block, {
      lineNumbers: false,
      mode: mode,
      readOnly: true
    });
    var code = $(block).val()
    if(absolute) {
      code = code.replace('"header', '"header header-absolute')
    }
    $(block).after('<div class="result">'+code+'<div class="cls"></div></div>')
  });

  var $document = $(document);
  var $element = $('.menu');
  var className = 'hasScrolled';

  var checkScroll = function(){
    if ($document.scrollTop() >= 80) {
      $element.addClass(className);
    } else {
      $element.removeClass(className);
    }
  }

  checkScroll()

  $document.scroll(function() {
    checkScroll()
  });

})
