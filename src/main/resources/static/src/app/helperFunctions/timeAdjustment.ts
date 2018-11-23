export function timeAdjustment(time) {
    let hour = time.hour;
    let minute = time.minute;
    return hour + ':' + minute + ':00';
}