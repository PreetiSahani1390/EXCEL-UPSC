function news(){
    const url="https://newsapi.org/v2/everything?q=UPSC&apiKey=e62d445529954f32927dcce675e142e7"
fetch(url)
.then((data)=>{
return data.json();
})
.then((data)=>{
// console.log(data.articles);
const articles=data.articles
articles.forEach(element => {
   if (element.urlToImage===null) {
    return;
   }
   else{
    const div= document.createElement("div")
div.innerHTML=`<a href="${element.url}"> <div class="card">
<img src="${element.urlToImage}" alt="Image">
<div class="card-content">
 <h2>${element.title}</h2>
 <p>${element.description}</p>
</div>
</div></a>`
document.getElementById("results").appendChild(div)
   }
});
})
.catch((error)=>{
    console.log(error)
})
}

news()


// console.log(data)
// for (let i = 0; i < 10; i++) {
 
// }