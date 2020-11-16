
var acmInterval;

function mainDemo() {
  $('#demo-msg-1').animate({
    'opacity': '0'
  });
  $('#demo-progress-1').animate({
    'opacity': '1'
  });
  var p = 0;
  $('#acm').loadgo('resetprogress');
  $('#demo-progress-1').html('0%');
  window.setTimeout(function() {
    acmInterval = window.setInterval(function() {
      if ($('#acm').loadgo('getprogress') == 100) {
        window.clearInterval(acmInterval);
        $('#demo-msg-1').animate({
          'opacity': '1'
        });
        $('#demo-progress-1').animate({
          'opacity': '0'
        });
      } else {
        var prog = p * 10;
        $('#acm').loadgo('setprogress', prog);
        $('#demo-progress-1').html(prog + '%');
        p++;
      }
    }, 150);
  }, 300);
};

$(window).load(function() {
  $("#acm").load(function() {
    // Main demo
    $('#acm').loadgo();
  }).each(function() {
    if (this.complete) $(this).load();
    mainDemo();
  });
});
