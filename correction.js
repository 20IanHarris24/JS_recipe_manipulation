//Exercise JS receipe Manipulaton part 2

//1. The logo text of the site has the wrong color. Change it to the correct one.

const logoText = document.querySelector(".logo-text");
const whatColour = window.getComputedStyle(logoText);
console.log("1. Current colour: ", whatColour.color);
//updating the colour
logoText.style.color = "#384241";
const colourUpdate = window.getComputedStyle(logoText);
console.log("1. Updated colour: ",colourUpdate.color);


//2. The alignment of the elements inside the header element are wrong. 
//Change it to the correct one. Hint, check the flex properties for the correct alignment. 
//Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// after checking alignment Justify content needs to be updated from center to normal

const alignHeader = document.querySelector("Header");
const whatHeader = window.getComputedStyle(alignHeader);
console.log("2. Justify Content current : ", whatHeader.justifyContent);
alignHeader.setAttribute("id", "justify-content");
document.getElementById("justify-content").style.justifyContent = "normal";
const alignUpdate = window.getComputedStyle(alignHeader);
console.log("2. Justify Content updated : ", alignUpdate.justifyContent);


//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
const headerBorder = document.querySelector("Header");
const headerBottomBorder = window.getComputedStyle(headerBorder);
console.log("3. Current colour of the Header bottom border is : ", headerBottomBorder.borderBottomColor);
headerBorder.setAttribute("id", "header-bottom-content");
document.getElementById("header-bottom-content").style.color = "lightgray";
const headerBorderUpdate = window.getComputedStyle(headerBorder);
console.log("3. Updated colour of the Header bottom border is :", headerBorderUpdate.color);

//4. The recipe name is wrong, change it to the correct one.
const recipe = document.getElementById("recipe-name");
console.log("4. Current recipe title text : ",recipe.innerText);
recipe.innerText = "Frozen Cheesecake";
console.log("4. Updated recipe title text : ",recipe.innerText);


//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//This can be fixed by adding a class to that element.
const timer = document.querySelector(".time-container");
const textTimer = timer.children;
console.log("5. Current timer : ",textTimer[0].innerText);
textTimer[0].setAttribute("class", "material-icons");
console.log("5. Updated timer : ",textTimer[0]);



//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
console.log("6. Current cooking time : ",textTimer[1].innerText);
textTimer[1].innerText = "60+ min";
console.log("6. Updated cooking time : ",textTimer[1].innerText);

//7.The src path to the image is wrong, or atleast it's showing the wrong image. 
//Change it to the correct one. The available images can be found in the assets folder.

const cheeseCake = document.querySelector("img");
console.log("7. Current image : ",cheeseCake.getAttribute("src"));
cheeseCake.setAttribute("src","assets/frozen-cheesecake-slice.jpg");
console.log("7. Updated image : ",cheeseCake.getAttribute("src"));

//8. The background color of the ingredients list container is wrong. Fix it.
const ingredients = document.querySelector(".ingredients-container");
const ingredientsBkgrnd = window.getComputedStyle(ingredients);
console.log("8. Current backgound colour for ingredients : ",ingredientsBkgrnd.backgroundColor);
ingredients.style.backgroundColor = "#f9f9f9";
const IngredientsBackgroundUpdate = window.getComputedStyle(ingredients);
console.log("8. Updated backgound colour for ingredients :", ingredientsBkgrnd.backgroundColor);

//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//In the list of the ingredients to the bottom, there is a text instead of two list items. 
//Remove the text and add those two list items.

const biscuits = '<li>15st digistivekex</li>';
const butter = '<li>Lite smör</li>';
const li = document.querySelector(".ingredients-list-bottom");
const liChild = li.children;
console.log("9. Current list item : " ,liChild[0].innerText);
li.insertAdjacentHTML("afterbegin", biscuits);
li.insertAdjacentHTML("beforeend", butter);
const list = li.children;
console.log("9. Add 2 additional list items : ",list);
li.removeChild(list[1]);
console.log("9. Remaining list items : ",list[0].innerHTML);
console.log("9. Remaining list items : ",list[1].innerHTML);

//10. The third ingredient in the list of ingredients to the paste is wrong. 
//Change that specific ingredient to the correct one.


const vanilla = document.createElement("li");
vanilla.innerText = "3tsk vaniljsocker";
const toPaste = document.querySelector(".ingredients-list-paste");
const toPasteCh = toPaste.children;
console.log("10. Incorrect ingredient in paste is : ", toPasteCh[2].innerHTML);
const lakrits = toPasteCh[2]
toPaste.replaceChild(vanilla,lakrits);
console.log("10. Correct ingredient in paste is : ", toPasteCh[2].innerHTML);


//11. There is also a missing ingredient in the list of ingredients to the paste. 
//Look and see what it is and add that one the the end of the list.

const philliCheese = document.createElement("li");
philliCheese.innerText = "400g naturell philadelphiaost";
const toPasteList = document.querySelector(".ingredients-list-paste");
toPasteList.appendChild(philliCheese);
console.log("11. Added the last paste ingredient : ", philliCheese.innerText);

//12.The text "Instructions" to the left, beneath the image, has some shadow styling applied to it.
// Remove that styling.

const instructions = document.querySelector(".instructions-container");
const instructionsCh = instructions.children;
console.log("12. Classname for instruction box shadow is : ",instructionsCh[0].className);
instructionsCh[0].setAttribute("class", "instructions");
console.log("12. Updated classname for removing instruction box shadow is : ",instructionsCh[0].className);


//13. Two list elements of the list of instructions are incorrect. 
//Find them and change them to the correct ones.

const newTwo = document.createElement("li");
newTwo.innerText = "Separera ägg gulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke";
const newNine = document.createElement("li");
newNine.innerText = "Ställ in i frysen över natten."
const toDo = document.querySelector(".instructions-list");
const toDoList = toDo.children;
//console.log(toDoList);
console.log("13. Incorrect instructions in row 2 : ", toDoList[1].innerHTML);
console.log("13. Incorrect instructions in row 9 : ", toDoList[8].innerHTML);
const oldTwo = toDoList[1];
const oldNine = toDoList[8];

toDo.replaceChild(newTwo,oldTwo);
toDo.replaceChild(newNine,oldNine);

console.log("13. Correct instructions in row 2 : ", toDoList[1].innerHTML);
console.log("13. Correct instructions in row 9 : ", toDoList[8].innerHTML);
