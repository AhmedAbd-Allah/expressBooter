
module.exports = {
    validateToken: function(token){
        return token.userId && token.isActive
    }
}