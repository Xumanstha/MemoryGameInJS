const originalCards = ["png-bucket.png", "png-dustbin.png", "png-pan.png",
    "png-anchor.png", "png-button.png", "png-Guitar.png", "png-shovel.png",
    "png-book.png", "png-cooler.png", "png-kettle.png", "png-sofa.png",
    "png-bow.png", "png-drll.png", "png-ninjaStar.png", "png-sword.png"];
const pics = document.querySelectorAll(".pic");
const score = document.querySelector(".score");
const cardsFlippedEl = document.querySelector(".cardsFlipped")
let cardsFlipped = 0;
let cardsMatched = 0;

// Step 2: Shuffle (Fisher-Yates)
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Step 3: Ensure no adjacent duplicates
function shuffleWithoutAdjDuplicates(arr) {
    let isValid = false;

    while (!isValid) {
        shuffle(arr);
        isValid = true;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                isValid = false;
                break;
            }
        }
    }

    return arr;
}


let cards = [...originalCards, ...originalCards];

cards = shuffleWithoutAdjDuplicates(cards);
// console.log(cards);
let arrayOfCard = [30]

const main = document.querySelector(".main");

for (let i = 0; i < 30; i++) {
    arrayOfCard[i] = document.createElement("img");
    arrayOfCard[i].classList.add("png");
    arrayOfCard[i].src = cards[i];
    pics[i].classList.add("closed");
    pics[i].append(arrayOfCard[i]);
}
let number1 = 0;
let tempArr = [];
let matchedCardsArr = [];
let selectedCardsArr = [];
pics.forEach((pic, index) => {
    pic.addEventListener("click", () => {
        if (!matchedCardsArr.includes(pic.firstChild.src)) {
            number1++;
            cardsFlipped++;
            cardsFlippedEl.textContent = `Cards Flipped: ${cardsFlipped}`;
            console.log(number1);
            if (number1 <= 2) {
                pic.classList.add("opened");
                pic.classList.remove("closed");
                tempArr.push(pic);
                selectedCardsArr.push(pic);
                // console.log(tempArr.length);
                if (tempArr.length === 2 && tempArr[0].firstChild.src === tempArr[1].firstChild.src) {

                    matchedCardsArr.push(tempArr[0].firstChild.src);
                    console.log(matchedCardsArr);
                    selectedCardsArr = [];
                    cardsMatched++;
                    score.textContent = `Score: ${cardsMatched}`;
                }
                tempArr = [];
            } else {
                number1 = 1;
                selectedCardsArr[0]?.classList.remove("opened");
                selectedCardsArr[1]?.classList.remove("opened");
                selectedCardsArr[0]?.classList.add("closed");
                selectedCardsArr[1]?.classList.add("closed");
                selectedCardsArr = [];
                console.log(selectedCardsArr);
                tempArr.push(pic);
                selectedCardsArr.push(pic);
                pic.classList.add("opened");
                pic.classList.remove("closed");
            }
            console.log(tempArr.length);
        }
    });
});








//-----------------------------------------------------------------------Chatgpt Logic----------------------------------------------------------------

// const originalCards = [
//     "png-bucket.png", "png-dustbin.png", "png-pan.png",
//     "png-anchor.png", "png-button.png", "png-Guitar.png",
//     "png-shovel.png", "png-book.png", "png-cooler.png",
//     "png-kettle.png", "png-sofa.png", "png-bow.png",
//     "png-drll.png", "png-ninjaStar.png", "png-sword.png"
// ];

// const pics = document.querySelectorAll(".pic");

// // ---------------- SHUFFLE ----------------
// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }

// let cards = [...originalCards, ...originalCards];
// shuffle(cards);

// // ---------------- CREATE CARDS ----------------
// pics.forEach((pic, index) => {
//     const img = document.createElement("img");
//     img.src = cards[index];
//     img.dataset.card = cards[index]; // important!
//     img.classList.add("png");

//     pic.classList.add("closed");
//     pic.appendChild(img);
// });

// // ---------------- GAME LOGIC ----------------
// let openedCards = [];
// let matchedCards = [];
// let lockBoard = false;

// pics.forEach(pic => {
//     pic.addEventListener("click", () => {

//         if (
//             lockBoard ||
//             pic.classList.contains("opened") ||
//             matchedCards.includes(pic.firstChild.dataset.card)
//         ) return;

//         // open card
//         pic.classList.remove("closed");
//         pic.classList.add("opened");
//         openedCards.push(pic);

//         // check when two cards are opened
//         if (openedCards.length === 2) {
//             lockBoard = true;

//             const [card1, card2] = openedCards;
//             const val1 = card1.firstChild.dataset.card;
//             const val2 = card2.firstChild.dataset.card;

//             if (val1 === val2) {
//                 // MATCH
//                 matchedCards.push(val1);
//                 openedCards = [];
//                 lockBoard = false;
//             } else {
//                 // NO MATCH
//                 setTimeout(() => {
//                     card1.classList.remove("opened");
//                     card2.classList.remove("opened");
//                     card1.classList.add("closed");
//                     card2.classList.add("closed");

//                     openedCards = [];
//                     lockBoard = false;
//                 }, 800);
//             }
//         }
//     });
// });
