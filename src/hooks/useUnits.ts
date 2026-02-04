export const useUnits = (query: URLSearchParams) => {
  const unit = query.get('unit') || 'miles';
  const isMiles = unit === 'miles';
  const distance = query.get('distance');
  const distArr = distance ? distance : '';

  return {
    unit,
    isMiles,
    distance,
    distArr,
  };
};
