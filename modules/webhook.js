const axios = require('axios');

const { webhookurl } = require('./../auth/keys.json');

function sendwebhook(message) {
    axios.post(webhookurl, { content: message })
        .then(response => {
            console.log('Message sent successfully:', response.data);
        })
        .catch(error => {
            if (error.response) {
                console.error('Error response from server:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
            console.error('Error:', error.config);
        });
}

module.exports = { sendwebhook }