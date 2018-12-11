'use strict';
exports.__esModule = true;
var md5_typescript_1 = require("md5-typescript");
var block = /** @class */ (function () {
    function block() {
    }
    block.prototype.Block = function (data, previousHash) {
        this.data = data;
        this.previousHash = previousHash;
        this.timeStamp = new Date().getTime;
    };
    return block;
}());
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.prototype.applySha256 = function (input) {
        //Applies Sha256 to a string and returns the result.
        var md5Stream = new md5_typescript_1.Md5();
        //md5Stream.end(input);
        //console.log(md5Stream.read().toString('hex'));  
        return md5_typescript_1.Md5.init(input);
    };
    return StringUtil;
}());
var newHash = new StringUtil;
console.log(newHash.applySha256('42'));
