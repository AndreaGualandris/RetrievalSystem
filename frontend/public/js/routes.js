

function load_footer() {
    let foot = ejs.views_includes_footer();
    document.querySelector("footer.site_footer").innerHTML = foot;
}


function init() {
    load_footer();

    document.querySelector("form#search_form").addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector("#search_results h3").innerHTML = 'Search Results';
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML = "";
        let query = document.querySelector("input#search").value;
        console.log("query", query);

        fetch(`/search?query=${query}`).then((response) => {
            return response.json();
        }).then((response) => {
            console.log("response", response);
            result_list.innerHTML += ejs.views_search_result({"query_results":response});
        });
    });

        
} 