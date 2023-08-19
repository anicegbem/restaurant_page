function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerText = "Igyo-Dondo";
    header.appendChild(h1);
    header.appendChild(createNav());

    return header

}

function createNav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    for(let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        if(i === 0) {
            btn.innerText = "Home";
            btn.setAttribute('id', 'Home');
        } else if (i === 1) {
            btn.innerText = "Menu";
            btn.setAttribute('id', 'Menu');
        } else if (i === 2) {
            btn.innerText = "Contact";
            btn.setAttribute('id', 'Contact');
        }
        ul.appendChild(btn);

    }
    nav.appendChild(ul);
    return nav;
}

export default createHeader;


function loadPage() {
    const content = document.getElementById("content");
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    let target_list = [li, li, li];
    target_list[0].innerText = "Home";
    target_list[1].innerText = "Menu";
    target_list[2].innerText = "Contact";
    for(let i = 3; i < 3; i++) {
        ul.appendChild(target_list[i]);

    }

}