const formatTimeUnit = (digit) => {
    return digit < 10 ? '0' + digit : digit;
};

export default formatTimeUnit;