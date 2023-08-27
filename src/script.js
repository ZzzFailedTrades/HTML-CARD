function discordbtn() {
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  dtag = document.getElementById("dtag")
  dtagtitle = document.getElementById("dtagtitle")
  dtagtext = document.getElementById("dtagtext")
  if (window.getComputedStyle(dtag).visibility === "hidden") {
    dtag.style.height = '200px'
    dtag.style.bottom = '54%'
    dtag.style.visibility = 'initial'
    dtagtitle.style.visibility = 'initial'
    dtagtext.style.visibility = 'initial'
  }
  else {
    
  dtag.style.height = '20px'
  dtag.style.bottom = '73%'
  dtag.style.visibility = 'hidden'
  dtagtitle.style.visibility = 'hidden'
  dtagtext.style.visibility = 'hidden'
  sleep(500).then(() => {
    dtag.style.height = '200px'
    dtag.style.bottom = '54%'
    dtag.style.visibility = 'initial'
    dtagtitle.style.visibility = 'initial'
    dtagtext.style.visibility = 'initial'
  })
  }
  dtagtitle.innerHTML = 'failedtrades.'
  dtagtitle.removeAttribute('href')
  dtagtext.innerHTML = 'This is my discord. Please dm for business inquiries ONLY.'
}
function spotifybtn() {
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  dtag = document.getElementById("dtag")
  dtagtitle = document.getElementById("dtagtitle")
  dtagtext = document.getElementById("dtagtext")
  if (window.getComputedStyle(dtag).visibility === "hidden") {
    dtag.style.height = '200px'
    dtag.style.bottom = '54%'
    dtag.style.visibility = 'initial'
    dtagtitle.style.visibility = 'initial'
    dtagtext.style.visibility = 'initial'
  }
  else {
    
  dtag.style.height = '20px'
  dtag.style.bottom = '73%'
  dtag.style.visibility = 'hidden'
  dtagtitle.style.visibility = 'hidden'
  dtagtext.style.visibility = 'hidden'
  sleep(500).then(() => {
    dtag.style.height = '200px'
    dtag.style.bottom = '54%'
    dtag.style.visibility = 'initial'
    dtagtitle.style.visibility = 'initial'
    dtagtext.style.visibility = 'initial'
  })
  }
  dtagtitle.innerHTML = 'FailedTrades'
  dtagtitle.setAttribute('href', 'https://open.spotify.com/user/31mk75n6tcy24h4kgsjc4su67bfa')
  dtagtext.innerHTML = 'This is my spotify. Feel free to view my profile. (click title)'
}

var discord = document.getElementById("discord")
var spotify = document.getElementById("spotify")
var dtag = document.getElementById("dtag")
var holder = document.getElementById("holder")

discord.addEventListener('mouseover', function(event){
  holder.style.borderColor = '#5464f4'
  holder.style.backgroundColor = '#5464f4'
  dtag.style.backgroundColor = '#5464f4'
  
});
// Fires whenever mouse leaves the element
discord.addEventListener('mouseleave', function(event){
    holder.style.borderColor = '#303434'
    holder.style.backgroundColor = '#303434'
    dtag.style.backgroundColor = '#303434'
    
});
spotify.addEventListener('mouseover', function(event){
  holder.style.borderColor = '#20d464'
  holder.style.backgroundColor = '#20d464'
  dtag.style.backgroundColor = '#20d464'
  
});
// Fires whenever mouse leaves the element
spotify.addEventListener('mouseleave', function(event){
    holder.style.borderColor = '#303434'
    holder.style.backgroundColor = '#303434'
    dtag.style.backgroundColor = '#303434'
    
});
  
  
