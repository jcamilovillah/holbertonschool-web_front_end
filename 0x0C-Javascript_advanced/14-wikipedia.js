function createElement(data) {
    let p = document.createElement("p");
    p.innerText = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let r = new XMLHttpRequest();
    r.onload = function() {
        if (r.status >= 200 && r.status < 300) {
            let data = JSON.parse(r.responseText);
            callback(data.query.pages['21721040'].extract);
        } else console.log(xhr.responseText);
    }; 
    r.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=* ');
    r.send();
}

queryWikipedia(createElement);
