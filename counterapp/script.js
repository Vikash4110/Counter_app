const countValue = document.querySelector("#counter");

function increment() {
    // get the value from ui
    let value = parseInt(countValue.innerHTML);
    // update value
    value=value+1;
    // step the value on ui
    countValue.innerHTML=value;
}

function decrement() {
    // get the value from ui
    let value = parseInt(countValue.innerHTML);
    // update value
    value=value-1;
 // step the value on ui
    countValue.innerHTML=value;
}