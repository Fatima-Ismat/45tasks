"use strict";
// 17. Shirinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Excercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your lists, print a message to that person lettingthem know you,re sorry you can't invite them to dinner.
// • Print a message to each of the two people still on your list, letting them knew they're still invited.
// • Remove the last two names from your list, so you have an empty list. print your list to make sure you actually have an empty list at the end of your program. 
let guestArr = ["Aliza", "Noor", "Ismat", "Fatima"];
console.log("I can invite only two people to the dinner");
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Dear ${removeGuest}, you are not invited to the dinner`);
}
guestArr.map((item) => console.log(`Dear ${item}, You are still invited to the dinner`));
guestArr.pop();
guestArr.pop();
console.log("Guest list is now empty:", guestArr);
