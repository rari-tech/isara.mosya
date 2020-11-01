$(function(){
  $('.answer').hide(); //デフォルトではddを隠す
  $('.question').click(function(){ //dtをクリックした時
  $(this).next(".answer").slideToggle(); //隠れてたddをスライドして表示させる
  $(this).toggleClass("ac");
  });
});
