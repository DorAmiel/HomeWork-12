//Ex1
const runEx1 = async() => {
    let minNum = Number(document.getElementById("min-number-ex-1").value)
    let maxNum = Number(document.getElementById("max-number-ex-1").value)
    let myPromise = await generate7BoomAfterDelayAsync(minNum, maxNum)
    setTimeout(() => {
        myPromise
            .then(() => {
                alert("7 BOOM!💥")
            })
            .catch(() => {
                alert("Missed The Boom!")
            })
    }, 1000);

}

const generate7BoomAfterDelayAsync = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        if (randomNumber % 10 === 7 || randomNumber % 7 === 0) {
            resolve()
        } else {
            reject()
        }
        console.log(randomNumber)
    })
    return myPromise
}

//Ex1


//EX2
const runEx2 = async() => {
    let minNum = Number(document.getElementById("min-number-ex-2").value)
    let maxNum = Number(document.getElementById("max-number-ex-2").value)
    let promise = await generate7BoomAfterDelayAsync(minNum, maxNum)
    promise.then(() => {
            alert("You Got a Prime Number !!")
        })
        .catch(() => {
            alert("Not So Special Number...")
        })
}

const generatePrimeNumberAfterDelayAsync = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        for (let i = 2; i < randomNumber; i++)
            if (randomNumber % i === 0) {
                resolve()
            } else {
                reject()
            }
    })
    console.log(randomNumber)
    return myPromise
}


//Ex2

//Ex3

let animalsList = [`Kitty`, `Puppy`, `Bunny`, `Parrot`, `Scorpion`, `Spider`, `Cockroach`]
const runEx3 = async() => {
    await generateCuteAnimalAfterDelayAsync()
        .then((cuteAnimal) => {
            alert(`Here is your Cute ${cuteAnimal}`)
        }).catch((badAnimal) => {
            alert(`Becareful it's a ${badAnimal}`)
        })
}

const generateCuteAnimalAfterDelayAsync = () => {
    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomAnimalsIndex = Math.floor(Math.random() * animalsList.length)
            const randomAnimal = animalsList[randomAnimalsIndex]
            switch (randomAnimal) {
                case `kitty`:
                    resolve(randomAnimal)
                    break;
                case `Puppy`:
                    resolve(randomAnimal)
                    break;
                case `Bunny`:
                    resolve(randomAnimal)
                    break;
                case `Parrot`:
                    resolve(randomAnimal)
                    break;
                case `Scorpion`:
                    reject(randomAnimal)
                    break;
                case `Spider`:
                    reject(randomAnimal)
                    break;
                case `Cockroach`:
                    reject(randomAnimal)
                    break;
            }
        }, 1000);
    })
}


//Ex3

//Ex4

let weekDays = ['Sunday', `Monday`, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const runEx4 = async() => {
    console.log("Start")
    await generateWorkingDayAfterDelayAsync()
        .then((day) => {
            alert(`Go to work it is ${day} today`)
        }).catch((day) => {
            alert(`Take a rest it is ${day} today`)
        })
    console.log("End")

}
const generateWorkingDayAfterDelayAsync = () => {
    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomDaysIndex = Math.floor(Math.random() * weekDays.length)
            const randomDays = weekDays[randomDaysIndex]
            console.log(randomDays)
            if (randomDays === 'Friday' || randomDays === 'Saturday') {
                reject(randomDays)
            } else {
                resolve(randomDays)
            }
        }, 1000);
    })
}

//Ex4

//EX5

const runEx5 = async() => {
    await getArrayFromServerAsync(10)
        .then((array) => {
            alert(array)
        }).catch((randomNumber) => {
            alert(randomNumber)
        })
}

const getArrayFromServerAsync = (size) => {
    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 101);
            console.log(randomNumber)
            if (randomNumber % 2 === 0) {
                let newArray = Array(size).fill().map(() => Math.floor(100 * Math.random()))
                resolve(newArray)
            } else {
                reject(`${randomNumber} is not even`)
            }
        }, 1000);

    })
}

//EX5


//EX6
let pizza = {}

const runEx6 = async() => {
    await getPizzaFromServerAsync()
        .then(() => {
            alert(JSON.stringify(pizza, null, 4));
        }).catch(() => {
            alert("No pizza for you today")
        })
}
const getPizzaFromServerAsync = () => {
    return myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 101);
            console.log(randomNumber)
            if (randomNumber % 2 === 0) {
                pizza.pizzaDiameter = Math.floor(Math.random() * (50 - 10 + 1)) + 10
                pizza.pizzaPrice = Math.floor(Math.random() * (80 - 20 + 1)) + 20
                pizza.pizzaToppings = Math.floor(Math.random() * (4 - 0 + 1)) + 0
                resolve()
            } else {
                reject()
            }
        }, 1000);
    })
}

//EX6