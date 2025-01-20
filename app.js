const imageArray = [
  {
    src: "assets/image1.jpeg",
    alt: "sunset over a vast ocean with an island in the background",
  },
  {
    src: "assets/image2.jpeg",
    alt: "sunset over water with fishing boats",
  },
  {
    src: "assets/image3.jpeg",
    alt: "Goa 2024 written in the sand",
  },
  {
    src: "assets/image4.jpeg",
    alt: "4 teepees in twilight sun",
  },
  {
    src: "assets/image5.jpeg",
    alt: "Pena Palace in Sintra, Lisbon",
  },
];

let currentIndex = 0;
const maxImageIndex = imageArray.length - 1;

function generateThumbnails() {
  // to display each image in the array
  // for every object in the imageArray
  // create an img element tag in the document and store that in imgElm variable
  // link the variable src and alt to the src and alt in the array objects
  // append each variable to the body of the document
  imageArray.forEach(function (object, index) {
    // create tag <img />
    const imgElm = document.createElement("img");
    imgElm.src = object.src;
    imgElm.alt = object.alt;
    imgElm.tabIndex = 0;

    document.getElementById("thumbnail").append(imgElm);

    // add event listener to each image
    imgElm.addEventListener("click", function () {
      document.getElementById("background").src = object.src;
      currentIndex = index;
    });

    imgElm.addEventListener("keydown", function () {
      if (event.key == "Enter") {
        document.getElementById("background").src = object.src;
        currentIndex = index;
      }
    });
  });
}

function showImage() {
  document.getElementById("background").src = imageArray[0].src;
}
showImage();
generateThumbnails();

// access the button
// add event listener
// when event happens skip to next photo

const backButton = document.getElementById("backbutton");
backButton.addEventListener("click", function () {
  if (currentIndex == 0) {
    currentIndex = maxImageIndex + 1;
  }
  currentIndex -= 1;
  let currentImage = imageArray[currentIndex];
  document.getElementById("background").src = currentImage.src;
});

const nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", function () {
  if (currentIndex == maxImageIndex) {
    currentIndex = 0;
    let currentImage = imageArray[currentIndex];
    document.getElementById("background").src = currentImage.src;
  } else {
    currentIndex += 1;
    let currentImage = imageArray[currentIndex];
    document.getElementById("background").src = currentImage.src;
  }
  // if current index < array length then reset to 0
});
