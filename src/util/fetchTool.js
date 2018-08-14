/**
 * Created by GUOYAN on 2018-8-14.
 */
import 'whatwg-fetch'
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}
function parseJSON(response) {
    return response.json();
}
export default function request(url, options) {
    let opt = options||{};
    return fetch(url, {credentials: 'include', ...opt})
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ( data ))
        .catch((err) => ( err ));
}