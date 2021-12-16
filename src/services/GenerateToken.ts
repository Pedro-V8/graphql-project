import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import process from 'process';

export default function generateToken({}: any , id: any){
    const token = sign({} , "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYzODQ5MzY3MiwiaWF0IjoxNjM4NDkzNjcyfQ.KZsl-0rmVPDHvKsFBivB3tQnpgWl1dMc3JVBMV5fw7E", {
        subject: id
    });
    
    return token;
}