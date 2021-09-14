export const useDistanceCalc = (value, distArr) => {
    if (distArr.length === 0 || !distArr.includes(value)) {
        distArr.push(value);
    } else {
        distArr = distArr.filter((item) => item !== value);
    }

    var searchParams = new URLSearchParams(window.location.search);

    if (distArr.length > 0) {
        searchParams.set('distance', distArr.join('|'));
    } else {
        searchParams.delete('distance');
    }

    window.location.search = searchParams.toString();
};
