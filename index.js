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
        td5.innerHTML = ("Pets");
        var td6 = document.createElement('td');
        td6.innerHTML = ("Remove");


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {
            let id = newobj1[i]["id"];

            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["firstName"];
            var td2 = document.createElement('td');
            td2.innerHTML = newobj1[i]["lastName"];
            var td3 = document.createElement('td');
            td3.innerHTML = newobj1[i]["address"];
            var td4 = document.createElement('td');
            td4.innerHTML = newobj1[i]["telephone"];

            //list pets
            var td5 = document.createElement('td');
            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Pets";

            btn.onclick = (function () {
                return function () {
                    getPets(id);
                }
            })(newobj1[i]["id"]);
            td5.appendChild(btn);

            //delete owner
            var td6 = document.createElement('td');
            var btnRemove = document.createElement('input');
            btnRemove.className = "btn";
            btnRemove.type = "button";
            btnRemove.value = "Remove";
            btnRemove.onclick = (function () {
                return function () {
                    removeOwner(id);
                }
            })(newobj1[i]["id"]);
            td6.appendChild(btnRemove);


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

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
        var newobj2 = JSON.parse(req.responseText);

        var newobj1 = newobj2["pets"];

        var node = document.createElement("TABLE");

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = ("Name");
        var td2 = document.createElement('td');
        td2.innerHTML = ("Birthdate");
        var td3 = document.createElement('td');
        td3.innerHTML = ("Type");
        var td4 = document.createElement('td');
        td4.innerHTML = ("List Visits");



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {
            console.log("here", newobj1[i]["type"]["name"]);
            let field = "";
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            field = newobj1[i]["name"];
            td1.innerHTML = field;
            var td2 = document.createElement('td');
            field = newobj1[i]["birthdate"];
            td2.innerHTML = field;
            //            td2.innerHTML = newobj1[i]["birthdate"];
            var td3 = document.createElement('td');
            field = newobj1[i]["type"]["name"];
            td3.innerHTML = field;
            //            td3.innerHTML = newobj1[i]["type"];
            var td5 = document.createElement('td');

            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Visits";
            let petid = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    getVisits(petid);
                }
            })(newobj1["id"]);
            td5.appendChild(btn);


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
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


    let req = new XMLHttpRequest();
    document.getElementById("PetsTable").innerHTML = "";
    req.onload = function () {
        document.getElementById("showStuff").innerHTML = req.responseText;
        document.getElementById("showLastStuff").innerHTML = "";
        var newobj2 = JSON.parse(req.responseText);

        var newobj1 = newobj2["pets"];

        var node = document.createElement("TABLE");

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = ("Name");
        var td2 = document.createElement('td');
        td2.innerHTML = ("Birthdate");
        var td3 = document.createElement('td');
        td3.innerHTML = ("Type");
        var td4 = document.createElement('td');
        td4.innerHTML = ("List Visits");



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        node.append(tr);

        for (var i = 0; i < newobj1.length; i++) {
            console.log("here", newobj1[i]["type"]["name"]);
            let field = "";
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            field = newobj1[i]["name"];
            td1.innerHTML = field;
            var td2 = document.createElement('td');
            field = newobj1[i]["birthdate"];
            td2.innerHTML = field;
            //            td2.innerHTML = newobj1[i]["birthdate"];
            var td3 = document.createElement('td');
            field = newobj1[i]["type"]["name"];
            td3.innerHTML = field;
            //            td3.innerHTML = newobj1[i]["type"];
            var td5 = document.createElement('td');

            var btn = document.createElement('input');
            btn.className = "btn";
            btn.type = "button";
            btn.value = "List Visits";
            let petid = newobj1[i]["id"];
            btn.onclick = (function () {
                return function () {
                    getVisits(petid);
                }
            })(newobj1["id"]);
            td5.appendChild(btn);


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td5);

            node.append(tr);

        }


        document.getElementById("PetsTable").appendChild(node);

    }

    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/owners/" + String(id));
    req.send();

}





function makeRequest(method, url, body) {

    return new Promise(

        (resolve, reject) => {

            const req = new XMLHttpRequest();

            req.onload = () => {

                if (req.status >= 200 && req.status <= 299) {
                    resolve(req.responseText);
                } else {
                    console.log(req.responseText)
                    const reason = new Error("Rejected");
                    reject(reason);
                }
            }
            req.open(method, url);
            req.setRequestHeader('Content-Type', 'application/json');
            req.send(body);
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



function removeOwner(x) {
    makeRequest("DELETE", `http://localhost:8080/spring-petclinic-1.5.2/api/owners/${x}`).then(req => {
        console.log("hi")
        //        let something = document.createElement("p");
        //        something.innerText = req.responseText;
        //        document.getElementById("display").appendChild(something);
    }).catch(reason => {
        console.log(reason);
    });
    getOwners();
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

const addOwner = () => {

    let newOwner = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        telephone: document.getElementById("telephone").value,
        id: document.getElementById("owner_id").value,
    }

    makeRequest("POST", "http://localhost:8080/spring-petclinic-1.5.2/api/owners", JSON.stringify(newOwner))
        .then((resolve) => {
            let data = JSON.parse(resolve);
            const container = document.getElementById('OwnersTable');
            console.log(resolve);

            let myRow = document.createElement('tr');
            //myRow.id ="row" + data.id;
            container.appendChild(myRow);

            let myFirstName = document.createElement('td');
            myFirstName.innerHTML = data.firstName;

            let myLastName = document.createElement('td');
            myLastName.innerHTML = data.lastName;

            let myAddress = document.createElement('td');
            myAddress.innerHTML = data.address;

            let myCity = document.createElement('td');
            myCity.innerHTML = data.city;

            let myTelephone = document.createElement('td');
            myTelephone.innerHTML = data.telephone;

            let myPet = document.createElement('td');
            myPet.innerHTML = data.pets;




        })
        .catch(function (error) {
            console.log(error.message)
        });
    getOwners();
    return false;
}
