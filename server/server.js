// import http {createServer} from 'http';
import {readFileSync} from 'fs';
import dotenv from 'dotenv';
import { createServer } from 'http';

// environment init
dotenv.config();
let PORT = process.env.SERVER_PORT;

//data manage
let student_json = readFileSync('./data/student.json', )
let student_obj = JSON.parse(student_json) 






 
 
createServer( (req, res) => {

    if(req.url == '/api/students' && req.method == 'GET'){
        res.writeHead('200', {"Content-Type" : 'application/json' });
        res.end(student_json)
    }if(req.url.match(/\/api\/students\/[0-9]{1,}/)  && req.method == 'GET'){

        let urlToArry = req.url.split('/')
        let urlRevarse = urlToArry.reverse();
        let id = urlRevarse[0]

        

        res.writeHead('200', {"Content-Type" : 'application/json' });
        res.end(student_json)
    }else{
        res.writeHead('200', {"Content-Type" : 'application/json' });
        res.end(JSON.stringify({
            error_mes : "Invlide Route"
        }))
    }


}).listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})    
console.log(PORT);    