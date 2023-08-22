function createMenu() {
    const menu = document.createElement('div');
    for(let i = 0; i < 4; i++) {
        const card = document.createElement('div');
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        if(i === 0) {
            p.innerText = "yam, red oil, pork, tatashe";
            h3.innerText = "Luam";
            card.appendChild(h3);
            card.appendChild(p);

        } else if (i === 1) {
            p.innerText = "yam, red oil, pork, tatashe";
            h3.innerText = "Kwese sha kamu";
            card.appendChild(h3);
            card.appendChild(p);

        } else if (i === 2) {
            p.innerText = "yam, red oil, pork, tatashe";
            h3.innerText = "Ikyegh sha shwa";
            card.appendChild(h3);
            card.appendChild(p);
        } else if (i === 3) {
            p.innerText = "yam, red oil, pork, tatashe";
            h3.innerText = "Ahom a igyoo";
            card.appendChild(h3);
            card.appendChild(p);
        }
        menu.appendChild(card);
        
    }

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());

    return main;


}

export default loadMenu;