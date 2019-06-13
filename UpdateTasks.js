var obj = function () {
    this.firstName = document.getElementById("fname").value;
    this.lastName = document.getElementById("lname").value;
    this.accountNumber = document.getElementById("aname").value;
}

function updateAccount() {
    promising("PUT", "http://localhost:8080/AccountSETemplate/api/account/updateAccount/" + document.getElementById("accID").value);
}

function deleteAccount() {
    promising("DELETE", "http://localhost:8080/AccountSETemplate/api/account/deleteAccount/" + document.getElementById("accID").value);
}

function createAccount() {
    promising("POST", "http://localhost:8080/AccountSETemplate/api/account/createAccount");
}

function promising(command, url) {
    var newobj = new obj;
    let req3 = new XMLHttpRequest();
    req3.open(command, url);
    if (command === "DELETE") {
        req3.send();
    } else {
        req3.send(JSON.stringify(newobj));
    }

    var promise3 = new Promise(function (resolve, reject) {
        req3.onload = () => {
            if (req3.status === 200) {
                resolve(req3.response);
            } else {
                reject("Error encountered");
            }
        }
    });

    promise3.then(function () {
        getAccounts();
        document.getElementById("showEvenMoreStuff").innerHTML = "It worked";
    }).catch(function () {
        getAccounts();
        document.getElementById("showEvenMoreStuff").innerHTML = "It didn't work";
    });
}




function getAccounts() {
    let req = new XMLHttpRequest();

    req.onload = function () {
        document.getElementById("showStuff").innerHTML = req.responseText;
        document.getElementById("showLastStuff").innerHTML = "";
        var newobj1 = JSON.parse(req.responseText);

        var node = document.createElement("TABLE");
        for (var i = 0; i < newobj1.length; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["id"];
            var tr = document.createElement('tr');
            var td1 = document.createElement('td')
            td1.innerHTML = newobj1[i]["firstName"];
            var td2 = document.createElement('td');
            td2.innerHTML = newobj1[i]["lastName"];
            var td3 = document.createElement('td');
            td3.innerHTML = newobj1[i]["specialities"];

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            node.append(tr);

        }
        document.getElementById("showLastStuff").appendChild(node);

    }

    req.open("GET", "http://localhost:8080/spring-petclinic-1.5.2/api/vets");
    req.send();



}
