const createSlider = function(question, parent){
    //Create Slider
    const fieldData = question?.fieldData || {} ;
    const text = fieldData?.Question;
    const minvalue = fieldData?.MinValue;
    const maxvalue = fieldData?.MaxValue;
    const value = fieldData?.Value;
    
    const id = fieldData?.PrimaryKey;
    
    console.log (text) ;
    const slider= document.createElement("input");
    slider.type = "range";
    slider.className = "form-range pb-5";//
    slider.min = minvalue ;
    slider.max = maxvalue ;
    slider.value = value ;
    slider.id = id ;
    slider.oninput = function() {
        console.log(this.value);
        const divUpdate = document.getElementById(`sliderValueDiv_${id}`);
        divUpdate.innerHTML = this.value ;
    };
    slider.onchange = function() {
        console.log(this.value);
       const value = this.value ;
       const id = this.id ;
       const obj = {value, id};
    
       FileMaker.PerformScript("UpdateField", JSON.stringify(obj));
    };
    
    
    // create Question
    const questionDiv = document.createElement("p") ;
    questionDiv.innerHTML = `${text} <span id="sliderValueDiv_${id}" class="bg-primary text-white rounded p-1"></span>`;





    //Appending to div
    const sliderDiv = document.createElement("div");
    sliderDiv.appendChild(questionDiv);
   sliderDiv.appendChild(slider);
    return sliderDiv;
    
    
    
    
    };

    export default createSlider;
    