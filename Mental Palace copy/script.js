let btn= document.querySelector('button');

function btnClickFn(){
event.preventDefault();
location = "index.html"
// window.alert("Thank you for sharing your treasure with us")
}

btn.addEventListener('mousedown', btnClickFn)



const dataImage = localStorage.getItem("imgData");
const bannerImg = document.getElementById("tableBanner");
bannerImg.src = "data:image/png;base64," + dataImage;
console.log("yep")


window.onload = function() {
    var picture = localStorage.getItem('imgData');
    var image = document.createElement('img');
    image.src = picture;
    document.body.appendChild(image);
   };
