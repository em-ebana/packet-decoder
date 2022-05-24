let arr = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
let ar2 = "8006F45291200"
let a  = ar2.split("");
/* for(let x of a ){
let aa = parseInt(x);
if(!isNaN(aa)){
console.log(" a number: "+x)
}
}
console.log(a) */
 let ar =[];

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
    dec = num;
    hex = hex2dec(num);
        console.log(`${dec} = ${hex}`);
    }
    else{
      let x = Number(alp2num(num));
      dec = x;
       hex = hex2dec(x);
      console.log(dec+' = ' + hex);
    }
  }
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

dataArr(a);



///text codes
let pointer = 1
while (pointer){}



let packet = "110100101111111000101000";
//create array for v
let vArray, tArray, finalResult = []
//create array for T
//create array for final packet decoded result
let bitStart = 0;
let bitEnd = 3;
let zeroBitOperator = 15;
let oneBitOperator = 11;
let litarr = [];
let packetEnd = 1
//while loop starts here....
while(packetEnd){
  let vBin = packet.substring(bitStart, bitEnd);
  // CONVERT V TO DECIMAL AND PUSH INTO V ARRAY
  let vDec: = bin2dec(vBin);
  bitStart = bitEnd;
  bitEnd += bitEnd;

  let T = packet.substring(bitStart, bitEnd);
  //CONVERT T TO DECIMAL AND PUSH INTO T ARRAY
  let tDecimal = bin2dec(T);
}



if(tDecimal != 4){//an operator
let I = Number(packet.charAt(bitEnd));
  if(I === 1){
  bitStart = bitEnd +1;
  bitEnd = bitStart + oneBitOperator;
  let L = packet.substring(bitStart, bitEnd);
  let lcount = bin2dec(L);

  for(let i = 0; i<lcount; i++){
  bitStart = bitEnd;
  bitEnd += oneBitOperator;
  let result = packet.substring(bitStart , bitEnd);
  //convert result to decimal then push to array
  // call operator function based on value of T ON result
  // PUSH RESULT TO FINAL GLOBAL DECODED PACKET ARRAY
  console.log(`packet ${i}: ${result}`);

  }
  console.log("End of packet:")//return -1 END OF FUNCTION/SUB PACKET
  }
  else{
  bitStart = bitEnd +1;
  bitEnd = bitStart + zeroBitOperator;
  let L = packet.substring(bitStart, bitEnd);
  let lcount = bin2dec(L);

  let total = lcount;
  while(total > 0){
  bitStart = bitEnd;
  if(total < 15){
   bitEnd += total;
  }else{
   bitEnd += (zeroBitOperator+1);
  }
  let zeroresult = packet.substring(bitStart , bitEnd);
  console.log(`packet: ${zeroresult}`);
 console.log(bin2dec(zeroresult));

  total = total - zeroBitOperator;

  }//while block closing
  console.log("end packet");
  console.log(L);
  console.log(lcount);
  }//zero operator else

}//literal if separator

else
{
let lit = 5;
let litBitStart = bitEnd;
let litBitEnd = bitEnd + lit;//6
let count = 1;
let packGrp, literalGrp;
  while(count){
  packGrp = packet.substring(litBitStart, litBitEnd);
  let char = Number(packGrp.charAt(0));
  	if(char === 1){
  	literalGrp = packGrp.slice(1);
		litarr.push(literalGrp);
    count = 1;
  	}else{
    literalGrp = packGrp.slice(1);
  	litarr.push(literalGrp);
    count = 0;
    }
   litBitStart = litBitEnd;
   litBitEnd += lit;
  }



/* console.log(bitEnd); */
}//else close bracket


console.log(bin2dec(litarr.join("")));






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
