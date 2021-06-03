import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

function addTask(){
  var value = $("#ipt").val();
  
  if (value!==""){
     $("#info").append("<span>"+"Hello"+value+"</span><br>")
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





  
