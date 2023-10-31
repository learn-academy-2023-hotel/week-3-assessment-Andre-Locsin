// ASSESSMENT 3: Coding Practical Questions with Jest

const { objectTypeSpreadProperty } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Pseudo code:
// b) Create the function that makes the test pass.

// Fibonacci sequence - is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually, sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.

const fibResult = (amount) => { 
  
  // create afunction to which will hold our for loop and can read an array

  const numberFib = [1,1] 
  
  //  craete an array to start our fibonacci sequence, expand it later with .push

  for(let i =2; i < amount; i++){ 
    
    //for loop to control which index the equation will begin how long to iterate the equation and the intervals
    //start at index 2 because the fibaoncci sequance for the first 2 number will be 0 followed by 1 and if our number is 0 or less it will be uncomputable

  const newFib = numberFib[i-1] + numberFib[i-2] 
  
  //variable to hold our fibonacci equation when it is called where 
  //[i-1] and [i-2] allows us to reference the elements from the array because of the '[]' where in 'i' is the value from our array and '1 and 2' is the index in our numberFib array

  numberFib.push(newFib) 
  
  // .push allows us to send the results of the equation back to our 'newFib' array until the for loop is done executing
}
return numberFib 
}
// returning numberFib to the function of fibResult

// // ============================================

//jest test
describe('fibResult', () => {
  it("should give new fibonacci with the same value ouput" ,() => {
    expect(fibResult(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibResult(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//==============================================






// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.


// a) Create a test with expect statements for each of the variables provided.

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// // Expected output: [10, 15, 20, 45, 60, 65, 100]

// // b) Create the function that makes the test pass.

// // Pseudo code:
//the function below is produced by ChatGpt
// const sortObjectValues = (obj) => {
//   const values = Object.values(obj)
//   return values.sort((a,b)  => a - b)
// }
// Object.value allows us to to get the vlues and store all the values in an array
// values.sort is sorting our array we get from Object.value from least to greatest with regards the value because our array now consist of integers


//create a function that allows us to run jest test and put the values in an array
const sortObjectValues = (object) => { 
// return the object.keys into an array which in our case would be ['sunday', 'monday', 'tuesday', ...]
const keys = Object.keys(object) 
const values = [] //empty array to store our future sorted array
  // for (let i = 0; i < keys; i++){ 
  // for (let i = 0; i < keys.value; i++){
  // for (let i = 0; i < object; i++){  
for (let i = 0; i < keys.length; i++){ 
//for loopto read the keys
values.push(object[keys[i]])
   // values.push send in the results back to our empty array and (object[keys[i]]) allow us to extract the actual avlue from our given variable
}
return values.sort((a,b) => a-b)
  // sort the value from least to greatest
}
// our given variables 
const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }

// jest test
    describe('sortObjectValues', () => {
      it("sort the variables" ,() => {
        expect(sortObjectValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
        expect(sortObjectValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
      })
    })