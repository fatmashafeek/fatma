

$(".openNav").click(function (e) {
    $(".sidenav").animate({ 'width': '250px' }, 50)
    $('.sidenav').fadeIn(1000)
    $('.openNav').animate({ 'margin-left': '250px' }, 50)
})

$(".closebtn").click(function (e) {
    $(".sidenav").animate({ 'width': '0px' }, 50)
    $('.sidenav').fadeToggle(1000)
    $('.openNav').animate({ 'margin-left': '10px' }, 50)
})

$('.singerOne').click(function (e) {
    $('.innerOne').fadeToggle(50)
    $('.innerTwo').fadeOut(50)
    $('.innerThree').fadeOut(50)
    $('..innerFour').fadeOut(50)
});

$('.singerTwo').click(function (e) {
    $('.innerTwo').fadeToggle(50)
    $('.innerOne').fadeOut(50)
    $('.innerThree').fadeOut(50)
    $('.innerFour').fadeOut(50)
});


$('.singerThree').click(function (e) {
    $('.innerThree').fadeToggle(50)
    $('.innerOne').fadeOut(50)
    $('.innerTwo').fadeOut(50)
    $('.innerFour').fadeOut(50)
});


$('.singerFour').click(function (e) {
    $('.innerFour').fadeToggle(50)
    $('.innerOne').fadeOut(50)
    $('.innerTwo').fadeOut(50)
    $('.innerThree').fadeOut(50)
});



window.countDownToTime("30 sep 2022 1:30:60");


function countDownToTime(countTo) {

    let nowDate = new Date(countTo);
    nowDate = (nowDate.getTime() / 1000);
    let oldDate = new Date();
    oldDate = (oldDate.getTime() / 1000);
    var distance = nowDate - oldDate;
    let days = Math.floor(distance / (24 * 60 * 60));
    let hours = Math.floor((distance - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}
   





var x = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var y = x-length;
  if(y<=0)
            {
                 $("#number").text("your available character finished");
            }
        else{
        $("#number").text(y);
        }
});
