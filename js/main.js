import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

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





  
