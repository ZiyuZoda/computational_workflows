// read img and show it
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    
  }
}
// when upload, dive into homepage
let btn= document.querySelector('button');

function btnClickFn(){

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

