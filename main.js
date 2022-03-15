// New way of writing fetch
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    // console.log(data.message)
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


async function loadByBreed(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    // console.log(data)
    createSlideshow(data.message)

    const myStr = `
    <div
                    class="app__slide"
                    style="
                        background-image: url('https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg');
                    "
                ></div>
    `

    // document.getElementsByClassName("app__slide")[0].innerHTML = `
    //     ${data.message.map(function (imgUrl) {
    //     return `<img src="${imgUrl}" alt="dog image" />`
    // }).join('')}
    // `
}

function createSlideshow(images) {
    // console.log(images)

    document.getElementById("app__slideshow").innerHTML = `
    <div
    class="app__slide"
    style="
        background-image: url('${images[0]}');
    "
    >
    </div>
    `
}

