
//psuedo code
//Create a function multi 3 args
//If the product is over 50 - alert yes

//Create a function
function multi(x,y,z) {
  //Multyply the arguments tofether
  var prod = x * y * z;
  //If product is over 50
  if (prod > 50) {
    alert("Yes")
  }
}

//alert yes

//Call the function
multi(2,5,7)


//When a user clicks a button

//Pull value out of input and alert value

//Click Event Listner
document.getElementById("sub").onclick = calc



//Function
function calc(){
  //get the value out of the input
  var val = document.getElementById("inputTwo").value
  //alert the value
  alert(val)
}


/////////////////////////////// CALCULATOR///////////////////////////////////////////
// User enters values
//
// Values are operated on after click of operation

//event listner for addition
document.getElementById('add').onclick = addNums
//event listner for substraction
document.getElementById('sub').onclick = subNums
//event listner for multiply
document.getElementById('multi').onclick = multNums
//event listner for division
document.getElementById('divide').onclick = divideNums


//function for addition
function addNums(){
  //get value out of first userInputOne
  var num1 = parseFloat(document.getElementById('userInputOne').value)
  //get value out of second userInputTwo
  var num2 = parseFloat(document.getElementById('userInputTwo').value)
  //add both values
  var sum = num1 + num2
  //alert the sum
  alert(sum)
}
//function for substraction
function subNums(){
  //get value out of first userInputOne
  var num1 = parseFloat(document.getElementById('userInputOne').value)
  //get value out of second userInputTwo
  var num2 = parseFloat(document.getElementById('userInputTwo').value)
  //add both values
  var minus = num1 - num2
  //alert the sum
  alert(minus)
}
//function for multiply
function multNums(){
  //get value out of first userInputOne
  var num1 = parseFloat(document.getElementById('userInputOne').value)
  //get value out of second userInputTwo
  var num2 = parseFloat(document.getElementById('userInputTwo').value)
  //add both values
  var mult = num1 * num2
  //alert the sum
  alert(mult)
}
//function for division
function divideNums(){
  //get value out of first userInputOne
  var num1 = parseFloat(document.getElementById('userInputOne').value)
  //get value out of second userInputTwo
  var num2 = parseFloat(document.getElementById('userInputTwo').value)
  //add both values
  var divide = num1 / num2
  //alert the sum
  alert(divide)
}



//////////////////////////////Coinflip game///////////////////////////////
// coinflip game
//
// User clicks heads or Tails
//
// computer determines coinflip
//
// show the user if they got won or lost in the document

//event listner for Heads
document.getElementById("heads").onclick = flipHeads

//event listner for tails
document.getElementById("tails").onclick = flipTails

//function if user choose heads
function flipHeads(){
  //generate flipHeads
  var flip = genRand() ///01 - .99
  //determine if user won
  if(flip < .5){
    // place result in the dom
    document.getElementsByTagName('h1')[0].innerHTML = "You Won"
  }else {
    // place result in the dom
    document.getElementsByTagName('h1')[0].innerHTML = "You Lost"
  }
}

//function if user choose tails
function flipTails(){
  //generate flipHeads
  var flip = genRand() ///01 - .99
  //determine if user won
  if(flip < .5){
    // place result in the dom
    document.getElementsByTagName('h1')[0].innerHTML = "You Won"
  }else {
    // place result in the dom
    document.getElementsByTagName('h1')[0].innerHTML = "You Lost"
  }
}

function genRand(){
  return Math.random()
}

// // //////////////////// Dice Roll/////////////////////////////////////////////////////////////////


//User enters number which reps number of sides on die
//User clicks button
//Dice with x sides rolls
//Result is entered in the dom

//event listner for button
document.getElementsByTagName('button')[0].onclick = roll

//function for rolls
function roll(){
  //value out of input
  var numOfSides = document.getElementsByTagName('input')[0].value
  //get result of die roll
  var results = Math.ceil( Math.random()*numOfSides )
  //display result in the dom
  document.getElementsByTagName('h1')[0].innerHTML = results
}
