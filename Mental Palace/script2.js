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

function displayImage(image){
  console.log(image) // {name: 'hello'}
  if(image == "") return null


  var memory = document.createElement("image");

  // let newListItem = document.createElement('li');

  // newListItem = `${memory}`;

 
    box.appendChild(memory);
  

  // form.reset()
  
}




// read img and show it
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;

    let imgObject = {
      img: reader.result
    }
    images.imageList.push(imgObject);
    localStorage.setItem('images', JSON.stringify(images))

  }, false);

  if (file) {
    reader.readAsDataURL(file);
    
  }
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

