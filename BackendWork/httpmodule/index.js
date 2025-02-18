const http=require('http');
const PORT=2524;
const server=http.createServer((req,res)=>{
    console.log("Inside the server body");
    if (req.url=='/' && req.method=="GET"){
    res.setHeader('Content-Type',"text/html");
    //console.log(Object.keys(req));
    //console.log(req.url+" "+req.method);
    res.write("<div style='background-color:coral'><h2 style='color:red'>Welcome to the Node server</h2></div>");
    res.end("<h2>Server has ended</h2>");}
    // if(req.url=='/show' && req.method=='GET'){
    //     res.setHeader('Content-Type','application/json');
    //     res.end(JSON.stringify({
    //         msg:"Successfully hit the API"
    //     }))
    // }
    if(req.url=='/show' && req.method=='POST'){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({
            msg:"Successfully hit the post API @/show"
        }))
    }
})
server.listen(PORT,()=>{
    console.log("Server is running on "+PORT);
})
