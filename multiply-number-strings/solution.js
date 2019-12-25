function multiply(a, b)
{
  trimZeroes = (r) => { while(r[0] == 0 && r.length !== 1) r.shift(); return r }
  [a, b] = [trimZeroes(a.split('')).reverse(), trimZeroes(b.split('')).reverse()];
  let output = [];
  for(let i=0; i<a.length; i++){
    if(a[i] != 0){
      let carryOver = 0;
      for(let z=0; z<b.length; z++){
        if(output[i+z] === undefined) output[i+z] = 0;
        output[i+z] += Number(a[i]) * Number(b[z]) + carryOver;
        carryOver = (output[i+z] - output[i+z] % 10)/10;
        output[i+z] %= 10;
      }
      output.push(...String(carryOver).split('').map(a=>Number(a)));
    } else if(output[i] === undefined){
      output[i] = 0;
    }
  }
  return trimZeroes(output.reverse()).join('');
}