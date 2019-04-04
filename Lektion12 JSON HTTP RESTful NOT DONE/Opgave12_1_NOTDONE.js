


let url ='https://jsonplaceholder.typicode.com/users';

let thetable = document.getElementById('ppltable');

onload = () => {
    alert("In the onload");
    fetch(url).then(response => { //fetch(url) retunerer promise (hvis alt gaar godt)
        //response fra server
        if (response.status >= 400) { //kaldes paa promise naar det er resolved
            throw new Error(response.status);
        }
        else {
            return response.json(); //dette retunerer et nyt promise
        }
    }).then(result => { //kaldes paa det nye promise
        //proeve eventuelt at lave en throw new error her for at se hvad der sker
        for (person of result) {
            console.log("Youre already in the loop");
            console.log(person.name);
            let row = document.createElement("tr");
            let c1 = document.createElement("td");
            let c2 = document.createElement("td");
            let c3 = document.createElement("td");
            c1.innerText = o.id.toString();
            c2.innerText = o.name;
            c3.innerText = o.company.name;
            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            thetable.appendChild(row);
        }
    }).catch(error => console.log("Error: " + error)); //Alle fejl siden fetch til nu ender her :)
}


// onload = () => {
//     //Denne skal fetch URL
//     //Ligger paa telefon
//     let thetable = document.getElementById('ppltable');
//     json.forEach(function (o) {
//         let row = document.createElement("tr");
//         let c1 = document.createElement("td");
//         let c2 = document.createElement("td");
//         let c3 = document.createElement("td");
//         c1.innerText = o.id.toString();
//         c2.innerText = o.name;
//         c3.innerText = o.company.name;
//         row.appendChild(c1);
//         row.appendChild(c2);
//         row.appendChild(c3);
//         thetable.appendChild(row);
//
//     });
// };
