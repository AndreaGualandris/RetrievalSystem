/**
 * Web Atelier 2022  - 6 - Persistent Web Apps and APIs with MongoDB
 *
 * Author: Alan Copa
 *
 * API Client
 *
 * Complete the code using the _fetch* primitives to call the Web API routes
 * implemented in the previous assignments
 *
 */
api = function() {

    /* Quiz 1 */
    // Function to determine the outcome of a fetch request.
    // Will return a promise that resolves with a JSON object if the status code is 200 or 201.
    // Will return undefined if the status code is 204. Will throw the status code otherwise.
    function validateResponse(res) {
        /* Quiz 2 */
        if (res.status == 200 || res.status == 201) {
            return res.json();  /* Quiz 3: returns a promise which resolves to an object parsed from the response body */
        } if (res.status == 204) {
            return;
        } else {
            throw res.status;
        }
    }

    /* Quiz 4 */
    // Helper function to send out an HTTP request with the given method, url, optional body and headers. 
    // It assumes that the request and response body are encoded using JSON strings.
    async function _fetchJSON(method, url, body, headers) {

        /* Quiz 5 */
        function addHeaders(headers) {
            /* Quiz 6 */
            let newHeaders = {...headers};
            /* Quiz 7 */
            newHeaders['Accept'] = 'application/json';
            /* Quiz 8 */
            if (method == 'POST' || method == 'PUT' || method == 'PATCH')
              newHeaders['Content-Type'] = 'application/json';
            return newHeaders;
          }

        /* Quiz 8 */
        if (method === 'POST' || method == 'PUT' || method == 'PATCH') {
            body = JSON.stringify(body);
        }

        /* Quiz 9 */
        // Asynchronously call fetch with the given url and options and assign
        //  the response object when the promise resolves
        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);

    }

    /* Quiz 10 */
    // Helper function to send out an HTTP request with the given method, url, optional body and headers.
    // It assumes that the response body is encoded using JSON strings, it will directly pass the body parameter to fetch. 
    // Recommended to use to POST or PUT form data objects.
    async function _fetchFORM(method, url, body, headers) {

        function addHeaders(headers) {
            let newHeaders = {...headers};
            newHeaders['Accept'] = 'application/json';
            return newHeaders;
          }

        /* Quiz 9 */
        // waits for the promise returned by fetch to resolve to the response object
        const res = await fetch(url, { method, headers: addHeaders(headers), body });
        return validateResponse(res);

    }

    /* Quiz 11 */
    // Get the high scores from the server API.
    // Returns a promise which resolves with the array of score objects.
    function get_high_scores() {
        /* Quiz 12 */
        return _fetchJSON("GET", "/high_scores/");
    }

    /* Quiz 13 */
    // Store a new high score on the server. Expects a score object. 
    // Returns a promise which resolves with the score object augmented by its database id.
    function save_high_score(score) {
        /* Quiz 14 */
        return _fetchJSON("POST", "/high_scores/", score)
    }

    /* Task 6 */
    function getChallenges() {
        return _fetchJSON("GET", "/games/typing/challenges");
    }

    /* Task 8 */
    function getChallenge(id) {
        return _fetchJSON("GET", "/games/typing/challenges/" + id);
    }

    /* Task 7 */
    function createChallenge(form_data) {
        return _fetchJSON("POST", "/games/typing/challenges/", form_data);
    }

    /* Task 8 */
    function updateChallenge(id, form_data) {
        return _fetchJSON("PUT", "/games/typing/challenges/" + id, form_data);
    }

    /* Task 9 */
    function deleteChallenge(id) {
        return _fetchJSON("DELETE", "/games/typing/challenges/" + id);
    }

    /* Task 10 */
    function getRandomChallenge() {
        return _fetchJSON("GET", "/games/typing/challenges/random");
    }

    /* Quiz 15 */
    // Define the public methods of the api object
    return {
        get_high_scores,
        save_high_score,
        getChallenges,
        getChallenge,
        createChallenge,
        updateChallenge,
        deleteChallenge,
        getRandomChallenge
    }

}(); /* Quiz 16 */ // () invokes the function directly to create the api object