function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

$('#start').click(function(e) {
    var numbers_used = []
    var no = getRandomInt(30)
    while (numbers_used.includes(no)){
        no = getRandomInt
        if (numbers_used.length == 30){
            numbers_used = []
        }
    }
    numbers_used.push(no)
    $('#answer').html(no);
    $('#answer').css('font-size','200px')
});