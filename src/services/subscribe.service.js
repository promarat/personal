import axios from "axios";

class SubscribeService {
    subscribe() {
        return axios
            .post(API_URL)
            .then(response => {
                console.log(response);
            });
    }

}

export default new SubscribeService();