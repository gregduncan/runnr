export const useSecondsCalc = (timeStamp: string | number): number => {
  const stamp = String(timeStamp).split('.');
  const mins = parseInt(stamp[0]);
  let seconds = mins * 60;
  if (stamp[1] && stamp[1] !== '00') {
    seconds += parseInt(stamp[1]);
  }
  return seconds;
};
