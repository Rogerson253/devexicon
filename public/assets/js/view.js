$(document).ready(function () {
  // let list = document.querySelector('.list-group');
  const $deck=$('.deck');
  function getDefinitions() {
      $.ajax({
        method: "GET",
        url: "/api/definitions/",
      }).then((res) => {

        res.forEach(definition => {
        //  let li = $('<li/>')
        //   .appendTo(list);

$deck.append
// bootstrap cards

(` <div class="card" style="width: 18rem; box-shadow: 5px 10px; margin: 5px;">

<div class="card-body">
  <h3 class="card-title">${definition.language}</h3>
  <p class="card-text">Topic: ${definition.topic}</p>
  <p class="card-text">Definition: ${definition.definition}</p>
  <p class="card-text">Example: <textarea readonly>${definition.example}</textarea></p>
</div>
</div>`)

// uikit cards

// (`<div class="uk-card uk-card-hover uk-card-body uk-section uk-preserve-color uk-section-primary uk-width-1-2@m">
// <div class="uk-card-header">
//     <div class="uk-card-badge uk-label">${definition.language}</div>
//     <h3 class="uk-card-title">Topic: ${definition.topic}</h3>
//     <p>Definition: ${definition.definition}</p>
//     <div>Example: <textarea readonly>${definition.example}</div>
//     <div class="uk-card-footer"></div>
// </div>`);

// scrollspy attempt
// $deck.append
// (`  <div id="html" class="container-fluid bg-warning" style="padding-top:70px;padding-bottom:70px">
// <h1>${definition.language}</h1>
// <span class="badge badge-primary">Topic: ${definition.topic}</span>
// <p>${definition.definition}</p>
// <div>Example: <textarea readonly>${definition.example}</div>
// </div>
// <div id="css" class="container-fluid bg-primary" style="color:white;padding-top:70px;padding-bottom:70px">
//     <h1 style="color:white">${definition.language}</h1>
//     <span class="badge badge-primary">Topic: ${definition.topic}</span>
//     <p>${definition.definition}</p>
//     <div>Example: <textarea readonly>${definition.example}</div>
//     </div>
//     <div id="javascript" class="container-fluid bg-danger" style="padding-top:70px;padding-bottom:70px">
//         <h1>Javascript</h1>
//         <p>stuff</p>
//         </div>`);

        });
      });
    }
    getDefinitions();
});