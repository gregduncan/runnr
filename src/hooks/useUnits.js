export const useUnits = (query) => {
    let unit = query.get('unit') || 'miles';
    let isMiles = unit === 'miles';
    let distance = query.get('distance');
    let distArr = distance ? distance.split('|') : [];

    return {
        unit: unit,
        isMiles: isMiles,
        distance: distance,
        distArr: distArr,
    };
};
