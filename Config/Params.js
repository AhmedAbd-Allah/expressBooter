module.exports = {
    'post /register': {
        'body': {
            'userName': true,
            'password': true,
            'email': true,
            'mobileNumber': true,
        },
    },
    'post /login': {
        'body': {
            'userName': true,
            'password': true,
        }
    }
}