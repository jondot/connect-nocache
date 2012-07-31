function connect_nocache() {
  return function (req, res, next) { 
    if (req.query.nocache === '1'){
      set_headers(res);

      res.on('header', function(header){
        set_headers(res);
      });
    }
    next();
  }
  function set_headers(res){
    res.header('Cache-Control', 'private, max-age=0');
    res.header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
    res.header('Pragma', 'no-cache');
  }
}

module.exports = connect_nocache

