import React from 'react';
import moment from 'moment';


export const Count = ({ items, isMiles }) => {
  const date = moment("1981-12-04");
  const arr = items.map(item => item.mins)

  for(let i = 0; i < arr.length; i++){
    const stamp = arr[i].toString().split('.')
    const mins = stamp[0];
    let seconds = !stamp[1] ? '00' : stamp[1];
    seconds =  seconds.length < 2 ? `${stamp[1]}0` : seconds;
    date.add(mins, 'm')
    date.add(seconds, 's')
 }
  return (
    <div>
      {items.length}
      {isMiles ? 'm' : 'km'} in {`${date.hours() > 0 ? date.format('HH:mm:ss') : date.format('mm:ss') }`}
    </div>
  );
}
