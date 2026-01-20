const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// 
 // if we take this height and weight value outside of the form it will be an empty value..because we want these value exactly when we are clicking on submit..but if we write this height and weight outside of the form the page will be loaded again when we are wntwring into form and it will not be a value anymore it will be an empty value

form.addEventListener('submit', function(e){
    e.preventDefault()// we use this prevent default beacuse whwenever we press the button of submit(here which is calculate but actually this is a submit button) it automatically goes inside some url but in this case we don't want it..because there is no importance of sending this data to url..so by using preventdefault actually we are stopping the data from sending to url


    // so thatswhy we are taking this height and weight inside the form-->

    const height = parseInt(document.querySelector('#height').value) // in this way we can have the value's of input

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results') 

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML =" please give a valid height"
    } else if (weight === '' || weight<=0 || isNaN(weight)) {
        results.innerHTML =" please give a valid weight"
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
         // now displaing the result
         results.innerHTML = `<span>${bmi}</span>`    
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    
    //-------------------------------------------------
    if (bmi <18.6) {
        results.innerHTML = "under weight"
            
    }else if (bmi >=18.6 && bmi<=24.9) {
            results.innerHTML = "normal range"            
    } else {
            results.innerHTML = "over weight"
    }

});