//? Question 1:
//todo Write a line of code that declares an array called fruits with the elements "apple", "bananna", and "cherry". Then, log the second element of the array to the console.

let fruits = ["apple", "bananna", "cherry"];
console.log(fruits[1])

//? Question 2:
//todo Write a line of code that declares an array called numbers with the elements 1, 2, 3, 4, and 5. Then, create a variable sum that is the sum of the first and third elements of the array, and log sum to the console.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers[0] + numbers[2];
console.log(sum);

//? Question 3:
//todo Write a line of code that declares an array called languages with the elements "JavaScript", "Python", and "Java". Then, change the second element of the array to "Ruby" and log the entire array to the console.

let languages = ["Javascript", "Python", "Java"];
languages[1] = "Ruby";
console.log(languages);
 
//? Question 4:
//todo Write a line of code that declares a variable age and assigns it the value 20. Then, use an if-else statement to check if age is greater than or equal to 18, and log "Eligible to vote" if true, and "Not eligible to vote" otherwise.
 
let age = 20;
if (age >=  18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
};

//? Question 5:
//todo Write a line of code that declares an array called cities with the elements "New York", "Los Angeles", and "Chicago". Then, create a variable lastCity that holds the last element of the array, and log lastCity to the console.

let cities = ["New York", "Los Angeles", "Chicago"];
let lastCity = cities[2];
console.log(lastCity); 
 
//? Question 6:
//todo Write a line of code that declares a variable x and assigns it the value 7. Then, use an if-else statement to check if x is greater than 5 or less than 10, and log "In range" if true, and "Out of range" otherwise.
let x = 7;
if (x > 5 || x < 10) {
    console.log("In Range")
}
else {
    console.log("Out of range");
};