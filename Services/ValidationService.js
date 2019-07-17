module.exports = {
    alphaNumeric: function (value) {
        value = String(value)
        let alphaNumericRegex = /^[a-z0-9]+$/i
        return alphaNumericRegex.test(value)
    },
    alphaNumericSpecialChar: function (value) {
        value = String(value)
        let alphaNumericSpecialCharRegex = /^[ A-Za-z0-9_@.\/#&+\-()*^%$!~?><;:]+$/
        return alphaNumericSpecialCharRegex.test(value)
    },
    email: function (value) {
        value = String(value)
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return emailRegex.test(value)
    },
    numeric: function (value) {
        value = Number(value)    
        let numericRegex = /^\d+$/
        return numericRegex.test(value)
    }
}