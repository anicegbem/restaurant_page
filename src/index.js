import header from "./page.js";

function initializeWebsite() {
    const content = document.getElementById("content");
    const body = document.body
    content.appendChild(header());
    body.appendChild(content);
    
    return body;
}

initializeWebsite();