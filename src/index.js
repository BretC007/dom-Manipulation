import createSlider from "./createSlider";


window.loadSlider = function (json) {
console.log(json) ;
const obj = JSON.parse(json);
console.log(obj) ;
 const data = obj.data;
 console.table(data) ;
const div = document.getElementById("slider");


data.forEach(function(question){
const slider = createSlider(question) ;
div.appendChild(slider);

});

//createSlider();
  
}