$(document).ready(function() {
  generatePallet(16);
  etch();
  resize();
  
  // Discovered that when things are dynamically made, any interactions on them must be put inside callable functions!
  function etch() {
    $('.normalDiv').hover(function() {
      $(this).addClass('hoverDiv');
      $(this).removeClass('normalDiv');
    },
    function() {
      // do nothing on mouse exit
    });
  }

  function resize() {
    $('#resize button').click(function() {
      var newSide = parseInt(prompt("Specify the new width in squares you want to draw in. Remember, total area is width*height"));
      clearPallet(newSide);
    });
  }
  
  
  function generatePallet (side) {
    var divLimit = 960;
    $('body').prepend($('<div id="resize"><button>Change Pixel Density</button></div>'));
    $('#resize').after($('<div id="container"></div>'));
    for (var i = 1; i <= side; i++) {
      for (var j = 1; j <= side; j++) {
        var $newDiv = $('<div></div>');
        $newDiv.addClass('normalDiv');
        $newDiv.width(divLimit/side);
        $newDiv.height(divLimit/side);
        $('#container').append($newDiv);
      }   
      $('#container').append($('<br>'));
    }
  }

  function clearPallet (side) {
    $('#resize').empty();
    $('#resize').remove();
    $('#container').empty();
    $('#container').remove();
    generatePallet(side);
    etch();
    resize();
  }
  
});
