const axios = require('axios');

function getUsuarios() {
    return axios
        .get('http://google.com')
        .then(res => res.data)
        .catch(err => 'error');
}

module.exports = {getUsuarios};
