const getServerApi = 'http://localhost/getMeters.php';
const createServerApi = 'http://localhost/createMeters.php';
const updateServerApi = 'http://localhost/updateMeters.php';
const getAdministrativeServerApi = 'http://localhost/getMetersAdministrative.php';

class MetersApi {

    static getMeters() {
        return fetch(getServerApi + "?token=" + localStorage.getItem('token') +
            "&startMonth=" + localStorage.getItem('startMonth') +
            "&startYear=" + localStorage.getItem('startYear') +
            "&endMonth=" + localStorage.getItem('endMonth') +
            "&endYear=" + localStorage.getItem('endYear'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }

    static createMeters(meters) {
        return fetch(createServerApi + "?token=" + localStorage.getItem('token') +
            "&energy=" + meters.energy +
            "&hot_w=" + meters.hot_w +
            "&cold_w=" + meters.cold_w +
            "&gas=" + meters.gas +
            "&month=" + meters.month +
            "&year=" + meters.year +
            "&startMonth=" + localStorage.getItem('startMonth') +
            "&startYear=" + localStorage.getItem('startYear') +
            "&endMonth=" + localStorage.getItem('endMonth') +
            "&endYear=" + localStorage.getItem('endYear'), {
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
                "&field_value=" + fieldValue +
                "&startMonth=" + localStorage.getItem('startMonth') +
                "&startYear=" + localStorage.getItem('startYear') +
                "&endMonth=" + localStorage.getItem('endMonth') +
                "&endYear=" + localStorage.getItem('endYear'), {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    "content-type": "application/x-www-form-urlencoded"
                }
            });
        }

    static getAdministrativeMeters() {
            return fetch(getAdministrativeServerApi + "?token=" + localStorage.getItem('token') +
                "&administrativeMonth=" + localStorage.getItem('administrativeMonth') +
                "&administrativeYear=" + localStorage.getItem('administrativeYear'), {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    "content-type": "application/x-www-form-urlencoded"
                }
            });
        }

}

export default MetersApi;