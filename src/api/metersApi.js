const getServerApi = 'http://localhost/getMeters.php';
const saveServerApi = 'http://localhost/createMeters2.php';

class MetersApi {

    static getMeters() {
        return fetch(getServerApi + "?token=" + localStorage.getItem('token'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }

    static createMeters(meters) {
    console.log("In meters api", meters);
        return fetch(saveServerApi + "?token=" + localStorage.getItem('token') +
            "&hot_w=" + meters.hot_w +
            "&cold_w=" + meters.cold_w +
            "&gas=" + meters.gas +
            "&month=" + 9 +
            "&year=" + 2006, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }

}

export default MetersApi;