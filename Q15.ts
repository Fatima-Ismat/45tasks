// 15. Changing Guest list:nyou jst heared that one of your guests can't make the dinner, so you need to send out a new set of invitation. you'll have to think of someone else to invite.

// • Start with your program from exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
// • Modify your list, replacng the name of the guest who can't make it with the name of the new person you are inviting.
// • Print a second set of invitation message, one for each person who is still in your list.

let guestArr: string[] = ["Aliza", "Noor", "Ismat", "Fatima", "Furqan"];

let canNotAttend: string = "Ismat"
console.log(canNotAttend + ' ' + "can not make it, for Dinner");

let newGuest: string = "Ali"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
//console.log(guestArr)
guestArr.map((item) => 
     console.log(`Dear ${item}, \nYou are cordially invited to dinner at my place. Please join us for a delightful evening!\nBest regards,\n[Your Name]`)
);


