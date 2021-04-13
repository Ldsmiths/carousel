// get training records from tnris api
// inject training records into html; append html to template html
function retrieveTraining(queryField, queryValue) {
    var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/sgm_note';
    if (queryField) {
        trainingUrl = trainingUrl + "?" + queryField + "=" + queryValue;
    }
    return fetch(trainingUrl).then(function (response) {
        if (!response.ok) {
            throw new Error('Could not retrieve TNRIS API response for training events.');
        }
        return response.json();
    })
        .then(function (data) {
            data.results.forEach(function (t) {
                // use api values to create clean variables to use in html below
                var record = document.createElement('div');

                record.innerHTML =
                    `
          <li class="post" data-category=${t.document_name}>
          <article>
            <figure>
            <img src=${t.document_name} alt=${t.document_name}>
              </a>
              <figcaption>
                <ol class="post-categories">
                  <li>
                    <a href="">${t.document_name}</a>
                  </li>
                </ol>
                <h2 class="post-title">
                ${t.document_name}
                  </a>
                </h2><small>#${t.document_name}</small><br><br>
                ${t.document_name}<br><br>
                <b><u>Funding:</u></b> <small>${t.sgm_note}</small>
                <br><br>
                <a href="${t.sgm_note}" target="_blank"><button>More Info</button></a>
              </figcaption>
            </figure>
          </article>
        </li>  
  
        `;

                document.getElementById('insert-here').appendChild(record);
            });
        })
}

// run functions when on pipeline page
if (location.pathname.includes('/carousel')) {
    retrieveTraining();
}



$(document).ready(function () {

    $("body").tooltip({
        selector: "[data-toggle='tooltip']",
        container: "body"
    })
        .popover({
            selector: "[data-toggle='popover']",
            container: "body",
            html: true
        });

});

// // get carousel images from tnris api
// function retrieveCarousel(queryField, queryValue) {
//     var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/sgm_note';
//     if (queryField) {
//         carouselUrl = carouselUrl + "?" + queryField + "=" + queryValue;
//     }
//     return fetch(carouselUrl).then(function (response) {
//         if (!response.ok) {
//             throw new Error('Could not retrieve TNRIS API response for carousel images.');
//         }
//         return response.json();
//     })
//         .then(function (data) {
//             data.results.forEach(function (t) {
//                 // use api values to create clean variables to use in html below
//                 var record = document.createElement('div');

//                 record.innerHTML =
//                     `
//                 <h2>
//                 ${t.document_name}
//                 </h2><small>${t.sgm_note}</small>

//         `;

//                 document.getElementById('insert-here').appendChild(record);
//             });
//         })
// }

// // run functions when on carousel page
// if (location.pathname.includes('/carousel')) {
//     retrieveCarousel();
// }

