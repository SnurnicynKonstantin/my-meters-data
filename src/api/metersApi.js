const serverApi = 'http://localhost/getMeters.php';

class MetersApi {

    static getMeters() {
        return fetch(serverApi + "?token=" + localStorage.getItem('token'), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }

}

export default MetersApi;