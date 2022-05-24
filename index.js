var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
let a  = text.split("");
 let ar =[];
 let packets = [];

function hex2dec (data){
	if(ar.length >= 4){ar = [];}

  let rem = data % 2;
  let quotient = Math.floor(data/2);
  ar.unshift(rem);
  if(quotient === 1 || quotient === 0){
    ar.unshift(quotient);
    let c = ar.length;
    for(let i = c; c < 4; c++){
      ar.unshift(0)
    }
  }
  else{
    hex2dec(quotient)
  }

  return ar.join('');
  }

function dataArr(nums){
let dec, hex;
  for(let num of nums ){
  let aa = parseInt(num);
    if (!isNaN(aa)){
    hex = hex2dec(num);
    packets.push(hex);
    }
    else{
      let x = Number(alp2num(num));      
       hex = hex2dec(x);
       packets.push(hex);
    }
  }
  return packets.join('');
}

function alp2num(d){
switch(d){
case "A": return 10;
case "B": return 11;
case "C": return 12;
case "D": return 13;
case "E": return 14;
case "F": return 15;
}
}

function bin2dec(data){ 
let sum = 0;
for(let s in data){
let count = data.length-1;
let exponent = count - s;
/* console.log(exponent); */
 sum = sum + ( data[s ] * Math.pow(2, exponent));
 
}
return sum;
}

let binaryPacket = dataArr(a);
console.log(binaryPacket);