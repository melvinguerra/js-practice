function pow(x, n){
    let ans = x;

    for(let i = 1; i < n; i++){
        ans = ans * x;
    }
    
    alert(ans);
}

let x = prompt("x?");
let n = prompt("n");

if(n < 1){
    alert("n is not a positive integer.");
} else {
    pow(x, n);
}


