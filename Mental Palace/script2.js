let box = document.querySelector('box a')

let images = {
  "imageList": []
}

// window.addEventListener('load', pageLoadFn)



// function pageLoadFn(event){
//   if(localStorage.getItem('images') === null){
//     return
//   } else {
//     images = JSON.parse(localStorage.getItem('images'))
//     images.imageList.forEach(displayImage)
//   }
// }

// var img = new Image();
// img.src = file;
// img.load = function() {
//  var canvas = document.createElement('canvas');
//  document.body.appendChild(canvas);
//  var context = canvas.getContext('2d');
//  context.drawImage(img, 0, 0);
//  var data = context.getImageData(x, y, img.width, img.height).data;
//  localStorage.setItem('image', data); // save image data
// };

// window.onload = function() {
//   var picture = localStorage.getItem('image');
//   var image = document.createElement('img');
//   image.src = picture;
//   document.body.appendChild(image);
//  };



// function displayImage(image){
//   console.log(image) // {name: 'hello'}
//   // if(image == "") return null

    
//   var picture = localStorage.getItem('image');
//   var Image = document.createElement('img');
//   Image.src = picture;
//   document.body.appendChild(Image);
//     // box.appendChild(newImg);
  

//   // form.reset()
  
// }




// read img and show it
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  const uploadImage = document.querySelector('input[type=file]').files[0];
  const imgData = getBase64Image(uploadImage)

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
    
    let imgObject = {
      img: reader.result
    }
    images.imageList.push(imgObject);
   localStorage.setItem('images', JSON.stringify(images))
    localStorage.setItem("imgData", imgData);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    
  }
}




function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");

  img.onload = function () {
    ctx.drawImage(img, 200, 200);
};
  

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}



// when upload, dive into homepage
let btn= document.querySelector('button');

function btnClickFn(){
  event.preventDefault();
location = "Homepage.html"
window.alert("Thank you for sharing your treasure with us")
}

btn.addEventListener('mousedown', btnClickFn)

//blob
const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 3000, yoyo: true }
).start();






