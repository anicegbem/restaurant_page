function createHome() {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = "Best Dressed Pork in Town"
    const p = document.createElement('p');
    p.innerText = "Va ya nen igyo i Dondo!";

    div.appendChild(h3);
    div.appendChild(p);

    return div;

    
    // insert an image here

    
}



function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());

    return main;

}

export default loadHome;