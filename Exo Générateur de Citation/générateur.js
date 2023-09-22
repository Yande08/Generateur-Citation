const citation = document.getElementById('citation')
const Author = document.getElementById('Author')

const api = "https://api.quotable.io/random"

async function getquote(url){
    const response = await fetch(url)
    let data = await response.json()
    //console.log(data)
    citation.innerHTML = data.content
    Author.innerHTML = data.author
    Author.style.background = "red"
    Author.style.padding = "5px 20px"
}
getquote(api)
