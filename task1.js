alert('Ровно одно из чисел нечетное');
let DigitOne = prompt('Первое число:');
let DigitTwo = prompt('Второе число:');
DigitOne = Number(DigitOne);
DigitTwo = Number(DigitTwo);
let Result = DigitOne + DigitTwo;
if (Result % 2 == 0) {
    alert ('A = '+DigitOne+'   B = '+DigitTwo+'    Утверждение неверно');} else{
    alert ('A = '+DigitOne+'   B = '+DigitTwo+'    Утверждение верно');
}