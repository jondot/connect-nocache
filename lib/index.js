
function connect_cdncache(maxage, smaxage) {
  return function (req, res, next) {
    res.header('Cache-Control', 'public, max-age='+maxage+', s-maxage='+smaxage);
    next();
  }
}

module.exports = connect_cdncache




