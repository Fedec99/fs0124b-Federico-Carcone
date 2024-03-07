const apiCatsUrl = 'https://api.pexels.com/v1/search?query=cats'
const apiDogsUrl = 'https://api.pexels.com/v1/search?query=dogs'
const btnLoad1 = document.querySelector('.btnLoad1')
const btnLoad2 = document.querySelector('.btnLoad2')
const btnLoad3 = document.querySelector('.btnLoad3')
const btnLoad4 = document.querySelector('.btnLoad4')
const apiContainer = document.querySelector('.apiContainer')

const petTitle = document.querySelector('.petTitle')
const petImg = document.querySelector('.petImg')
const photographerName = document.querySelector('.photographer')
const photographerLink = document.querySelector('.photographerLink')

const options = {
    headers: {
        Authorization: 'NHepCdMw5FFrwDkBxYECUxxdYzf9psGgzlUI5T0sBN3yXtx3Y0w3E7mE'
    } 
};

fetcherCats(apiCatsUrl, options)
fetcherDogs(apiDogsUrl, options)

// FETCH CATS

async function fetcherCats(url, option) {
    const response = await fetch(url, option)
    const data = await response.json()
    const cats = data.photos
    const catsPage2 = data.next_page

    console.log(data)
    console.log(cats)

}