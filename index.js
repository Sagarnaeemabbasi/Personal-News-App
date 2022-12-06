let country = "in";

myNewsApi = "2a9ea303e66e4b1581043ffb2b12463d";


let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${myNewsApi}`,
  true
);

xhr.onload = function () {
  let Json = JSON.parse(this.responseText);
  let articles = Json.articles;
  let newsStr = "";
  articles.forEach(function (element, index) {
    newsStr += `       
         <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <strong>Breaking News ${index + 1}: </strong>  ${element["title"]}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse my-2" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            ${element["description"]}    <a href="${
      element["url"]
    }" target="_blank">Read more</a>
            </div>
          </div>
        </div>
      </div>`;
  });
  document.getElementById("newsList").innerHTML = newsStr;
};
xhr.send();
