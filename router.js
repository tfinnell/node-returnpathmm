function route(handle, path, res) {
  console.log('about to route a request for ' + path);
  if (typeof handle[pathname] === 'function') {
    handle[path](res);
  } else {
    console.log('no request handler for ' + path);
    response.writeHead(404, {"content-type": "text/plain"});
    response.write("404 not found");
    response.end();
  }
}

exports.route = route
