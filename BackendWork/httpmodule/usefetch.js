const http = require('http');
const PORT = 2526;
const server = http.createServer(async (req,res)=>{
    res.setHeader('Content-Type','text/html');
    const data = await fetch("https://fakestoreapi.com/products");
    jsonData = await data.json();
    console.log(jsonData[0].category);
    const htmlTemplate=`
    <html>
        <head><title>Online Clothes Shop</title>
        <style>

        </style>
        </head>
        <body>
            <div>
                <img src=${jsonData[0].image} height = 200px width = 200px>
                ${jsonData[0].category}
            </div>
        </body>
    </html>
    `
    res.end(htmlTemplate);
})

server.listen(PORT, ()=>{
    console.log("Server is running on ",PORT);
})