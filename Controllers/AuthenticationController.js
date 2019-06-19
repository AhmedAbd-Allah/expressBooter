module.exports = {
    auth: function(req,res){
        res.send("ussssseeeeeeer")
    },
    in: function(req,res){
        res.send("innnnnnnnnnnn")
    },
    authPost: function(req,res){
        res.send("poossst")
    },

    midlle: function(req,res,next){
        console.log("apollo")
        next()
    }
}