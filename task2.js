alert('Ровно одно из чисел нечетное');
let DigitOne = prompt('Первое число:');
let DigitTwo = prompt('Второе число:');
DigitOne = Number(DigitOne);
DigitTwo = Number(DigitTwo);
let Result = DigitOne + DigitTwo;
if (DigitOne == DigitTwo) {
    DigitOne = 0;
    DigitTwo = 0;
} else {
    DigitOne = Result;
    DigitOne = Result;
}
alert('A = '+DigitOne+'   B = '+DigitTwo)