$('button').click(function(){
  let text = $(this).text()
  $(this).css('background','pink')
 console.log('you clicked ' + text)
})