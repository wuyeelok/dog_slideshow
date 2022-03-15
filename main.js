// New way of writing fetch
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    // console.log(data)
    createBreedList(data.message)
}

start()


function createBreedList(breadList) {
    document.getElementById("breed").innerHTML = `
            <select>
                <option disabled selected>Choose a dog breed</option>
                <option>Corgi</option>
                <option>Boxer</option>
                <option>Bulldog</option>
            </select>
    `
}