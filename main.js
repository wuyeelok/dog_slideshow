let timer;
let deleteFirstPhotoDelay;

// New way of writing fetch
async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    // console.log(data.message)
    createBreedList(data.message);
  } catch (e) {
    console.log("There was a problem fetching the breed list.");

    document.getElementById("breed").innerHTML = `
        
            <p class="error-msg  error-msg--red">Dogs API is currently DOWN!</p>
        
        `;
  }
}

start();

function createBreedList(breadList) {
  document.getElementById("breed").innerHTML = `
            <select onchange="loadByBreed(this.value)">
                <option disabled selected>Choose a dog breed</option>
                ${Object.keys(breadList)
                  .map(function (breed) {
                    return `<option>${breed}</option>`;
                  })
                  .join("")}
            </select>
    `;
}

async function loadByBreed(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    // console.log(data)
    createSlideshow(data.message);
  } catch (e) {
    console.log("Problem fetching the breed images");

    document.getElementById("app__slideshow").innerHTML = `
        
            <p class="error-msg  error-msg--red">Image Not FOUND!</p>
        
        `;
  }
}

function createSlideshow(images) {
  // console.log(images)

  let currentPos = 0;

  clearInterval(timer);
  clearTimeout(deleteFirstPhotoDelay);

  if (images.length > 1) {
    document.getElementById("app__slideshow").innerHTML = `
        <div
        class="app__slide"
        style="
            background-image: url('${images[0]}');
        "
        >
        </div>

        <div
        class="app__slide"
        style="
            background-image: url('${images[1]}');
        "
        >
        </div>
    `;

    currentPos += 2;
    if (images.length == 2) {
      // if there are only 2 images, reset currentPos to zero

      currentPos = 0;
    }

    timer = setInterval(nextSlide, 3000);
  } else {
    // if there is only 1 image

    document.getElementById("app__slideshow").innerHTML = `
        <div
        class="app__slide"
        style="
            background-image: url('${images[0]}');
        "
        >
        </div>

        <div class="app__slide">
        </div>
    `;
  }

  function nextSlide() {
    document.getElementById("app__slideshow").insertAdjacentHTML(
      "beforeend",
      `
        <div
        class="app__slide"
        style="
            background-image: url('${images[currentPos]}');
        "
        >
        </div>
        `
    );

    deleteFirstPhotoDelay = setTimeout(function () {
      document.querySelector(".app__slide").remove();
    }, 1000);

    if (currentPos + 1 >= images.length) {
      currentPos = 0;
    } else {
      currentPos++;
    }
  }
}
