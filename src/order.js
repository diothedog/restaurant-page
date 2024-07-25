import './style.css';

export default function createOrder() {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Order";
    content.appendChild(heading);

    const orderForm = document.createElement("form");
    content.appendChild(orderForm);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.id = "name";
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Your Name: ";
    orderForm.appendChild(nameLabel);
    orderForm.appendChild(nameInput);

    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.name = "phone";
    phoneInput.id = "phone";
    const phoneLabel = document.createElement("label");
    phoneLabel.htmlfor = "phone";
    phoneLabel.textContent = "Phone Number: ";
    orderForm.appendChild(phoneLabel);
    orderForm.appendChild(phoneInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    const emailLabel = document.createElement("label");
    emailLabel.htmlfor = "email";
    emailLabel.textContent = "E-mail: ";
    orderForm.appendChild(emailLabel);
    orderForm.appendChild(emailInput);

    const orderInput = document.createElement("textarea");
    orderInput.name = "order";
    orderInput.id = "order"
    orderInput.rows = "10";
    orderInput.cols = "40";
    const orderLabel = document.createElement("label");
    orderLabel.htmlfor = "order";
    orderLabel.textContent = "Your order: ";
    orderForm.appendChild(orderLabel);
    orderForm.appendChild(orderInput);

    const paymentField = document.createElement("fieldset");
    const paymentLegend = document.createElement("legend");
    paymentLegend.textContent = "How will you be paying?";
    orderForm.appendChild(paymentField);
    paymentField.appendChild(paymentLegend);

    const cashRadio = document.createElement("input");
    cashRadio.type = "radio";
    cashRadio.name = "payment";
    cashRadio.value = "cash";
    cashRadio.id = "cash";
    const cashLabel = document.createElement("label");
    cashLabel.htmlfor = "cash";
    cashLabel.textContent = "Cash";
    paymentField.appendChild(cashLabel);
    paymentField.appendChild(cashRadio);

    const creditRadio = document.createElement("input");
    creditRadio.type = "radio";
    creditRadio.name = "payment";
    creditRadio.value = "credit";
    creditRadio.id = "credit";
    const creditLabel = document.createElement("label");
    creditLabel.htmlfor = "credit";
    creditLabel.textContent = "Credit Card";
    paymentField.appendChild(creditLabel);
    paymentField.appendChild(creditRadio);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "submit";
    submitBtn.textContent = "Submit Order";
    orderForm.appendChild(submitBtn);
    
}