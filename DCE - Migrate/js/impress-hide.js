(function ( document, window ) {
  'use strict';

  document.addEventListener("impress:stepleave", function (event) {
    $('div.step.active').show();
  });

  document.addEventListener("impress:stepenter", function (event) {
    var $steps = $('div.step');
    $steps.each(function(i, step) {
      var $step = $(step);

      if(!$step.hasClass('active')) {
        $step.hide();
      }
    });
  });
})(document, window);