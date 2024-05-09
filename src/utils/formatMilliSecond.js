
const formatMilliseconds = (unit) => {
    return unit < 10 ? '00' + unit : unit < 100 ? '0' + unit : unit;
};

export default formatMilliseconds;