module.exports.list = function(req, res){

    const fs = require('fs');
    let products;

    fs.readFile('../products.json' , function(err, data){
        if (err){
            console.error(err);
        } else {
            products = JSON.parse(data);
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({products: products}));
        }
    });
}

module.exports.view = function(req, res){

    const fs = require('fs');
    let products;
    let params = req.params;

    fs.readFile('../products.json' , function(err, data){
        if (err){
            console.error(err);
        } else {
            products = JSON.parse(data);
            let product;

            for (let i=0; i < products.length; i++){
                if (products[i]._id == params.id){
                    product = products[i];
                }
            }
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(JSON.stringify({product: product}));
        }
    });
}