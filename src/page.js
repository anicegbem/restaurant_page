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