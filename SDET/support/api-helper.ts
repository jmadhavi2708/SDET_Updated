var axios = require('axios');



export async function getRequest(getApiUrl) {

    try {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        const response = await axios({
            method: 'get',
            url: getApiUrl,
            headers: headers
        });

        return await response

    } catch (error) {

    }

}



