function getValue() {

    let a = document.getElementById('name').value;
    let b = document.getElementById('year').value;
    let din = new Date();
    let CurrentYear = din.getFullYear();
    if (b > 1915 && b < CurrentYear) {
        if (a.length > 0 && b.length > 0) {
            let yourAge = CurrentYear - b;
            let msg = document.getElementById('msg').style.display = 'flex';
            let style = document.getElementById('error').style.display = 'none';
            let greet = document.getElementById('greet').innerHTML = 'Hello ! ';
            let greetName = document.getElementById('Greet-text').innerHTML = `${a.toUpperCase()} you are ${yourAge} years old.`;
            console.log(yourAge);
        }
    } else {
        let msg = document.getElementById('msg').style.display = 'none';
        let style = document.getElementById('error').style.display = 'flex';
        let Error = document.getElementById('error').innerHTML = 'PLEASE ENTER THE VALID INPUT';
        console.log("please enter valid input")
    }


}