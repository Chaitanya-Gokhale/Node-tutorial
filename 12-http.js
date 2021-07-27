const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('hello, welcome to the home page')
    }
    if (req.url === '/about'){
        res.end('this is something about our history')
    }
    res.end(`
    <h1> Opps! </h1>
    
    <p> we can't seem to find the page you are looking for </p>
    
    <a href = "/" > Back Home </a>`
    )
}
)
server.listen(5000)