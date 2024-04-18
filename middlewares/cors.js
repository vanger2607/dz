function cors(req, res, next) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', 'localhost:3000');
    next();
} 
