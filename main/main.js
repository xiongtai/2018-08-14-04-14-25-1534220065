const numbers = [
    ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'],
    ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'],
    ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'],
  ]

module.exports = function main(number) {
    var lcdNumber = [[], [], []]
    for (var num of number) {
        lcdNumber[0].push(numbers[0][num])
        lcdNumber[1].push(numbers[1][num])
        lcdNumber[2].push(numbers[2][num])
    }

    return lcdNumber.map(row => row.join(' ') + '\n').join('');
};