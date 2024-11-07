console.log("promise");
//( a.k.a. homework.ts)

const output = document.querySelector('#output') as HTMLParagraphElement;


// Lege dort drei Promises vom Typ string an

//Das erste Promise gibt nach 20 Sekunden “Exercise 1 done.” zurück
const exercise1:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const done:boolean = true;
        if(done) {
            //console.log("Exercise 1 done");
            resolve('Exercise 1 done.')
        }else {
            reject("Exercise not finished")
        }
    }, 20000)
});

//Promise gibt nach 30 Sekunden “Exercise 2 done.” zurück
const exercise2: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const done:boolean = true; 
        if(done) {
             //console.log("Exercise 2 done");
            resolve('Exercise 2 done.')
        } else {
            reject('Exercise not finished')
        }
    }, 30000)
});

//Promise gibt nach 40 Sekunden “Exercise 3 done.” zurück
const exercise3: Promise<string> = new Promise((resolve, reject) => {
     setTimeout(() => {
        const done:boolean = true;
        if ( done) {
            //console.log("Exercise 3 done");
            resolve ('Exercise 3 done.')
        } else {
            reject('Exercise not finished')
        }
    }, 40000)
});
// (Lege in der html file eine Überschrift “Doing my homework” an)
//Darunter soll ein Paragraph angeordnet sein - dort steht am Anfang “Starting…”
//Wenn das erste Promise resolved wird, wird der entsprechende Text “Exercise 1 done.” im Paragraph angezeigt
//Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

exercise1.then((resp) => {
    output.innerHTML += `<br>Starting... ${resp}`
}).then(() => {
    exercise2.then((resp) => {
        output.innerHTML += `<br>Starting... ${resp}`
    }).then(() => {
        exercise3.then((resp) => {
        output.innerHTML += `<br>Starting... ${resp}`
    }).catch((error) => {
        console.error ('Exercise not finished', error)
    })
})
})