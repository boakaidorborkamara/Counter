let count_amount = document.getElementById("count-amount");
let decrease_btn = document.getElementById("decrease-btn");
let increase_btn = document.getElementById("increase-btn");
let reset_btn = document.getElementById("reset-btn");

let counter = 0;

//takes current count as input and add display it in the HTML
function displayCount(current_count){
    count_amount.innerText = current_count;
}

//style the current count base on the value
function validateCount(current_count){
    if(current_count === 0){
        count_amount.style.color = "rgb(61, 61, 68)";
    }
    else if(current_count > 0){
        count_amount.style.color = "green";
    }
    else if(current_count < 0){
        count_amount.style.color = "red";
    }
}

//increase the current amount in the counter variable
function increaseCounter(){
    counter++;
    displayCount(counter);
    validateCount(counter);
}

//increase the current amount in the counter variable
function decreaseCounter(){
    counter--;
    displayCount(counter);
    validateCount(counter);
}

//reset current count value to zero
function resetCounter(){
    counter = 0;
    displayCount(counter);
    validateCount(counter);
}

increase_btn.addEventListener("click", increaseCounter);
decrease_btn.addEventListener("click", decreaseCounter);
reset_btn.addEventListener("click", resetCounter);
