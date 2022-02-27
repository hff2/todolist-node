const headers = require("./headers")

function errorHandler(res) {
    res.writeHead(400, headers)
    res.write(JSON.stringify({
        "status": "false",
        "data": "欄位未填寫正確，或無此 todo id",
    }));
    res.end();
}

module.exports = errorHandler;