const serverApi = 'http://localhost/login.php';

class LoginApi {

    static login(user) {
        console.log("DATA", user);
        var request = serverApi + "?name=" + user.name + "&password=" + user.password
        console.log("DATA", request);

        return fetch(serverApi, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin:": '*'
            }
        });
    }

}

export default LoginApi;