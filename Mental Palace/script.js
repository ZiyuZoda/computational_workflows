let btn= document.querySelector('button');

function btnClickFn(){
event.preventDefault();
location = "index.html"
// window.alert("Thank you for sharing your treasure with us")
}

btn.addEventListener('mousedown', btnClickFn)



const dataImage = localStorage.getItem("imgData");
const bannerImg = document.getElementById("tableBanner");
bannerImg.src =  dataImage +"AAADICAYAAAAkwDn3AAAAAXNSR0IArs4c6QAABAhJREFUeF7t1zEOwkAUA9HN/S+NQoOEIJrej9qNxyPy9zp+CJxzLhQQuAkQgQdvAkQgAhE48CHgH4EN/hE44B+BA18EfBoo4dPAAZ8GDvg0cOAXATcCL9wIHHAjcMCNwAE3Agf+EnAsksOxyAHHIgccixxwLHLAsciBZwJeDQzxauCAVwMHvBo44NXAAa8GDng1cCAQ8HwMkBYiRFhYOXQkQoC0ECHCwsqhIxECpIUIERZWDh2JECAtRIiwsHLoSIQAaSFChIWVQ0ciBEgLESIsrBw6EiFAWogQYWHl0JEIAdJChAgLK4eORAiQFiJEWFg5dCRCgLQQIcLCyqEjEQKkhQgRFlYOHYkQIC1EiLCwcuhIhABpIUKEhZVDRyIESAsRIiysHDoSIUBaiBBhYeXQkQgB0kKECAsrh45ECJAWIkRYWDl0JEKAtBAhwsLKoSMRAqSFCBEWVg4diRAgLUSIsLBy6EiEAGkhQoSFlUNHIgRICxEiLKwcOhIhQFqIEGFh5dCRCAHSQoQICyuHjkQIkBYiRFhYOXQkQoC0ECHCwsqhIxECpIUIERZWDh2JECAtRIiwsHLoSIQAaSFChIWVQ0ciBEgLESIsrBw6EiFAWogQYWHl0JEIAdJChAgLK4eORAiQFiJEWFg5dCRCgLQQIcLCyqEjEQKkhQgRFlYOHYkQIC1EiLCwcuhIhABpIUKEhZVDRyIESAsRIiysHDoSIUBaiBBhYeXQkQgB0kKECAsrh45ECJAWIkRYWDl0JEKAtBAhwsLKoSMRAqSFCBEWVg4diRAgLUSIsLBy6EiEAGkhQoSFlUNHIgRICxEiLKwcOhIhQFqIEGFh5dCRCAHSQoQICyuHjkQIkBYiRFhYOXQkQoC0ECHCwsqhIxECpIUIERZWDh2JECAtRIiwsHLoSIQAaSFChIWVQ0ciBEgLESIsrBw6EiFAWogQYWHl0JEIAdJChAgLK4eORAiQFiJEWFg5dCRCgLQQIcLCyqEjEQKkhQgRFlYOHYkQIC1EiLCwcuhIhABpIUKEhZVDRyIESAsRIiysHDoSIUBaiBBhYeXQkQgB0kKECAsrh45ECJAWIkRYWDl0JEKAtBAhwsLKoSMRAqSFCBEWVg4diRAgLUSIsLBy6EiEAGkhQoSFlUNHIgRICxEiLKwcOhIhQFqIEGFh5dCRCAHSQoQICyuHjkQIkBYiRFhYOXQkQoC0ECHCwsqhIxECpIUIERZWDh2JECAtRIiwsHLoSIQAaSFChIWVQ0ciBEgLESIsrBw6EiFAWogQYWHl0JEIAdJChAgLK4eORAiQFiJEWFg5dCRCgLQQIcLCyqEjEQKkhQgRFlYOHYkQIC1EiLCwcuhIhABpIUKEhZVDxxdrGwDJ6hhJZAAAAABJRU5ErkJggg==";
console.log("yep")
console.log(dataImage)


window.onload = function() {
    var picture = localStorage.getItem('imgData');
    var image = document.createElement('img');
    image.src = picture;
    document.body.appendChild(image);
   };
