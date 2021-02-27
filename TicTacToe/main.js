$(document).ready(function () {

  var o = 'o';
  var x = 'x';
  var turns = 0;

  var area1 = $('#area1');
  var area2 = $('#area2');
  var area3 = $('#area3');
  var area4 = $('#area4');
  var area5 = $('#area5');
  var area6 = $('#area6');
  var area7 = $('#area7');
  var area8 = $('#area8');
  var area9 = $('#area9');

  function isWinner(playerid) {
    if (
      area1.hasClass(playerid) && area2.hasClass(playerid) && area3.hasClass(playerid) ||
      area4.hasClass(playerid) && area5.hasClass(playerid) && area6.hasClass(playerid) ||
      area7.hasClass(playerid) && area8.hasClass(playerid) && area9.hasClass(playerid) ||
      area1.hasClass(playerid) && area4.hasClass(playerid) && area7.hasClass(playerid) ||
      area2.hasClass(playerid) && area5.hasClass(playerid) && area8.hasClass(playerid) ||
      area3.hasClass(playerid) && area6.hasClass(playerid) && area9.hasClass(playerid) ||
      area1.hasClass(playerid) && area5.hasClass(playerid) && area9.hasClass(playerid) ||
      area3.hasClass(playerid) && area5.hasClass(playerid) && area7.hasClass(playerid)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  $('li').on('mouseenter', function () {
    if(!$(this).hasClass('disabled')) {
      if (turns % 2 == 0) {
        $(this).text(o);
      }
      else {
        $(this).text(x);
      }
      $(this).css({'opacity' : '75%'});
    }
  });

  $('li').on('mouseleave', function () {
    if (!$(this).hasClass('disabled')) {
      $(this).text('+');
      $(this).css({'opacity' : '50%'});
    }
  });

  $('li').on('click', function () {
    if (!$(this).hasClass('disabled')) {
      if (turns % 2 == 0) {
        turns++;
        $(this).text(o);
        $(this).addClass('disabled o');
        if (isWinner(o)) {
          $('h1').text('Winner is O!');
        }
      }
      else {
        turns++;
        $(this).text(x);
        $(this).addClass('disabled x');
        if (isWinner(x)) {
          $('h1').text('Winner is X!');
        }
      }
      if (turns == 9) {
        $('h1').text('Tie Game!');
      }
      if (isWinner(o) || isWinner(x) || turns == 9) {
        $('li').addClass('disabled');
        $('#btn_reset').html('Restart Game');
      }
      $(this).css({'opacity' : '1'})
    }
    $('#btn_reset').click(function () {
      $('h1').text('Tic Tac Toe');
      $('#btn_reset').html('Reset Game');
      $('li').text('+');
      $('li').css({'opacity' : '50%'});
      $('li').removeClass('disabled');
      $('li').removeClass('o');
      $('li').removeClass('x');
      turns = 0;
    });
  });
});
