function fibonacciGenerator (n) {
    var output = [];
    var total;
    if(n === 1 ){
        output=[0];
    }
    else if(n === 2){
        output=[0,1];
    }

    else {
        output = [0,1];
        for(var i=0; i<n-2; i++){
        total = output[i]+output[i+1];
        output.push(total);
        }
    }
    return output;

}

