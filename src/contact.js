function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const p = document.createElement('p');
    p.innerText = "Call: +234 80 695 751 75";
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