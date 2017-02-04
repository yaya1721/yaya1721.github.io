
function addTask(){
  var value = $("#ipt").val();
  
  if (value!==""){
     $("#info").append(" <span class=\"content\">"
                         +"Hello "+value+"</span><br>")
  
 
    $("#ipt").val("");
  
  }else{
    alert("You must write something!");
  }
}
$("button#in").on("click", addTask);


function isEnterPressed(event){
  //alert(event.which);
  if(event.which==13){
   addTask();  
  }
}
$("#ipt").on("keypress", isEnterPressed);





  
