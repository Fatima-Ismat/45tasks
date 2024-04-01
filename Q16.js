"use strict";
// 16. More Guests: You just found a bigger dinner table, so now space is available. Think of three more guests to invite to dinner.
// • Start with your program from Excercise 15. Add a print statement to the end of your bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Zohair", "Ismat", "Aliza", "Furqan"];
let canNotAttend = "Ismat";
let newGuest = "Fatima";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
// guestArr.map((item) => (
//      console.log(`Dear ${item}, I found a biggar dinner table `)
// ));
let guestBegin = "Noor";
guestArr.unshift(guestBegin);
//console.log(guestArr)
let middleGuest = "Ali";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
guestArr.push("Nosheen");
//console.log(guestArr)
guestArr.map((item) => (console.log(`Dear ${item}, You re cordinaly invited to a dinner `)));
