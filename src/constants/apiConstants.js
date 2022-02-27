// Api
export const URL = "https://app.ticketmaster.com";
export const API_URL = URL + "/discovery/v2";
export const API_KEY = "3er65DQ0rElbfzXfAJ1xlbzVI0k1OkNf";

function url(path, query) {
    return API_URL + path;
}

export default {
    eventList: url("/events/"),
};
