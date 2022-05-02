

$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
  });


$(document).ready(function() {
  $(document).on('mouseover', function(e) {
    $('#circularcursor').css({
      innerWidth: '30px'
    });
  })
});