const http = require('http');
const fs = require('fs').promises;
const port = 7070;
const server = http.createServer((req, res) => {
    // res.end("Welcome to Node Server");
    if(req.url == "/register" && req.method == "POST"){
        let body = "";
        let arr = [];
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', async () => {
            const {name,email,password} = JSON.parse(body);
            console.log(name);
            const fsdata = await fs.readFile('student.json', {encoding:'utf-8'});
            arr = JSON.parse(fsdata);
            console.log(arr);
            const result = arr.find(ele => ele.email == email);
            if(result){
                res.setHeader('Content-Type','application/json');
                return res.end(JSON.stringify({"message":"This email is already registered with us, please try another email id"}));
            }
            else{
                arr.push({name,email,password});
                await fs.writeFile('student.json', JSON.stringify(arr,null,2));
                res.end(JSON.stringify({"message":"/register API hit successfully"}));
            }
            
        })
    }

    if(req.url == "/login" && req.method == "POST"){
        let body = "";
        let arr = [];
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', async () => {
            const {email,password} = JSON.parse(body);
            const fsdata = await fs.readFile('student.json', {encoding:'utf-8'});
            arr = JSON.parse(fsdata);
            console.log(arr);
            const result = arr.find(ele => ele.email == email && ele.password == password);
            if(result){
                res.setHeader('Content-Type','application/json');
                res.end(JSON.stringify({"message":"Login Successful"}));
            }
            else{
                res.setHeader('Content-Type','application/json');
                res.end(JSON.stringify({"message":"Invalid Credentials"}));
            }
        })
    }
})


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})