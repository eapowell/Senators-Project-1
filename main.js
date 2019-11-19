async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
// return the async data
let allSenators = []
//let simpleSenators = []

const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
    populateDOM(allSenators)
})



const republicans = allSenators.filter(senator => senator.party === 'R')
const democrats = allSenators.filter(senator => senator.party === 'D')
const independent = allSenators.filter(senator => senator.party === 'ID')

console.log(republicans, democrats)

const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    let cardImage = document.createElement('div')
    card.setAttribute('class', 'card-image')
    let cardFIgure = document.createElement('figure')
    cardFIgure.setAttribute('class', 'image is-4by3')
    let figureImage = document.createElement('img')
    figureImage.src = "https://bulma.io/images/placeholders/1280x960.png"
    //figureImage.src = "https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg"
    figureImage.alt = "Placeholder_image"

   // cardFigure.appendChild(figureImage)
    cardImage.appendChild(cardFigure)
    card.appendChild(cardImage)
    //card.appendChild(populateCardContent(senator))
    container.appendChild(card)

}