function average(data)
{
    var sum = 0;
    for (i=0; i<data.length; i++) {
      sum = sum + data[i];
    }
    return (sum / data.length);
}

function variance(data)
{
    var ave = average(data);
    var varia = 0;
    for (i=0; i<data.length; i++) {
        varia = varia + Math.pow(data[i] - ave, 2);
    }
    return (varia / data.length);
}

function standard_deviation(data)
{
    var varia = variance(data);
    return Math.sqrt(varia);
}

data = [-3, 13, 12, -9, 51, -7];

console.log('standard_deviation %d', standard_deviation(data));
