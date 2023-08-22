function createContact() {
    const contact = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = "+234 80 695 751 75";
    contact.appendChild(p);

    return contact;

}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());

    return main;
}

export default loadContact;