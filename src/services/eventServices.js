// Constants
import { request } from "../constants/baseConstants";
import ApiUrl, { API_KEY } from "../constants/apiConstants";


export function listEvent(page, keyword, onComplete) {
    var url = ApiUrl.eventList;
    var params = { "apikey": API_KEY, "page": page };
    if (keyword != "") {
        params.keyword = keyword;
    }

    return request
        .get(url)
        .query(params)
        .accept("application/json")
        .end((error, response) => {
            onComplete(response);
        });
}


export function retrieveEvent(id, onComplete) {
    var url = ApiUrl.eventList + id;
    var params = { "apikey": API_KEY};

    return request
        .get(url)
        .query(params)
        .accept("application/json")
        .end((error, response) => {
            onComplete(response);
        });
}
