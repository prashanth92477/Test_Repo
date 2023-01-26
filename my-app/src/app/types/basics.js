"use strict";
exports.__esModule = true;
var constants_1 = require("../types/constants");
function calculatePayout(song) {
    return song.numStream * 10;
}
function printSong(song) {
    return "".concat(song.credits.producer).concat(song.credits.writer);
}
// Readonly Properties
// function TestUser(usr:User){
//   usr.id="12333"
// }
// optional properties
function opt(opt) {
    console.log(opt.id, opt.username);
}
var earning = calculatePayout(constants_1.mycustomtype);
console.log(earning);
console.log(printSong(constants_1.mycustomtype));
// dispaly optioal value
opt(constants_1.optional);
