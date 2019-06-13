function makeRequest(method, url){
    return new Promise((res, rej) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if(req.status == 200){
                res(req);
            } else {
                const reason = new Error("It Failed!");
                rej(reason);
            }
        };
        req.open(method, url);
        req.send();

    });

    
}

function getOwners(){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/owners");
    req.send();
}

function getVisits(){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/visits");
    req.send();
}

function getPets(){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/pets");
    req.send();
}



function removeOwner(){
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/owners/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {console.log(reason);});
}

function removeVisit(){
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/visits/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {console.log(reason);});
}

function removePet(){
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/pets/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {console.log(reason);});
}