$('#show-me').hide();
$('#click-me').on('click', function() {
  $('#show-me').toggleClass('.hide');
  $('#show-me').slideToggle(700);
});
