let a;
let b;
let c;
let delta;

document.querySelector("button").addEventListener("click", function(){
    a = document.querySelectorAll("input")[0].value;
    console.log(a);
    b = document.querySelectorAll("input")[1].value;
    console.log(b);
    c = document.querySelectorAll("input")[2].value;
    console.log(c);

    delta = b**2 - 4 * a * c;

    //console.log(delta);
    document.querySelector(".delta-answer").innerHTML = delta;

    if (delta >= 0){
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.querySelector(".x1-answer").innerHTML = x1;
        document.querySelector(".x2-answer").innerHTML = x2;
        console.log(x1);
        console.log(x2);
    }else{
        //console.log("Delta não possui raiz real");
        if(document.querySelector(".imaginario").checked){
            delta *= -1;
            let x1 = -b / (2 * a);
            let x2 = -b / (2 * a);
            delta = Math.sqrt(delta) / (2*a)
            document.querySelector(".x1-answer").innerHTML = `${x1} + ${delta}i`;
            document.querySelector(".x2-answer").innerHTML = `${x2} - ${delta}i`;
            //console.log(`${x1} + ${delta}i`);
            //console.log(`${x2} - ${delta}i`);
        }else{
            document.querySelector(".x1-answer").innerHTML = "Delta Negativo, somente possui número imaginário.";
            document.querySelector(".x2-answer").innerHTML = "Delta Negativo, somente possui número imaginário.";
            document.querySelector(".negative-text").removeAttribute("hidden");
        }
    }
});