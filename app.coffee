http = require("http")

http.createServer((request, response) ->
  console.log request
  response.writeHead 200,
    "Content-Type": "application/json"

).listen 1337, "127.0.0.1"
console.log "Server running at http://127.0.0.1:1337/"