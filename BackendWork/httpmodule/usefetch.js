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
                ${
                    jsonData.map(ele =>{
                        return(
                            `<div style="border:2px solid black">
                            <div style="text-align:center"><h5>${ele.id}</h5></div>
                            <div style="text-align:center"><img src=${ele.image} height= 100px width=100px /></div>
                            <div style="text-align:center"><h4>${ele.category}</h4></div>
                            <div style="text-align:center"><p>${ele.description}</p></div>
                            <div style="text-align:center"><b>Rs. ${ele.price}</b></div>
                            </div>`
                        )
                    })
                }
            </div>
        </body>
    </html>
    `
    res.end(htmlTemplate);
})

server.listen(PORT, ()=>{
    console.log("Server is running on ",PORT);
})