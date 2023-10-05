// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function currentTime(){
   var today = dayjs();
  $('#currentDay').text(today.format('MM/DD/YYYY'));
}
currentTime();

var mainContainer = $('#container');
var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var hourOfTheDay = dayjs().hour();

$(function () {

  /** example of time block 
   * 
   <div id="hour-10" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
  */
     
  for (var i = 0; i < businessHours.length; i++) {

    var americanHours = `${businessHours[i]} a.m.`;
    if(businessHours[i] > 11){
      americanHours = `${businessHours[i]} p.m.`;
      if(businessHours[i] > 12)  americanHours = `${businessHours[i] - 12} p.m.`;
    }

    var parentDiv = $('<div>');
    parentDiv.attr('id', `hour-${businessHours[i]}`);
    parentDiv.addClass('row time-block');
    if(hourOfTheDay < businessHours[i])parentDiv.addClass('future');
    if(hourOfTheDay === businessHours[i])parentDiv.addClass('present');
    if(hourOfTheDay > businessHours[i]){parentDiv.addClass('past');}// add disable text 

    var hourDiv = $('<div>');
    hourDiv.addClass('col-2 col-md-1 hour text-center py-3');
    hourDiv.text(americanHours);

    var textArea = $('<textarea>');
    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('id', `textArea-${i}`);

    var saveBtn = $('<button>');
    saveBtn.addClass('btn saveBtn col-2 col-md-1');
    saveBtn.attr('aria-label', 'save');

    var btnIcon = $('<i>');
    btnIcon.addClass('fas fa-save');
    btnIcon.attr('aria-hidden', 'true');

    
    
    saveBtn.append(btnIcon);
    parentDiv.append(hourDiv, textArea, saveBtn);
    mainContainer.append(parentDiv);


  }
     

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  // Pseudo:
// make multiple timeblocks
// rename timeblocks accordingly with standard work hours
// global event listener to make sure clicking on the save button
// use event target, to traverse the DOM
// the save button is to save input into the timeblock into local storage
//   


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


       // Pseudo:
// declare current time for callback as a variable
// create an array and place DOM nodes in the array / DOM node: grabs an element on the page.
// Use loop to iterate through array to compare to current date/time using dayjs()
// assign past, present, and future classes
// 



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Pseudo:
// Grab information from local storage, in correspondence to the time of the day/ locate the appropriate timeblock and set value of input/textarea to the corresponding data to that timeblock
// 

  // TODO: Add code to display the current date in the header of the page.

  // Pseudo:
// make a variable that is for the current day with dayjs
// set all dates in currentDate to variable of dayjs()
// 1 object per time slot / or 1 that encompasses all of them / 

});
