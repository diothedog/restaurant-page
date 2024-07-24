import './style.css';
import Restaurant from './restaurant.jpg';

export default function createHome() {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Restaurant Homepage";
    content.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = "Welcome to our restaurant homepage! Check out our menu and contact us to place an order!";
    content.appendChild(description);

    const myImage = new Image();
    myImage.src = Restaurant;
    myImage.alt = "interior of restaurant";
    content.appendChild(myImage);

    const imageCredit = document.createElement("p");
    imageCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@itscassy_wassy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cassidy Mills</a> on <a href="https://unsplash.com/photos/table-arrangement-inside-room-LPTUjv9l8BE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    content.appendChild(imageCredit);

    return content;
};