function age_calc(dob) { 

    var diff_ms = Date.now() - dob.getTime();
    
    var age_dt = new Date(diff_ms); 

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function age() {
    document.getElementById("age_output").innerHTML = age_calc(new Date(2003, 5, 3));
    console.log(age_calc(new Date(2003, 5, 3)));
}