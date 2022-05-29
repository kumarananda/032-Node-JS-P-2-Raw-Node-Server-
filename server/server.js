// import http {createServer} from 'http';
import {readFileSync} from 'fs';
import dotenv from 'dotenv';
import { createServer } from 'http';

// environment init
dotenv.config();
let PORT = process.env.SERVER_PORT;

//data manage
let student_json = readFileSync('./data/student.json' )
let student_obj = JSON.parse(student_json) 






 
 
createServer( (req, res) => {

    if(req.url == '/api/students' && req.method == 'GET'){

        res.writeHead('200', {"Content-Type" : 'application/json' });
        res.end(student_json)
        
    }else if(req.url.match(/\/api\/students\/[0-9]{1,}/)  && req.method == 'GET'){

        let urlToArry = req.url.split('/')
        let urlRevarse = urlToArry.reverse();
        let id = urlRevarse[0]

        if(student_obj.find(stu => stu.id == id)){
            res.writeHead('200', {"Content-Type" : 'application/json' });
            res.end(JSON.stringify(student_obj.find(stu => stu.id == id)))
        }else{
            res.writeHead('200', {"Content-Type" : 'application/json' });
            res.end(JSON.stringify({
                message : "Student data not found"
            }))
        }

    }else if(req.url == '/api/students' && req.method == 'POST'){

        // request data handle 
        let data = '';
        req.on('data', (chunk => {
            data += chunk.toString()
            // console.log(data);
        }));
        req.on('end', () => {
            let chunkObject = JSON.parse(data)
            // console.log(chunkObject);
            // student_obj.push({
            //     id : "",
            //     name : 
            // })
        });

        res.writeHead('200', {"Content-Type" : 'application/json' });
            res.end(JSON.stringify({
                message : "Post method is OK"
            }))
        
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