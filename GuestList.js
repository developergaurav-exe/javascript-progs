var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var fName = prompt("Enter Name: ");
if(guestList.includes(fName)){
    alert("Welcome! " + fName);
}else {
    alert("Lol nigga you are not invited.");
}