
// get carousel images from tnris api
function retrieveCarousel(queryField, queryValue) {
    var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/sgm_note';
    if (queryField) {
        carouselUrl = carouselUrl + "?" + queryField + "=" + queryValue;
    }
    return fetch(carouselUrl).then(function (response) {
        if (!response.ok) {
            throw new Error('Could not retrieve TNRIS API response for carousel images.');
        }
        return response.json();
    })
        .then(function (data) {
            data.results.forEach(function (t) {
                // use api values to create clean variables to use in html below
                $(document).ready(function () {
                    for (let j = 0; j < 1; j++) {
                        $('<div class="carousel-item"><img src="https://cdn.tnris.org/images/cap_area_ortho_dam_banner_21:9.jpg"> <div class="carousel-caption"><p>' + t.document_id + '</p> </div>  </div>').appendTo('.carousel-inner');

                    }

                    $('.carousel-item').first().addClass('active');
                    $('#carousel').carousel();
                });
            });

            data.results
            $(document).ready(function () {
                for (let i = 0; i < data.count; i++) {
                    $('<li data-target="#tnris-carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')

                }
                $('.carousel-indicators > li').first().addClass('active');
            });
            console.log(data.count);
        })
}

// run functions when on pipeline page
if (location.pathname.includes('/carousel')) {
    retrieveCarousel();
}

