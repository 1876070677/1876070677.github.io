function printTime() {
    var callender = document.getElementById("date");
    var clock = document.getElementById("now");
    var today = new Date();

    var slash = '<span style = "color:#EAEAEA;"> / </span>'
    var clone = '<span style = "color:#EAEAEA;"> : </span>'

    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    var day = today.getDay();

    var currentHours = addZero(today.getHours(), 2);
    var currentMinutes = addZero(today.getMinutes(), 2);
    var currentSeconds = addZero(today.getSeconds(), 2);

    if (currentSeconds >= 50) {
        currentSeconds = '<span style = "color:#F15F5F;">' + currentSeconds + '</span>'
    }

    callender.innerHTML = year + slash + month + slash + date;
    clock.innerHTML = currentHours + clone + currentMinutes + clone + currentSeconds;

    setInterval("printTime()", 1000);
}

function addZero(num, digit) {
    var zero = '';
    time = num.toString();
    if (time.length < digit) {
        zero = '0';
    }

    return zero + num;
}

function mvMain() {
    document.getElementsByClassName("startWindow")[0].style.display = 'none';
    document.getElementsByClassName("main_Frame")[0].style.display = 'block';
}