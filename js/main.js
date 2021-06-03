import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// install BootstrapVue
Vue.use(BootstrapVue);
// install BootstrapVue icon components plugin (optional)
Vue.use(IconsPlugin);

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





  
