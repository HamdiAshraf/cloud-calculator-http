const http=require('http');
const url = require('url');
const port=3000;

const server=http.createServer((req,res)=>{
    
     
     const parsedUrl = url.parse(req.url, true);
     const queryData = parsedUrl.query;
     let a=parseInt(queryData.a)
     let b=parseInt(queryData.b)


     console.log(req.url);

    if(req.url==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h2>Home Page, Cloud Calculator using Http</h2>")
    }
    else if(parsedUrl.pathname==='/add'){
        res.end(`response=> ${a+b}`)
    }
    else if(parsedUrl.pathname==='/subtract'){
        res.end(`response=> ${a-b}`)
        
    }
    else if(parsedUrl.pathname==='/multiply'){
        res.end(`response=> ${a*b}`)
        
    }
    else if(parsedUrl.pathname==='/divide'){
        
        res.end(`response=> ${a/b}`)

    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.end('<h2>404, Page Not Found!</h2>')
    }
});



server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})