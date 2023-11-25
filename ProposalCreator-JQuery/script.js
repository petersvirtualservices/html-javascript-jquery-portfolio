

$("#submit").click(function (event) {
  event.preventDefault();
  const name = $("#name").val();
  const attn = $("#attn").val();
  const title = $("#title").val();
  const timeline = $("#timeline").val();
  var experience = [];
  var signOff = [];


  //***Skillset***
  
  if ($("#product_tester").is(':checked'))
    experience.push(`Sentence on qualifications.  <br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#internet_researcher").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#network_connections").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#data_entry").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#calendar_organization").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#customer_service_contractor").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#hCSS").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  if ($("#portfolio").is(':checked'))
    experience.push(`Sentence on qualifications.`);  // checked
  else
    experience.push("");

  //***Sign-Off***

  if ($("#signOffOne").is(':checked'))
    signOff.push(`Thank you,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffTwo").is(':checked'))
  signOff.push(`Good luck with your search,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffThree").is(':checked'))
  signOff.push(`Have a great day,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffFour").is(':checked'))
  signOff.push(`I wish you the best,<br/>`);  // checked
  else
  signOff.push("");



  $("#goesHere1").html("Hello " + attn + ",");
  $("#goesHere2").html("I am an experienced " + title + " who has worked with clients in similar projects.  I would be honored to use my experience to help your project.");
  $("#goesHere3").html(experience);
  $("#goesHere4").html(timeline);
  $("#goesHere5").html(signOff);
  //$("#goesHere6").html("Charlene");
  $("#goesHere7").html(name);
});


