let form = document.querySelector('form');
let tweetInput = document.querySelector('input');
let submitTweetButton = document.querySelector('button');
let tweetContainer = document.querySelector('ul');

let tweetCount = document.querySelector('.tweet_count')

let count = 30;

tweetCount.innerText = count

let tweets = {
  "tweetList":[],



}



// set how many ** characters left

// ----------------EVENT LISTENERS
window.addEventListener('load', pageLoadFn)
//when page load, get the tweet in storage
submitTweetButton.addEventListener('click', addTweet);
tweetInput.addEventListener('keyup',updateTweetCount);

// ----------------EVENT LISTENERS (callback function)
setTimeout(() => {
  
}, timeout); {
  localStorage.removeItem('tweets');
  console.log('itemss have been removed on delay')
}












function pageLoadFn(event){
  if(localStorage.getItem('tweets') ===null){
    return
  } else{
    tweets = JSON.parse(localStorage.getItem('tweets'))
    tweets.tweetList.forEach(displayTweet);
  }



}





function updateTweetCount(event){
  if(event.code == 'Backspace'){
    console.log('delete key pressed ', event.code)
    count = count+1
    tweetCount.innerText = count
  }else{
    count = count -1
    tweetCount.innerText = count
  }


  if(count <=5){
    tweetCount.style.color = 'red';
    tweetCount.style.fontWeight = 'bold';
  }
}


function addTweet(){
  event.preventDefault();
  // yep stays 
  console.log('yep')

  let newTweet = tweetInput.value;
  tweetObject = {
    handle: '@bot',
    name: newTweet
  }

  let count = 30;
  tweetCount.innerText = 30;
  displayTweet(tweetObject);
  //add tweet object to the array
  tweets.tweetList.push(tweetObject);
  // store the tweets in local storage
  localStorage.setItem('tweets', JSON.stringify(tweets))
}


function displayTweet(tweet){

console.log(tweet.name);
if(tweet ==''){
return null
}
let account_name = 'Ziyu';
let twitter_handle = '@bot';

let newListItem = document.createElement('li');

newListItem.textContent =` ${account_name} ${twitter_handle} ${tweet.name}`

if(tweet.length > count){

  console.log("enough blablabla!")
}else{
tweetContainer.appendChild(newListItem);
}
form.reset();
}


