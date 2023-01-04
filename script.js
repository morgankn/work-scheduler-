// need to make global variables

var currentTime = dayjs().hour();
var displayTime = dayjs.unix(Math.floor(Date.now() / 1000)).format('MMM D, YYYY, HH:mm:ss a');
$('#time').text(displayTime);

var presentEl = $('.row time-block present');
var pastEl = $('.row time-block past');
var futureEl = $('.row time-block future');
var saveBtn = $('.saveBtn');
var value = [];

//get local storage when page loads
function getDailyInput(){
  for(i = 0; i < 9; i++){
    value.push(localStorage.getItem([i]));
    $('#hour-' + [i]).text(value[i]);
  }
};
getDailyInput();

//set local storage when click btn
$('.saveBtn').on('click',function(){
  var value = $(this).siblings('.description').val()
  var id = $(this).siblings('.description').attr('id');
   localStorage.setItem(id, value);
  console.log(this)
}
)

// var info = localStorage.getItem('hour-9')
// $('#hour-9').children('.description').val(info);

// text areas and inputs use value val() in Jquery 
// .each loop 

var hourList = ['hour-9','' ]
// .split - array of hour and nine 

// compare to day.js .hour 

// Change hours to 24 format loop through, concat 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding text area elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//color coordinate based on current time 
$('.description').addClass('past')
  for(i = 0; i <= 24; i++){
    if (currentTime - 12 === i - 12){
      $('#hour-' + [i-12]).addClass('present');
    } else if (currentTime < i){
      $('#hour-' + [i-12]).addClass('future');
    }

  };

