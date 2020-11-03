// Grab the news container
let newsContainer = document.getElementById('news-container');
// Create an ajax get request
const request = new XMLHttpRequest();
request.open('GET', "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c5489bc356f14c8dadd9c507807d2cb4", true);
let danger=document.getElementById('danger');
request.onload = function () {
    if (this.status === 200) {
      danger.style.display="none";
        let data = JSON.parse(this.responseText);
        let articles = data.articles;
        let newsHTML = "";
        articles.forEach(function (element, index) {
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
        document.getElementById("danger").innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
        
    }
}
request.send();