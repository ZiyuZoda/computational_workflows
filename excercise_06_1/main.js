// let btn= document.querySelector('button');

// function btnClickFn(){
// btn.classList.add('T-I-JW');


// }
// function btnClickFn(){
//   btn.classList.remove('T-I-JW');
  
  
//   }
  

// btn.addEventListener('mousedown', btnDownFn)
// btn.addEventListener('mouseup', btnUpFn)



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
