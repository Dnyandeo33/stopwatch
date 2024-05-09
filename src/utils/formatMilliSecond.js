const formatMilliseconds = (digit) => {
    return digit < 10 ? '00' + digit : digit < 100 ? '0' + digit : digit;
};

export default formatMilliseconds;