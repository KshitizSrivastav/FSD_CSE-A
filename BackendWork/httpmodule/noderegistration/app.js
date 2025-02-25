const http=require ('http');
const fs=require('fs').promises;
const PORT=3001;
const server=http.createServer((req,res)=>{
    //res.end("Server successfully created");
    if (req.url=='/register' && req.method=='POST')
    {
        let body='';
        let arr=[];
        req.on('data',chunk=>{
            body+=chunk;
        })

        req.on('end',async ()=>{
            const {name,email,password}=JSON.parse(body);
            console.log(name);
            await fs.writeFile('student.json',JSON.stringify({name,email,password}));
            //console.log(body);
        })
        res.end(JSON.stringify({"message":"/register api hit successfully!"}))
    }
})
server.listen(PORT,()=>{
    console.log("Server is running on "+PORT);
})