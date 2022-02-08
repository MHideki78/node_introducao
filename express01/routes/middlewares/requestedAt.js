function requestedAt(req, res, next) {
  const data = new Date();
  const urlAtual = req.url;

  console.log(`${urlAtual} -- ${data.toLocaleString()}`);
  next();
}

module.exports = { requestedAt };
