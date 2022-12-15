let grid = true;

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
            console.log("a_id", a_id);

            fetch(`/similar?query=${query}&id=${a_id}`).then((response) => {
                return response.json();
            }).then((response) => {

                console.log("response", response);
                if (grid) {
                    result_list.innerHTML = "";
                    let result_list_grid = document.createElement("section");
                    result_list_grid.setAttribute("id", "search_results_list_grid");
                    result_list.appendChild(result_list_grid);
                    result_list_grid.innerHTML += ejs.views_search_result_grid({ "query_results": response });
                } else {
                    result_list.innerHTML = "";
                    result_list.innerHTML += ejs.views_search_result({ "query_results": response });
                }

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
            if (grid) {
                result_list.innerHTML = "";
                let result_list_grid = document.createElement("section");
                result_list_grid.setAttribute("id", "search_results_list_grid");
                result_list.appendChild(result_list_grid);
                result_list_grid.innerHTML += ejs.views_search_result_grid({ "query_results": response });
            } else {
                result_list.innerHTML = "";
                result_list.innerHTML = ejs.views_search_result({ "query_results": response });
            }
            similar_listener();
            
        });
    });
    
    document.querySelector("img.home_img").addEventListener("click", (event) => {
        event.preventDefault();
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML = "";
        document.querySelector("#search_results_list").appendChild(document.createElement("h5")).innerHTML = 'No more homelessness'
        document.querySelector("#search_results h3").innerHTML = '';
    });
    
    document.querySelector("#filters").addEventListener("click", (event) => {
        event.preventDefault();
        
        if (!filters) {
            filters = true;
            document.querySelector("#inputs_bar").innerHTML += ejs.views_filters();
            document.querySelector("form#filter_form").addEventListener("submit", (event) => {
                event.preventDefault();
                // extract the filters
                let filters = { // filters placeholder
                    "price": 0,
                    "state": "IL",
                    "city": "Chicago",
                    "beds": 1
                };
                let checkboxes = document.querySelectorAll("input.checkoption");
                checkboxes.forEach((checkbox) => {
                    if (checkbox.checked) {
                        filters.state = checkbox.value;
                    }
                });
                let range = document.querySelector("input#range_price").value;
                filters.price = range;
                let beds = document.querySelector("input#beds_quantity").value;
                filters.beds = beds;
                let cities = document.querySelectorAll("#cities option");
                cities.forEach((city) => {
                    if (city.selected) {
                        filters.city = city.value;
                    }
                });
                console.log("filters", filters); // vedi nella console di chrome i filtri selezionati (funzionano tutti)
                // send the filters to the server
                // DA QUI SUPER COPILOTATA NON SO SE FUNZIONA PROBABILMENTE NO, GUALA FAI LA MAGIA <3
                // fetch(`/filters`, {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(filters)
                // }).then((response) => {
                //     return response.json();
                // }
                // ).then((response) => {
                //     console.log("response", response);
                //     let result_list = document.querySelector("#search_results_list");
                //     result_list.innerHTML = "";
                //     if (grid) {
                //         result_list.innerHTML = "";
                //         let result_list_grid = document.createElement("section");
                //         result_list_grid.setAttribute("id", "search_results_list_grid");
                //         result_list.appendChild(result_list_grid);
                //         result_list_grid.innerHTML += ejs.views_search_result_grid({ "query_results": response });
                //     } else {
                //         result_list.innerHTML = "";
                //         result_list.innerHTML += ejs.views_search_result({ "query_results": response });
                //     }
                //     similar_listener();
                // }
                // );
            });
        } else {
            document.querySelector("#inputs_bar").removeChild(document.querySelector("form#filter_form"));
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
        } else {
            document.querySelector(".container").removeChild(document.querySelector(".cluster"));
            clustering = false;
        }
    });
} 

// filters functions
function checkedOnClick(el){

    // Select all checkboxes by class
    let checkboxesList = document.querySelectorAll("input.checkoption");
    checkboxesList.forEach((checkbox) => {
        checkbox.checked = false; // Uncheck all checkboxes
    });

    el.checked = true; // Checked clicked checkbox
}