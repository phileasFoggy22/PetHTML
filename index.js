function getVets() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        document.getElementById("showStuff").innerHTML = req.responseText;
        document.getElementById("showLastStuff").innerHTML = "";
        var newobj1 = JSON.parse(req.responseText);

        var node = document.createElement("TABLE");

        var tr = document.createElement('tr');
        var td1 = document.createElement('td')
        td1.innerHTML = ("First Name");
        var td2 = document.createElement('td');
        td2.innerHTML = ("Last Name");
        var td3 = document.createElement('td');
        td3.innerHTML = ("Specialities");
        var td4 = document.createElement('td');
        td3.innerHTML = ("Show Clients");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["firstName"];
            var td2 = document.createElement('td');
            td2.innerHTML = newobj1[i]["lastName"];
            var td3 = document.createElement('td');
            td3.innerHTML = newobj1[i]["specialties"];
            var td4 = document.createElement('td');
            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Owners";
            let id = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    getClients(id);
                }
            })(newobj1[i]["id"]);
            td4.appendChild(btn);


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            node.append(tr);

        }


        document.getElementById("VetTable").appendChild(node);

    }

    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/vets");
    req.send();



}

function getOwners() {
    let req = new XMLHttpRequest();
    document.getElementById("OwnersTable").innerHTML = "";
    req.onload = function () {
        document.getElementById("showStuff").innerHTML = req.responseText;
        document.getElementById("showLastStuff").innerHTML = "";
        var newobj1 = JSON.parse(req.responseText);

        var node = document.createElement("TABLE");

        var tr = document.createElement('tr');
        var td1 = document.createElement('td')
        td1.innerHTML = ("First Name");
        var td2 = document.createElement('td');
        td2.innerHTML = ("Last Name");
        var td3 = document.createElement('td');
        td3.innerHTML = ("Address");
        var td4 = document.createElement('td');
        td4.innerHTML = ("Telephone");
        var td5 = document.createElement('td');


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["firstName"];
            var td2 = document.createElement('td');
            td2.innerHTML = newobj1[i]["lastName"];
            var td3 = document.createElement('td');
            td3.innerHTML = newobj1[i]["Address"];
            var td4 = document.createElement('td');
            td4.innerHTML = newobj1[i]["Telephone"];
            var td5 = document.createElement('td');

            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Pets";
            let id = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    getPets(id);
                }
            })(newobj1[i]["id"]);
            td5.appendChild(btn);


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            node.append(tr);

        }


        document.getElementById("OwnersTable").appendChild(node);

    }

    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/owners");
    req.send();



}

function getClients(id) {
    console.log(id);
    //    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/owners");
    //    req.send();
}

function getPets(id) {
    console.log(id);
    //    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/owners");
    //    req.send();


    let req = new XMLHttpRequest();
    document.getElementById("PetsTable").innerHTML = "";
    req.onload = function () {
        document.getElementById("showStuff").innerHTML = req.responseText;
        document.getElementById("showLastStuff").innerHTML = "";
        var newobj1 = JSON.parse(req.responseText);

        var node = document.createElement("TABLE");

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td5 = document.createElement('td');
        td1.innerHTML = ("Name");
        td5.innerHTML = ("List Visits");



        tr.appendChild(td1);

        tr.appendChild(td5);

        node.append(tr);

        for (var i = 0; i < newobj1.length + 1; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td5 = document.createElement('td');
            td1.innerHTML = "hi"; //newobj1[i]["pets"].length;

            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Pets";
            let petid = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    getVisits(petid);
                }
            })(newobj1[i]["id"]);
            td5.appendChild(btn);


            tr.appendChild(td1);
            tr.appendChild(td5);

            node.append(tr);

        }


        document.getElementById("PetsTable").appendChild(node);

    }

    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/owners/" + String(id));
    req.send();


}

function getVisits(id) {
    console.log(id);
}




function makeRequest(method, url) {
    return new Promise((res, rej) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status == 200) {
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

function getAllOwners() {
    let req = new XMLHttpRequest();
    req.onload = function () {
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/owners");
    req.send();
}

function getAllVisits() {
    let req = new XMLHttpRequest();
    req.onload = function () {
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/visits");
    req.send();
}

function getAllPets() {
    let req = new XMLHttpRequest();
    req.onload = function () {
        console.log(req.responseText);

    };
    req.open("GET", "http://localhost:9966/petclinic/api/pets");
    req.send();
}



function removeOwner() {
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/owners/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {
        console.log(reason);
    });
}

function removeVisit() {
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/visits/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {
        console.log(reason);
    });
}

function removePet() {
    let x = document.getElementById("idinput").value;
    makeRequest("DELETE", "http://localhost:9966/petclinic/api/pets/" + x).then(req => {
        let something = document.createElement("p");
        something.innerText = req.responseText;
        document.getElementById("display").appendChild(something);
    }).catch(reason => {
        console.log(reason);
    });
}
