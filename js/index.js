console.log("hello");
let link = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c5489bc356f14c8dadd9c507807d2cb4";
let apiKey = 'c5489bc356f14c8dadd9c507807d2cb4'
let country = 'us';
let new_link = `https://newsapi.org/v2/top-headlines?country=${apiKey}&apiKey=${apiKey}`;
// Grab the news container
let newsContainer = document.getElementById('news-container');
// Create an ajax get request
const request = new XMLHttpRequest();
request.open('GET', "https://newsapi.org/v2/top-headlines?country=us&apiKey=c5489bc356f14c8dadd9c507807d2cb4", true);
console.log("hello END");

request.onload = function () {
    if (this.status === 200) {    
        let data = JSON.parse(this.responseText);
        let articles = data.articles;    
        let newsHTML = "";
        articles.forEach(function (element, index) {
            let text = `<div class="col mb-4">
                            <div class="card h-100">
                                <img src="${element["urlToImage"]}" class="card-img-top" alt="Image">
                                <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text">${element["description"]}</p>
                                    <a href="${element["url"]} target="_blank">Read More</a>
                                    <p>Last Upadted ${element["publishedAt"]}</p>
                                    <p>Author: ${element["author"]}</p>
                                </div>
                            </div>
                        </div>`;

            newsHTML += text;
        });
        newsContainer.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}
request.send();