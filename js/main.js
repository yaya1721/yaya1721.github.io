
function addTask(){
  var value = $("#ipt").val();
  if (value!==""){
     $("#info").append(" <li><label><span class=\"content\">"
                         +"Hello"+value+"</span></li>")
  
  
    $("#ipt").val("");
    updateNum();
  }else{
    alert("You must write something!");
  }
}
$("#in").on("click", addTask);
