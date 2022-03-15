// New way of writing fetch
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    console.log(data.message)
    createBreedList(data.message)
}

start()


function createBreedList(breadList) {
    document.getElementById("breed").innerHTML = `
            <select onchange="loadByBreed(this.value)">
                <option disabled selected>Choose a dog breed</option>
                ${Object.keys(breadList).map(function (breed) {
        return `<option>${breed}</option>`
    }).join('')}
            </select>
    `
}


function loadByBreed(breed) {
    console.log(`breed : ${breed}`)
}