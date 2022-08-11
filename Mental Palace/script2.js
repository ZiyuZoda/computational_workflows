let box = document.querySelector('box a')

let images = {
  "imageList": []
}

window.addEventListener('load', pageLoadFn)



function pageLoadFn(event){
  if(localStorage.getItem('images') === null){
    return
  } else {
    images = JSON.parse(localStorage.getItem('images'))
    images.imageList.forEach(displayImage)
  }
}

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

// letti was here
var uploadField = document.getElementById("file");

uploadField.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if(input.files && input.files[0]){
      reader = new FileReader();

      reader.onload = function(event){
          
          result = event.target.result
          console.log(result)
      }
      reader.readAsDataURL(input.files[0]);
  }
  console.log(input.files)
}

const addNewImage = (e) => {
  e.preventDefault();
const lettiImage = `<img src="${result}"></img>`;

let imgObject = {
  img: lettiImage
}

images.imageList.push(imgObject);
localStorage.setItem('images', JSON.stringify(images))
}
// read img and show it
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  // const uploadImage = document.getElementById('file');
  const uploadImage = document.querySelector('img');
  const imgData = getBase64Image(uploadImage)
  
  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
    
    // let imgObject = {
    //   img: reader.result
    // }
    // images.imageList.push(imgObject);
  //  localStorage.setItem('images', JSON.stringify(images))
    localStorage.setItem("imgData", imgData);
   
  }, false);

  if (file) {
    reader.readAsDataURL(file);

  }
}




// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   console.log(canvas.width,canvas.height);
  
//   var ctx = canvas.getContext("2d");

//   img.onload = function () {
//     ctx.drawImage(img, 200, 200);
//   };
  

//   var dataURL = canvas.toDataURL("image/png");
// console.log(dataURL)
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");;
// }

// 

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






