//Exercise JS receipe Manipulaton part 1

//1. What is the name of the recipe?

const findRecipeName = document.querySelector("#recipe-name");
console.log("1. The recipe name is :",findRecipeName.innerHTML);

//2. What HTML tag is used to display the Recipe name?
const findRecipeNameTag = document.querySelector("#recipe-name").tagName;
console.log("2. The tag is: ",findRecipeNameTag);  //h1

//3. What is the font size of the paragraph tag with the class "description".
const fontSize = document.querySelector(".description");
const pFontSize = window.getComputedStyle(fontSize);
console.log("3. The fontsize of the paragraph tag with the class 'description' is: ",pFontSize.fontSize);

//4. What is the value of the alt attribute on the image?
const attribute = document.querySelector("img");
console.log("4. The value of the 'alt' attribute is: ",attribute.getAttribute("alt"));

//5. What is the dimensions and the url of the image? 
const picky = {url: attribute.getAttribute("src"), height: attribute.height, width: attribute.width,}
console.log("5. The image object: ",picky);

//6. How many ingredients has the paste?
const paste = document.querySelector(".ingredients-list-paste").children;
console.log("6. The number of ingredients for the paste is: ", paste.length);

//7. Which is the forth element in the list containing the ingredients for the paste?
console.log("7. The 4th ingredient in the list is: ", paste[3].textContent);

//8. Create an an array of objects from the instructions.
// Each element in the array should be an object that looks like this:
const instList = document.querySelector(".instructions-list").children;
console.log("8. Instructions");
for (let index = 0; index < instList.length; index++)
     {
     let instruction = {order: (index+1), text: instList[index].innerText};
     console.log(instruction);
     }

