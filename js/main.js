$(document).ready(function(){
  $('textarea.bind-code').each(function(i, block) {
    var code = $(block).val()
    var mode = $(block).attr('mode')
    var absolute = $(block).attr('header-absolute')
    var replace = $(block).attr('replace')
    if(replace) {
      code = code.replace(new RegExp(replace.split(',')[0], 'g'), replace.split(',')[1]);
    }
    if(!mode) {
      mode = 'text/html'
    }
    var editor = CodeMirror.fromTextArea(block, {
      lineNumbers: false,
      mode: mode,
      readOnly: true
    });
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
  var checkHashSection = function(){
    $('h2[id]').each(function(i,e){
        if ($(e).offset().top < window.pageYOffset + 10 && $(e).offset().top + $(e).height() > window.pageYOffset + 10) {
            window.location.hash = $(e).attr('id');
            $('.menu a').removeClass('active');
            $('.menu a[href="#'+$(e).attr('id')+'"]').addClass('active');
        }
    });
  }

  checkScroll()
  checkHashSection()

  $document.scroll(function() {
    checkScroll()
    checkHashSection()
  });

})
