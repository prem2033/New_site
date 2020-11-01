console.log("hello");
let link = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c5489bc356f14c8dadd9c507807d2cb4";
let apiKey = 'c5489bc356f14c8dadd9c507807d2cb4'
let country = 'us';
let new_link = `https://newsapi.org/v2/top-headlines?country=${apiKey}&apiKey=${apiKey}`;
// Grab the news container
let newsContainer = document.getElementById('news-container');
// Create an ajax get request
const request = new XMLHttpRequest();
request.open('GET', "http://newsapi.org/v2/top-headlines?country=us&apiKey=c5489bc356f14c8dadd9c507807d2cb4", true);
console.log("hello END");

request.onload = function () {
    if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        let articles = data.articles;
        let newsHTML = "";
        articles.forEach(function (element, index) {
            // let text = `<div class="col mb-4">
            //                 <div class="card h-100">
            //                     <img src="${element["urlToImage"]}" class="card-img-top" alt="Image">
            //                     <div class="card-body">
            //                         <h5 class="card-title">${element["title"]}</h5>
            //                         <p class="card-text">${element["description"]}</p>
            //                         <a href="${element["url"]} target="_blank">Read More</a>
            //                         <p>Last Upadted ${element["publishedAt"]}</p>
            //                         <p>Author: ${element["author"]}</p>
            //                     </div>
            //                 </div>
            //             </div>`;
            let desc = element.description;
            if (desc) {
                let text = `
            <div class="card mb-2 mt-2 full-card">
                <div class="card-body complete-card">
                    <div class="card-contains ">
                      <img class="" src="${element["urlToImage"]}" class="img-fluid" alt="image not found" width="200px" height="200px">
                      <div class="card-body news-text">
                          <h6 class="text-justify bold-font news-heading read-cursor">${element["title"]}</h6>
                          <p class="text-justify  font-weight-normal news-description read-cursor">${element["description"]}</p>
                          <div class=" font-weight-normal read-more"><small class="under-line "><a class="anchor" href="${element["url"]}" target="_blank">Read More</a></small></div>
                          <div class=" font-weight-normal last-update"><small class="text-muted">Last Upadted ${element["publishedAt"]}</small></div>
                      </div>
                    </div>            
                </div>
              </div>`;

                newsHTML += text;
            }
        });

        newsContainer.innerHTML = newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}
request.send();