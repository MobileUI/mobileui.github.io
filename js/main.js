$(document).ready(function(){
  $('textarea.bind-code').each(function(i, block) {
    var mode = $(block).attr('mode')
    if(!mode) {
      mode = 'text/html'
    }
    CodeMirror.fromTextArea(block, {
      lineNumbers: false,
      mode: mode,
      readOnly: true
    });
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
