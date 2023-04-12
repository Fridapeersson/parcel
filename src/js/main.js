const img = document.createElement("img");
img.src = "../media/placeholderBild.png";

const imgUrl = new URL("../media/placeholderBild.png", import.meta.url);
console.log(import.meta.url);
img.src = imgUrl;

document.body.append(img);

