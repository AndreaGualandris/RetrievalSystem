

function load_footer() {
    let foot = ejs.views_includes_footer();
    document.querySelector("footer.site_footer").innerHTML = foot;
}

function similar_listener(){
    let query = document.querySelector("input#search").value;
    let result_list = document.querySelector("#search_results_list");
    document.querySelectorAll("span.similar_butt").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            // console.log("button cliccato")
            let a = document.querySelector("span.similar_butt").parentNode;
            let a_id = a.getAttribute("data-id");

            fetch(`/similar?query=${query}&id=${a_id}`).then((response) => {
                return response.json();
            }).then((response) => {
                console.log("response", response);
                result_list.innerHTML = "";
                result_list.innerHTML += ejs.views_search_result({ "query_results": response });

                similar_listener();
            })
        });
    });
}


function init() {
    load_footer();
    let filters = false;
    let clustering = false;

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
            // console.log("response", response);

            result_list.innerHTML += ejs.views_search_result({ "query_results": response });

            similar_listener();

        });
    });

    document.querySelector("img.home_img").addEventListener("click", (event) => {
        event.preventDefault();
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML = "";
        document.querySelector("#search_results h3").innerHTML = '';
    });

    document.querySelector("#filters").addEventListener("click", (event) => {
        event.preventDefault();

        if (!filters) {
            let result_list = document.querySelector("#search_results_list");
            result_list.innerHTML = "";
            document.querySelector(".container").innerHTML += ejs.views_filters();
            filters = true;
        }
        else {
            document.querySelector(".container").removeChild(document.querySelector(".range-slider"));
            filters = false;
        }


    });

    document.querySelector("#clustering").addEventListener("click", (event) => {
        event.preventDefault();
        if (!clustering) {
            let result_list = document.querySelector("#search_results_list");
            result_list.innerHTML = "";
            document.querySelector(".container").innerHTML += ejs.views_clusters();
            clustering = true;
        }
        else {
            document.querySelector(".container").removeChild(document.querySelector(".cluster"));
            clustering = false;
        }
    });


} 