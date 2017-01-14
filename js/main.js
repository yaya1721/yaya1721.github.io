
function addTask(){
  var value = $("#ipt").val();
  console.log("hi");
  if (value!==""){
     $("#info").append(" <span class=\"content\">"
                         +"Hello"+value+"</span>")
  
 
    $("#ipt").val("");
  
  }else{
    alert("You must write something!");
  }
}
$("button#in").on("click", addTask);
