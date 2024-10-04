module.exports.gifts = function (req,res){
    return res.render('frequently',{
        title:'Brewtiful Gifts'
    })
}

module.exports.anytime = function (req,res){
    return res.render('anytime',{
        title:'Brewtiful Gifts | Anytime'
    })
}

module.exports.congrats = function (req,res){
    return res.render('frequently',{
        title:'Brewtiful Gifts | Congratulations'
    })
}

module.exports.thankyou = function (req,res){
    return res.render('frequently',{
        title:'Brewtiful Gifts | Thank You'
    })
}