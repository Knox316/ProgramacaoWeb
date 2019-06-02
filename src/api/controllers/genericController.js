/**
 * Needs work
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} data 
 */
function sendResponse(req, res, data) {
    if (!data) { // no data to
        res.status(HttpStatus.NOT_FOUND).send("NOT FOUND");
    } else {
        // if(req.headers.accept == "application/json") {
        res.json(data);
        // } else {
        //     res.set('Content-Type', 'text/xml');
        //     console.dir(data);
        //     res.send(json2xml( { response: data }, { header: true }));
        // }      
    }
}

module.exports = {
    SendResponse: sendResponse
}
