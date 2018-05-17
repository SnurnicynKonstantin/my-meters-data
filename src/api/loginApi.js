const serverApi = 'http://localhost/login.php';

class LoginApi {

    static login(user) {
        return fetch(serverApi + "?name=" + user.name + "&password=" + user.password, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }

}

export default LoginApi;