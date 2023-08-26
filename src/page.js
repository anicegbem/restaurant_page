import loadMenu from './menu.js';
import loadHome from './home.js';
import loadContact from './contact.js';
import Head from './images/head.png';
import './style.css';

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerText = "Igyo-Dondo";
    header.appendChild(h1);
    header.appendChild(createNav());

    return header;

}

function createNav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    // const main = createMain();

    const homeBtn = document.createElement('button');
    homeBtn.innerText = "Home";
    homeBtn.addEventListener('click', function() {
        loadHome();  
    });

    const menuBtn = document.createElement('button');
    menuBtn.innerText = "Menu";
    menuBtn.addEventListener('click', function() {
        loadMenu();

    });

    const contactBtn = document.createElement('button');
    contactBtn.innerText = "Contact";
    contactBtn.addEventListener('click', function() {
        loadContact();

    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    
    // for(let i = 0; i < 3; i++) {
    //     const btn = document.createElement('button');
    //     btn.setAttribute('type', 'button');
    //     const li = document.createElement('li');
    //     if(i === 0) {
    //         btn.innerText = "Home";
    //         btn.setAttribute('id', 'Home');
    //         li.appendChild(btn);
    //         btn.addEventListener('click', function() {
    //             main.setAttribute('class', 'new')
    //         })
    //     } else if (i === 1) {
    //         btn.innerText = "Menu";
    //         btn.setAttribute('id', 'Menu');
    //         li.appendChild(btn);
    //     } else if (i === 2) {
    //         btn.innerText = "Contact";
    //         btn.setAttribute('id', 'Contact');
    //         li.appendChild(btn);
    //     }
    //     ul.appendChild(li);

    // }
    // nav.appendChild(ul);
    return nav;
}

function createMain() {
    const myHead = new Image();
    myHead.src = Head;
    myHead.setAttribute('id', 'head');
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    const h3 = document.createElement('h3');
    h3.innerText = "Best Dressed Pork in Town"
    const p = document.createElement('p');
    p.innerText = "Va ya nen igyo i Dondo!"
    main.appendChild(h3);
    main.appendChild(p);
    main.appendChild(myHead);
    // insert an image here

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.innerText = `Copyright 2023 Sedondo`;
    footer.appendChild(p);

    return footer;
    

}

function loadPage() {
    const content = document.getElementById("content");
    const body = document.body
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    body.appendChild(content);

    loadHome();
    
    return body;
}

export default loadPage;


