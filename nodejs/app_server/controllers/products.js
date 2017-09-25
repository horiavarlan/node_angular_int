module.exports.list = function(req, res){
    try{
        let http = require('http');
        http.get('http://localhost:3000/api/products', function(response){
            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk });
            response.on('end', () =>{
                try{
                    const parsedResponse = JSON.parse(rawData);
                    res.render('products/list', 
                        {
                            title: "index",
                            products: parsedResponse.products
                        }
                    );
                } catch(e){
                    console.error(e.message);
                }
            });
            
        });
    } catch (e){
        console.log(e);
    }
}
module.exports.view = function(req, res){
    let http = require('http');
    let params = req.params;
    let requestUrl = 'http://localhost:3000/api/products/'+ params.id;
    http.get(requestUrl, function(response){
        let rawData = '';
        response.on('data', (chunk) => {
            rawData += chunk;
        });
        response.on('end', () => {
            try{
                const parsedResponse = JSON.parse(rawData);
                res.render('products/view', 
                    {
                        title: "index",
                        product: parsedResponse.product
                    }
                );
            } catch(e){
                console.error(e.message);
            }
        });
    });
}
