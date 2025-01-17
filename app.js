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
];

imageArray.forEach(function (object) {
  const imgElm = document.createElement("img");
  imgElm.src = object.src;
  imgElm.alt = object.alt;
  document.body.append(imgElm);
});

// to display each image in the array

// first object in the array
// const imageObject = imageArray;
// create image element and assign src and alt

// assign src to image

// add element to page
