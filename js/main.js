
function addTask(){
  var value = $("#ipt").val();
  if (value!==""){
     $("#info").append(" <span class=\"content\">"
                         +"Hello"+value+"</span>")
  
  console.log("hi");
    $("#ipt").val("");
  
  }else{
    alert("You must write something!");
  }
}
$("button#in").on("click", addTask);
