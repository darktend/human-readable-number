module.exports = function toReadable(number) {
    const nums = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred"
    }
    if (number < 21 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90 || number == 100) {
        return nums[number];
    } else if (number < 100) {
        let tens = Math.floor(number / 10) * 10;
        let ones = number - Math.floor(number / 10) * 10;
        return nums[tens] + " " + nums[ones]
    } else if (number >= 100 && number < 1000) {
        let hund = Math.floor(number / 100);
        let wt = number - hund * 100;

        if (wt == 0) {
            return nums[hund] + ' hundred'

        } else if (wt < 21 || wt == 30 || wt == 40 || wt == 50 || wt == 60 || wt == 70 || wt == 80 || wt == 90 || wt == 100) {
            return nums[hund] + ' hundred ' + nums[wt]
        } else {
            let tens = Math.floor((number - hund * 100) / 10) * 10;
            let ones = number - Math.floor(number / 10) * 10;
            return nums[hund] + ' hundred ' + nums[tens] + ' ' + nums[ones]
        }
    }
}