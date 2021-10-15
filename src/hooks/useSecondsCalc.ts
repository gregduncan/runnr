export const useSecondsCalc = (timeStamp: string) => {
    const stamp = timeStamp.toString().split('.');
    const mins = parseInt(stamp[0]);
    let seconds = mins * 60;
    if(stamp[1] !== '00') {
        seconds += parseInt(stamp[1]);
    }
    return seconds;
};
