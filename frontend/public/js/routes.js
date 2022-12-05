
function load_footer() {
    let foot = ejs.views_includes_footer();
    document.querySelector("footer.site_footer").innerHTML = foot;
}

// function load_index() {
//     let homePage = ejs.views_index();
//     document.querySelector("main.home_page").innerHTML = homePage;
// }

function init() {

    load_footer();

    document.querySelector("form#search_form").addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector("#search_results h3").innerHTML = 'Search Results';
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML = "";
        let query = document.querySelector("input#search").value;
        console.log("query", query);
        // get all informations (query_results), and compute relevance
        let query_results = [
            {
                "title": "title1",
                "address": "address1",
                "price": "price1",
                "beds": "beds1",
                "urlImage": "https://images1.apartments.com/i2/uswEseKnMnU4ebRfW82ffRnkLFMx9-2IoNdmDEx12Lw/117/the-residences-at-newcity-chicago-il-building-photo.jpg",
                "urlHouse": "https://www.apartments.com/the-residences-at-newcity-chicago-il/wg6wcxl/",

                "description": "description1",
                "relevance": "7",
            },
            {
                "title": "title2",
                "address": "address2",
                "price": "price2",
                "beds": "beds2",
                "urlImage": "https://cdngeneral.rentcafe.com/dmslivecafe/2/11071/02_2373E70th_Unit211_1_LivingRoom_LowRes(1).jpg?width=380",
                "urlHouse": "https://www.rentcafe.com/apartments/il/chicago/shorewind-clo/default.aspx",

                "description": "description2",
                "relevance": "4",
            },
            {
                "title": "title3",
                "address": "address3",
                "price": "price3",
                "beds": "beds3",
                "urlImage": "https://image1.apartmentfinder.com/i2/zoRapVKl-qTw_uM1uV3fXbr77-CHAnELOKghjtBirCU/117/city-club-apartments-mda-chicago-il-building-photo.jpg",
                "urlHouse": "https://www.apartmentfinder.com/Illinois/Chicago-Apartments/City-Club-Apartments-Mda-Apartments-zxlkz6x",

                "description": "description3",
                "relevance": "9",
            },
            {
                "title": "title3",
                "address": "address3",
                "price": "price3",
                "beds": "beds3",
                "urlImage": "https://image1.apartmentfinder.com/i2/zoRapVKl-qTw_uM1uV3fXbr77-CHAnELOKghjtBirCU/117/city-club-apartments-mda-chicago-il-building-photo.jpg",
                "urlHouse": "https://www.apartmentfinder.com/Illinois/Chicago-Apartments/City-Club-Apartments-Mda-Apartments-zxlkz6x",

                "description": "description3",
                "relevance": "9",
            },
            {
                "title": "title3",
                "address": "address3",
                "price": "price3",
                "beds": "beds3",
                "urlImage": "https://image1.apartmentfinder.com/i2/zoRapVKl-qTw_uM1uV3fXbr77-CHAnELOKghjtBirCU/117/city-club-apartments-mda-chicago-il-building-photo.jpg",
                "urlHouse": "https://www.apartmentfinder.com/Illinois/Chicago-Apartments/City-Club-Apartments-Mda-Apartments-zxlkz6x",

                "description": "description3",
                "relevance": "9",
            },
            {
                "title": "title3",
                "address": "address3",
                "price": "price3",
                "beds": "beds3",
                "urlImage": "https://image1.apartmentfinder.com/i2/zoRapVKl-qTw_uM1uV3fXbr77-CHAnELOKghjtBirCU/117/city-club-apartments-mda-chicago-il-building-photo.jpg",
                "urlHouse": "https://www.apartmentfinder.com/Illinois/Chicago-Apartments/City-Club-Apartments-Mda-Apartments-zxlkz6x",

                "description": "description3",
                "relevance": "9",
            },
        ];
        // sort results by relevance
        query_results.sort((a, b) => {
            return b.relevance - a.relevance;
        });

        result_list.innerHTML += ejs.views_search_result({query_results});
    });

        
} //init