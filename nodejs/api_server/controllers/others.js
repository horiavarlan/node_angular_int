module.exports.contact = function(req, res){
    try{
        if (req.method === 'POST'){
        console.log(req.body);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(
            {
                success: true,
                message: "Form submitted successfully."
            }));
    }
    } catch (e){
        console.error(e.message);
    }
    
}