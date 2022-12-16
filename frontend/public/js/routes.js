let grid = true;
let filters_hub = false;
let clustering = false;

function put_change_display() {
    let button = document.querySelector("#inputs_bar #change_display");
    button.addEventListener("click", () => {
        if (grid) {
            button.innerHTML = "Results displayed as a Vector"
        } else {
            button.innerHTML = "Results displayed as a Grid"
        }
        grid = !grid;
    })
}

function load_footer() {
    let foot = ejs.views_includes_footer();
    document.querySelector("footer.site_footer").innerHTML = foot;
}

function similar_listener() {
    let query = document.querySelector("input#search").value;
    let result_list = document.querySelector("#search_results_list");
    document.querySelectorAll("span.similar_butt").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            let a = button.parentNode;
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
            // })
        });
    });
}

function put_listener_search() {
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
}

function init() {
    load_footer();

    put_listener_search();
    put_change_display();

    document.querySelector("img.home_img").addEventListener("click", (event) => {
        event.preventDefault();
        let result_list = document.querySelector("#search_results_list");
        result_list.innerHTML = "";
        document.querySelector("#search_results_list").appendChild(document.createElement("h5")).innerHTML = 'No more homelessness'
        document.querySelector("#search_results h3").innerHTML = '';
    });

    document.querySelector("#filters").addEventListener("click", (event) => {
        event.preventDefault();
        if (!filters_hub) {
            filters_hub = true;
            
            fetch(`/cities`).then((response) => {
                return response.json();
            }).then((response) => {
                console.log("response", response);

                document.querySelector("#inputs_bar").innerHTML += ejs.views_filters({ "f_city": response });
                put_listener_search();
                put_change_display();
            
                document.querySelector("form#filter_form").addEventListener("submit", (event) => {
                    event.preventDefault();
                    // extract the filters
                    let query = document.querySelector("input#search").value;
                    let filters_data = { // filters placeholder
                        "price": {min: "", max: ":"},
                        "state": ":",
                        "city": ":",
                        "beds": ":",
                        'query': query
                    };
                    let checkboxes = document.querySelectorAll("input.checkoption");
                    checkboxes.forEach((checkbox) => {
                        if (checkbox.checked) {
                            filters_data.state = checkbox.value;
                        }
                    });
                    if (document.querySelector("input#range_price").value != "") {
                        let range = document.querySelector("input#range_price").value;
                        filters_data.price.max = range;
                    }
                    
                    if (document.querySelector("input#beds_quantity").value != "") {
                        let beds = document.querySelector("input#beds_quantity").value;
                        filters_data.beds = beds;
                    }
                    
                    
                    let cities = document.querySelectorAll("#cities option");
                    cities.forEach((city) => {
                        if (city.selected) {
                            filters_data.city = city.value;
                        }
                    });
                    console.log("filters", filters_data); 
                    
                    fetch(`/filtering`, {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(filters_data)
                    }).then((response) => {
                        console.log("response", response);
                        return response.json();
                    }).then((response) => {
                        console.log("response", response);
                        let result_list = document.querySelector("#search_results_list");
                        result_list.innerHTML = "";
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
                       
                    });
                    

                });
            });
        } else {
            document.querySelector("#inputs_bar").removeChild(document.querySelector("form#filter_form"));
            filters_hub = false;
        }
    });
}

// filters functions
function checkedOnClick(el) {

    if (!el.checked) {
        el.checked = false;
    } else {
        // Select all checkboxes by class
        let checkboxesList = document.querySelectorAll("input.checkoption");
        checkboxesList.forEach((checkbox) => {
            checkbox.checked = false; // Uncheck all checkboxes
        });
    
        el.checked = true; // Checked clicked checkbox
    }

}