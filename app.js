const imageArray = [
  {
    src: "assets/image1.jpeg",
    alt: "sunset over a vast ocean with mountainous island in the background",
  },
];

// first object in the array
const imageObject = imageArray[0];

// create image element and assign src and alt
const imgElm = document.createElement("img");
// assign src to image
imgElm.src = imageObject.src;
imgElm.alt = imageObject.alt;

// add element to page
document.body.append(imgElm);
