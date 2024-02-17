const pageHeight = window.innerHeight
const pageWidth = window.innerWidth
const pageContainer = document.getElementById("container")
const funButton = document.getElementById("funButton")


const phraseArray = [
    "I love you",
    "I love you so much",
    "I love you lots and lots",
    "Lots and lots and lots",
    "I'll love you forever",
    "You're beautiful",
    "You're mine",
    "You're everything I've wanted",
    "I think about you all the time",
    "You give my life purpose",
    "You complete me",
    "I'm yours",
    "oooOOOOOoooOOO",
    "I love you more than chocolate milk",
    "jnefrskjfnsjfnekjn",
    "My favourite person",
    "Je t'aime",
    "<3"
]

const colorArray = [
    "red",
    "blue",
    "pink",
    "green",
    "purple",
    "orange",
]

const randomFont = () => {

    return size
}

const randomColor = () => {
    const color = Math.floor(Math.random() * colorArray.length)
    return colorArray[color]
}

const randomPhrase = () => {
    const randomNum = Math.random() * phraseArray.length
    const randomFloor = Math.floor(randomNum)
    
    return phraseArray[randomFloor]
}

const randomPosition = (maxValue, type) => {

    let randomVal = Math.random() * maxValue
    if (type === "height") {
        if (randomVal + 100 > pageHeight) {
            randomVal = randomVal - 70
        }
    } else {
        if (randomVal + 100 > pageWidth) {
            randomVal = randomVal - 70
        }
    }

    return randomVal
}

const makeTitle = () => {
    const testTitle = document.createElement("h1")
    testTitle.textContent = randomPhrase()
    testTitle.style = `position: absolute; top: ${randomPosition(pageHeight, "height")}px; left: ${randomPosition(pageWidth, "width")}px; color: ${randomColor()}`
    pageContainer.append(testTitle)
}

funButton.addEventListener("click", makeTitle)