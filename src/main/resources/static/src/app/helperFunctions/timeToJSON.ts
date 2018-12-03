export function timeToJSON(time) {
    console.log('function', time);
    //var hour = parseInt(time.substring(0, 2));
    var hour = time.substring(0, 2);
    var minute;
    if (hour[1] == ':') {
        hour = '0' + hour[0];
        hour = parseInt(hour);
        minute = time.substring(2, 4);
        minute = parseInt(minute);
        console.log('1 if minute', minute);
        if (minute[3] == ':') {
            minute = '0' + minute[0];
            minute = parseInt(minute);
            console.log('2 if minute', minute);

        }
    } else if (time.substring(3, 4)[1] == ':') {
        minute = '0' + time.substring(3, 4)[0];
        minute = parseInt(minute);
        console.log('else if minute', minute);

    } else {
        minute = parseInt(time.substring(3, 5));
        console.log('else minute', minute);

        hour = parseInt(hour);
    }
    var second = 0;
    var jsontime = {
        hour: hour,
        minute: minute,
        second: second
    }

    console.log(jsontime);
    return jsontime;
}