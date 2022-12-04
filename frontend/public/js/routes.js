
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
        let query = document.querySelector("input#search").value;
        console.log("query", query);
        // get all informations (query_results), and compute relevance
        let query_results = [
            {
                "title": "title1",
                "description": "description1",
                "price": "price1",
                "image": "image1",
                "location": "location1",

                "url": "url1",
                "relevance": "1",
            },
            {
                "title": "title2",
                "description": "description2",
                "price": "price1",
                "image": "image2",
                "location": "location2",

                "url": "url2",
                "relevance": "4",
            },
            {
                "title": "title3",
                "description": "description3",
                "price": "price1",
                "image": "image3",
                "location": "location3",

                "url": "url3",
                "relevance": "3",
            },
        ];
        // sort results by relevance
        query_results.sort((a, b) => {
            return b.relevance - a.relevance;
        });
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML += ejs.views_search_result({query_results});
    });

        
} //init