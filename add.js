function makeRequest(method, url, body) {

    return new Promise(
        
        (resolve, reject) => {

        const req = new XMLHttpRequest();

        req.onload = () => {

            if (req.status >= 200 && req.status <= 299) {
                resolve(req.responseText);
            }
            else {
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


const addOwner = () => {

    let newOwner = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        telephone: document.getElementById("telephone").value,
        id: document.getElementById("owner_id").value,
    }

    makeRequest("POST", "http://localhost:9966/petclinic/api/owners", JSON.stringify(newOwner))
        .then((resolve) => {
         let data = JSON.parse(resolve);
        const container = document.getElementById('OwnersTable');
            console.log(resolve);

                let myRow = document.createElement('tr');
                //myRow.id ="row" + data.id;
                container.appendChild(myRow);
        
                let myFirstName = document.createElement('td');
                myFirstName.innerHTML= data.firstName;
        
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
                
                myRow.appendChild(myFirstName);
                myRow.appendChild(myLastName);
                myRow.appendChild(myAddress);
                myRow.appendChild(myCity);
                myRow.appendChild(myTelephone);
                myRow.appendChild(myPet);
                

        })
        .catch(function (error) { console.log(error.message) });

    return false;
}
