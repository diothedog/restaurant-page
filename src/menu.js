import './style.css';

export default function createMenu() {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    content.appendChild(heading);

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    content.appendChild(menuDiv);

    const appetizers = document.createElement("div");
    menuDiv.appendChild(appetizers);
    const appetizersHeading = document.createElement("h2");
    appetizersHeading.textContent = "APPETIZERS";
    appetizers.appendChild(appetizersHeading);

    const appList = document.createElement("ul");
    appetizers.appendChild(appList);
    const appOne = document.createElement("li");
    appOne.textContent = "Mozarella Cheese Sticks ------------------------------------------------------------------------------ $9.99";
    appList.appendChild(appOne);
    const appTwo = document.createElement("li");
    appTwo.textContent = "Fried Pickles ------------------------------------------------------------------------------------------- $7.99";
    appList.appendChild(appTwo);
    const appThree = document.createElement("li");
    appThree.textContent = "Onion Rings ------------------------------------------------------------------------------------------- $10.99";
    appList.appendChild(appThree);
    const appFour = document.createElement("li");
    appFour.textContent = "Side Salad --------------------------------------------------------------------------------------------- $5.99";
    appList.appendChild(appFour);

    const entrees = document.createElement("div");
    menuDiv.appendChild(entrees);
    const entreesHeading = document.createElement("h2");
    entreesHeading.textContent = "ENTREES";
    entrees.appendChild(entreesHeading);

    const entreeList = document.createElement("ul");
    entrees.appendChild(entreeList);
    const entreeOne = document.createElement("li");
    entreeOne.textContent = "Cheeseburger ------------------------------------------------------------------------------------------- $8.99";
    entreeList.appendChild(entreeOne);
    const entreeTwo = document.createElement("li");
    entreeTwo.textContent = "Spaghetti and Meatballs ------------------------------------------------------------------------------- $9.99";
    entreeList.appendChild(entreeTwo);
    const entreeThree = document.createElement("li");
    entreeThree.textContent = "BLT ----------------------------------------------------------------------------------------------------- $7.99";
    entreeList.appendChild(entreeThree);
    const entreeFour = document.createElement("li");
    entreeFour.textContent = "Ribeye Steak --------------------------------------------------------------------------------------------- $14.99";
    entreeList.appendChild(entreeFour);
    const entreeFive = document.createElement("li");
    entreeFive.textContent = "Chicken Strips -------------------------------------------------------------------------------------------- $9.99";
    entreeList.appendChild(entreeFive);

    const beverages = document.createElement("div");
    menuDiv.appendChild(beverages);
    const beveragesHeading = document.createElement("h2");
    beveragesHeading.textContent = "BEVERAGES";
    beverages.appendChild(beveragesHeading);

    const beveragesList = document.createElement("ul");
    beverages.appendChild(beveragesList);
    const beverageOne = document.createElement("li");
    beverageOne.textContent = "Iced Tea ------------------------------------------------------------------------------------------------- $1.99";
    beveragesList.appendChild(beverageOne);
    const beverageTwo = document.createElement("li");
    beverageTwo.textContent = "Soft Drink ----------------------------------------------------------------------------------------------- $1.99";
    beveragesList.appendChild(beverageTwo);
    const beverageThree = document.createElement("li");
    beverageThree.textContent = "Beer ---------------------------------------------------------------------------------------------------- $4.99";
    beveragesList.appendChild(beverageThree);
    const beverageFour = document.createElement("li");
    beverageFour.textContent = "Wine ----------------------------------------------------------------------------------------------------- $5.99";
    beveragesList.appendChild(beverageFour);

    const desserts = document.createElement("div");
    menuDiv.appendChild(desserts);
    const dessertsHeading = document.createElement("h2");
    dessertsHeading.textContent = "DESSERTS";
    desserts.appendChild(dessertsHeading);

    const dessertList = document.createElement("ul");
    desserts.appendChild(dessertList);
    const dessertOne = document.createElement("li");
    dessertOne.textContent = "Chocolate Cake ----------------------------------------------------------------------------------------- $4.99";
    dessertList.appendChild(dessertOne);
    const dessertTwo = document.createElement("li");
    dessertTwo.textContent = "Apple Pie ------------------------------------------------------------------------------------------------ $5.99";
    dessertList.appendChild(dessertTwo);
    const dessertThree = document.createElement("li");
    dessertThree.textContent = "Ice Cream ----------------------------------------------------------------------------------------------- $3.99";
    dessertList.appendChild(dessertThree);


}