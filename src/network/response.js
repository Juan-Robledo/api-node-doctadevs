const statusMessage = {
    '200': 'Ok',
    '201': 'Creado',
    '400': 'Formato invalido',
    '500': 'Error de servidor'
}

exports.success = function (req , res, message, status = 200){
    let statusCode = status;
    let statusMessage = message;

    if(!message){
        statusMessage = statusMessage[status];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function (req, res, message, status, details){
    console.error('[response error]' + details);

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}