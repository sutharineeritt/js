function past(h, m, s){
    let milli = h*3600000+m*60000+s*1000
    return milli
}

console.log(past(1,1,0))