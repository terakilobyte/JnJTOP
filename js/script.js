/*jslint browser: true, devel: true, plusplus: true, space: true, latedef: nofunc*/
/*global $, jQuery, alert*/

function etch() {
  'use strict';
  $('.normalDiv').hover(function () {
    $(this).addClass('hoverDiv');
    $(this).removeClass('normalDiv');
  },
                        function () {
  });
}

function generatePallet(side) {
  'use strict';
  var i, j, $newDiv, divLimit = 960;
  $('body').prepend($('<div id="resize"><button>Change Pixel Density</button></div>'));
  $('#resize').after($('<div id="container"></div>'));
  for (i = 1; i <= side; i++) {
    for (j = 1; j <= side; j++) {
      $newDiv = $('<div></div>');
      $newDiv.addClass('normalDiv');
      $newDiv.width(divLimit / side);
      $newDiv.height(divLimit / side);
      $('#container').append($newDiv);
    }
    $('#container').append($('<br>'));
  }
    etch();
    resize();
}

function clearPallet (side) {
  'use strict';
  $('#resize').empty();
  $('#resize').remove();
  $('#container').empty();
  $('#container').remove();
  generatePallet(side);
}

function resize() {
  'use strict';
  $('#resize button').click(function () {
    var newSide = parseInt(prompt("Specify the new width in squares you want to draw in. Remember, total area is width*height"), 10);
    clearPallet(newSide);
  });
}

$(document).ready(function () {
  // Discovered that when things are dynamically made, any interactions on them must be put inside callable functions
  'use strict';
  generatePallet(16);
});
