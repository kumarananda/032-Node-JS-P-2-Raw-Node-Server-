// import http {createServer} from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
import { createServer } from 'http';

// environment init
dotenv.config();
let student_json = fs.readFileSync('./data/student.json', )
let student_obj = JSON.parse(student_json)

// let student_obj
let PORT = process.env.SERVER_PORT;

//data manage


 
createServer( (req, res) => {

    if(req.url == '/api/')

    res.writeHead('200', {"Content-Type" : 'application/json' });

    res.end(student_json)
}).listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})    
console.log(PORT);   