function createMain() {
    const main = document.getElementById('main');
    const h3 = document.createElement('h3');
    h3.innerText = "Best Dressed Pork in Town"
    const p = document.createElement('p');
    p.innerText = "Va ya nen igyo i Dondo!"
    main.appendChild(h3);
    main.appendChild(p);
    // insert an image here

    return main;
}



function loadHome() {
    const div = document.createElement('div');
    div.appendChild(createMain());

    return div;

}