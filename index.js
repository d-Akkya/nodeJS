const http = require("http")
const fs = require("fs")
const path = require("path")
require("dotenv").config()

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
			// STATIC ROUTING

	if (req.url === "/") {
		fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
			if (err) throw err;
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(data)
		})
	}

	else if (req.url === "/about") {
		fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
			if (err) throw err;
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(data)
		})
	}

	else if (req.url === "/contact") {
		fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
			if (err) throw err;
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(data)
		})
	}

server.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`))