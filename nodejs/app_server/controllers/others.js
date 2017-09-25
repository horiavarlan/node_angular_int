module.exports.contact = function(req, res){
    switch(req.method){
        case 'GET':
        default:
            res.render('others/contact', {
                title: "Contact"
            });
        break;
    }
    
}