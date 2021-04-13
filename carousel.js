// get carousel images from tnris api
function retrieveCarousel(queryField, queryValue) {
    var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/sgm_note';
    if (queryField) {
        carouselUrl = carouselUrl + "?" + queryField + "=" + queryValue;
    }
    return fetch(carouselUrl).then(function (response) {
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
                <h2>
                ${t.document_name}
                </h2><small>#${sgm_note}</small>
  
        `;

                document.getElementById('insert-here').appendChild(record);
            });
        })
}

// run functions when on pipeline page
if (location.pathname.includes('/carousel')) {
    retrieveCarousel();
}


