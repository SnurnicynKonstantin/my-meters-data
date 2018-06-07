const getServerApi = 'http://localhost/getMeters.php';
const createServerApi = 'http://localhost/createMeters.php';
const updateServerApi = 'http://localhost/updateMeters.php';

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
        return fetch(createServerApi + "?token=" + localStorage.getItem('token') +
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

    static updateMeters(id, fieldName, fieldValue) {
            return fetch(updateServerApi + "?token=" + localStorage.getItem('token') +
                "&field_id=" + id +
                "&field_name=" + fieldName +
                "&field_value=" + fieldValue, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    "content-type": "application/x-www-form-urlencoded"
                }
            });
        }

}

export default MetersApi;