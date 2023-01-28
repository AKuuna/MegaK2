/**
 * 1. Program to show full path of a file, catalogue, file name, its extension for : this/is/file/file.txt
 * 2. Program that takes an agrument to next file name. Safe way to show its path, that doesnt allow to /.../.../.../Windows/System32/Drive/etc/hosts/; ~/ME.jpg; C:\systeminfo; trying to save LPT1
 */

//1

const { join, basename, dirname, extname } = require('path');

const userPath ='D:\\MegaK\\MegaK2\\week2\\this\\is\\file\\file.txt;'

console.log('fullpath:', join(dirname(userPath), basename(userPath)));
console.log('filename:', basename(userPath));
console.log('dirname:', dirname(userPath));
console.log('extension:', extname(userPath));


