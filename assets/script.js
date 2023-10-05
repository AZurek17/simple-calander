// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn"t run until the browser has finished rendering all the elements
// in the html.

function currentTime(){
   var today = dayjs();
  $("#currentDay").text(today.format("dddd - MMMM DD, YYYY"));
}
currentTime();


var mainContainer = $("#container");
var workHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = dayjs().hour();


$(function () {

  for (var i = 0; i < workHours.length; i++) {

    var hours = `${workHours[i]} a.m.`;
    if(workHours[i] > 11){
      hours = `${workHours[i]} p.m.`;
      if(workHours[i] > 12)  hours = `${workHours[i] - 12} p.m.`;
    }

    var parentDiv = $("<div>");
    parentDiv.attr("id", `hour-${workHours[i]}`);
    parentDiv.addClass("row time-block");
    if(currentHour < workHours[i])parentDiv.addClass("future");
    if(currentHour === workHours[i])parentDiv.addClass("present");
    if(currentHour > workHours[i]){parentDiv.addClass("past");}

    if(currentHour > workHours[i]){parentDiv.attr("id", `hour-${workHours[i]}, past`);}

    //if (currentHour > workHours[i])
    
    var hourDiv = $("<div>");
    hourDiv.addClass("col-2 col-md-1 hour text-center py-3");
    hourDiv.text(hours);

    var textArea = $("<textarea>");
    textArea.addClass("col-8 col-md-10 description");
    textArea.attr("id", `textArea-${i}`);
    
    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-2 col-md-1");
    saveBtn.attr("aria-label", "save");
    saveBtn.attr("id", `saveText-${i}`);

    var btnIcon = $("<i>");
    btnIcon.addClass("fas fa-save");
    btnIcon.attr("aria-hidden", "true");
    

    saveBtn.append(btnIcon);
    parentDiv.append(hourDiv, textArea, saveBtn);
    mainContainer.append(parentDiv);


    


    
    //var saveText = document.querySelector(`#saveText-${i}`);
    // saveText.on("click", function(){
    // var daySave = "textArea.textContent";
    // localStorage.setItem("dayHour", daySave);
    //})
  
    
  }
  
  
    

    //var disableBtn = document.getElementsByClassName("row time-block past");





    // function hourSaved(){
    //   var saveText = localStorage.getitem("#`textArea-${i}`");
    //   saveText.textContent = savedText;
    // }

    // saveBtn.addEventListener("click", function(event) {
    
    // localStorage.setItem("#`textArea-${i}`", savedText);
    // hourSaved();})


  //   var element = event.target;
  // if (element.matches("#past")) {
  // saveBtn.prop("disabled", true);
  // textArea.prop("disabled", true);

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








