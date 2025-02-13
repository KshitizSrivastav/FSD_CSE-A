const http=require('http');
const PORT=2524;
const server=http.createServer((req,res)=>{
    console.log("Inside the server body");
    res.setHeader('Content-Type',"text/html");
    res.write("<div style='background-color:coral'><h2 style='color:red'>Welcome to the Node server</h2></div>");
    res.end("<h2>Server has ended</h2>");
})
server.listen(PORT,()=>{
    console.log("Server is running on "+PORT);
})
