export const useURLSearchParams = (value: string, distArr: string[]) => {
  let newDistArr = [...distArr];

  if (newDistArr.length === 0 || !newDistArr.includes(value)) {
    newDistArr.push(value);
  } else {
    newDistArr = newDistArr.filter((item) => item !== value);
  }

  const searchParams = new URLSearchParams(window.location.search);

  if (newDistArr.length > 0) {
    searchParams.set('distance', newDistArr.join('|'));
  } else {
    searchParams.delete('distance');
  }

  window.location.search = searchParams.toString();
};
