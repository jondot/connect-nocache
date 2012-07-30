
function connect_nocache() {
  return function (req, res, next) { 
    if (req.query.nocache === 'true'){
      res.header('no-cache', 0);
    }
    next();
  }
}



module.exports = connect_nocache




