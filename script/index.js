let array = [2,5,7,10,50]
let button = document.querySelector('button')
let output = document.querySelectorAll('label')[1]
let i = 0

function nextNum() {
  if (i < array.length){  //if statement declared to make loop until the index is the same length of the array 
    output.innerText = 'The number: ' + array[i] 
    i++  //Post-Increment
  }else{
    i=0
  }
  
}
button.addEventListener('click', nextNum)
