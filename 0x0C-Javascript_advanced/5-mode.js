function changeMode(size, weight, transform, background, color) {
    return function() {
        let b = document.body;
        b.style.fontSize = `${size}px`;
        b.style.weight = weight;
        b.style.transform = transform;
        b.style.background = background;
        b.style.color = color;
    }
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkmode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
    let p = document.createElement("p");
    p.setAttribute("id", "p");
    p.innerText = "Welcome Holberton!";
    let b1 = document.createElement("button");
    b1.setAttribute("id", "b1");
    b1.innerText = "Spooky";
    let b2 = document.createElement("button");
    b2.setAttribute("id", "b2");
    b2.innerText = "Dark mode";
    let b3 = document.createElement("button");
    b3.setAttribute("id", "b3");
    b3.innerText = "Scream mode";

    document.body.appendChild(p);
    document.body.appendChild(b1);
    document.body.appendChild(b2);
    document.body.appendChild(b3);

    document.getElementById("b1").onclick = spooky;
    document.getElementById("b2").onclick = darkmode;
    document.getElementById("b3").onclick = screamMode;
}
main();
