
$(function () {

 function currentTime(){
   var today = dayjs();
   $("#currentDay").text(today.format("dddd - MMMM DD, YYYY"));
 }
 currentTime();
 
 var mainContainer = $("#container");
 var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
 var currentHour = dayjs().hour();
  for (var i = 0; i < workHours.length; i++) {
// converting military time to AM, PM
    var hours = `${workHours[i]} a.m.`;
    if(workHours[i] > 11){
      hours = `${workHours[i]} p.m.`;
      if(workHours[i] > 12)  hours = `${workHours[i] - 12} p.m.`;
// getting saved inputs to display to user
    var savedTask = localStorage.getItem(`hour-${workHours[i]}`);
      if (savedTask) {
      textArea.val(savedTask);
      }
    }
// adding div classes and id's for HMTL
    var parentDiv = $("<div>");
    parentDiv.attr("id", `hour-${workHours[i]}`);
    parentDiv.addClass("row time-block");
    
    if(currentHour < workHours[i])parentDiv.addClass("future");
    if(currentHour === workHours[i])parentDiv.addClass("present");
    if(currentHour > workHours[i])parentDiv.addClass("past");
    
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

// EventListener for save button
    $(".saveBtn").on("click", function (){
      var hourSaved = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
      console.log(localStorage);
      localStorage.setItem(hourSaved, userInput);
    });
  }
});








