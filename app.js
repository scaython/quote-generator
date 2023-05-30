const quote = document.querySelector(".quote")
const author = document.querySelector(".author>span")
const next_btn = document.querySelector(".new-quote")
const twit_btn = document.querySelector(".twitter-btn")

// fetching quotes from api
let quotes =[]

function displayQuotes(e){
    let newquote=quotes[Math.floor(Math.random()*quotes.length)]
    quote.textContent=newquote.text
    author.textContent=newquote.author
}

async function fetchQuotes(){
    const api_url = "https://jacintodesign.github.io/quotes-api/data/quotes.json"
    try {
        let response = await fetch(api_url);
        quotes= await response.json()
              
        
    } catch (error){
           quote.textContent="Something went wrong please try again"
    }
}
// twitter intent integration
function tweetQuote(){
       const twitter_url = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
       window.open(twitter_url,"_blank");
}
//add event listeners
twit_btn.addEventListener("click",tweetQuote)
next_btn.addEventListener("click",displayQuotes)

// call function on load
fetchQuotes()