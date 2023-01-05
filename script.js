
var currentTime = dayjs().hour();
var displayTime = dayjs.unix(Math.floor(Date.now() / 1000)).format('MMM D, YYYY, HH:mm:ss a');
$('#time').text(displayTime);

var presentEl = $('.row time-block present');
var pastEl = $('.row time-block past');
var futureEl = $('.row time-block future');
var saveBtn = $('.saveBtn');
var value = [];

function getDailyInput(){
  for(i = 0; i < 12; i++){
    value.push(localStorage.getItem([i]));
    $('#hour-' + [i]).text(value[i]);
  }
};
getDailyInput();


$('.saveBtn').on('click',function(){
  var value = $(this).siblings('.description').val()
  var id = $(this).siblings('.description').attr('id');
   localStorage.setItem(id, value);
  console.log(this)
}
)


var hourList = ['hour-9','' ]


 

$('.description').addClass('past')
  for(i = 0; i <= 24; i++){
    if (currentTime - 12 === i - 12){
      $('#hour-' + [i-12]).addClass('present');
    } else if (currentTime < i){
      $('#hour-' + [i-12]).addClass('future');
    }
  };
