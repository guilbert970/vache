const userInfo = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text :(`${userInfo.nAme} , ${userInfo.campus}`),
    
    e : "oO",
    t : "U"
}));