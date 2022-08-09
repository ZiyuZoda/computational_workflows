let btn= document.querySelector('button');



function GoNextPage(){
  location.href("Homepage.html")

}
  

btn.addEventListener('mouseclick', GoNextPage)



const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 3000, yoyo: true }
).start();