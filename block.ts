'use strict'
import {Md5} from "md5-typescript";

class block{

    public hash: string;
    public previousHash: string;
    private data: string;
    private timeStamp: any;

    public Block(data: string, previousHash: string){
        this.data = data;
        this.previousHash = previousHash
        this.timeStamp = new Date().getTime;

    }


}

class StringUtil {
    public applySha256(input: string){

            //Applies Sha256 to a string and returns the result.
      
            const md5Stream = new Md5();
            //md5Stream.end(input);
            //console.log(md5Stream.read().toString('hex'));  
            return Md5.init(input);

    }


}

const newHash = new StringUtil;
console.log(newHash.applySha256('42'));