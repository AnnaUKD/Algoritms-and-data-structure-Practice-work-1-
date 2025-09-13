import randomInteger from 'random-int';
//Завдання 1
console.log('Завдання 1')
function generateArrayWithNumbers(length) {
    return new Array(length)
        .fill(0)
        .map(() => randomInteger(-100, 100));
}

const arrayOfNumbers = generateArrayWithNumbers(30);

arrayOfNumbers.forEach((number, index) => {
    console.log(`елемент ${index} значення ${number}`);
});
//Завдання 2
console.log('Завдання 2')
const arithmeticalMean = arrayOfNumbers.reduce((a, b) => a + b) / arrayOfNumbers.length;
console.log('Середнім арифметичним даного масива є ', arithmeticalMean)

console.log('Масивом чисел, які більші за середнє арифметичне є ', arrayOfNumbers.filter((number) => number > arithmeticalMean));

//Завдання 3
console.log('Завдання 3')
const arrayOfNumbers1 = generateArrayWithNumbers(7)
const arrayOfNumbers2 = generateArrayWithNumbers(7)
const arrayOfPairedSum = []

for (let i = 0; i < arrayOfNumbers1.length; i++) {
    arrayOfPairedSum.push(arrayOfNumbers1[i] + arrayOfNumbers2[i]);
}
console.log('Перший масив: ', arrayOfNumbers1);
console.log('Другий масив: ', arrayOfNumbers2);
console.log('Третій масив з попарною сумою елементів: ', arrayOfPairedSum);

//Завдання 4
console.log('Завдання 4');
const arr1 = generateArrayWithNumbers(3);
const arr2 = generateArrayWithNumbers(6);
console.log('Перший масив', arr1);
console.log('Другий масив', arr2);
console.log('Новий масив внаслідок конкатенації', [...arr1, ...arr2]);
//Завдання 5
console.log('Завдання 5');
const newArray = generateArrayWithNumbers(8)
console.log('Заданий масив', newArray)
newArray.sort((a, b) => a - b);

const cloneOfNewArray = [...newArray];
console.log('Відсортований масив', cloneOfNewArray);
cloneOfNewArray[0] = cloneOfNewArray[newArray.length - 1];
cloneOfNewArray[newArray.length - 1] = newArray[0];
console.log('Масив з поміняним максимумом і мінімумом', cloneOfNewArray);
//Завдання 6
console.log('Завдання 6');
const array = generateArrayWithNumbers(10);
const arrayOfNumbersGreaterThanZero = array.filter((number) => number > 0);
const arrayOfNumbersLesserThanZero = array.filter((number) => number < 0);
console.log('Даний масив', array);
console.log('Масив з додатніми числами', arrayOfNumbersGreaterThanZero);
console.log(`Масив з від'ємними числами`, arrayOfNumbersLesserThanZero);
//Завдання 7
console.log('Завдання 7')
const arrayToWorkWith = generateArrayWithNumbers(10);
console.log('Масив для видалення дублікатів', arrayToWorkWith);
arrayToWorkWith.sort((a, b) => a - b);
const minValueOfArray = arrayToWorkWith[0];
const maxValueOfArray = arrayToWorkWith[arrayToWorkWith.length - 1];
const arrWithoutMaxAndMin =
    arrayToWorkWith.filter((number) => number !== maxValueOfArray && number !== minValueOfArray);
arrWithoutMaxAndMin.unshift(minValueOfArray);
arrWithoutMaxAndMin.push(maxValueOfArray);
console.log('Відсортований масив з видаленими дублікатами', arrWithoutMaxAndMin)
//Завдання 8
console.log('Завдання 8')
const arithmeticalMeanOfArrayOfNumbersGreaterThanZero = arrayOfNumbersGreaterThanZero.reduce((a, b) => a + b) / arrayOfNumbersGreaterThanZero.length;
const arithmeticalMeanOfArrayOfNumbersLesserThanZero = arrayOfNumbersLesserThanZero.reduce((a, b) => a + b) / arrayOfNumbersLesserThanZero.length;

console.log('Середні арифметичні двох масивів: ', arithmeticalMeanOfArrayOfNumbersGreaterThanZero, 'і', arithmeticalMeanOfArrayOfNumbersLesserThanZero);


const newArithmeticalMeanOfArrayOfNumbersGreaterThanZeroBetweenMeans = arrayOfNumbersGreaterThanZero
    .filter(
        (number) => number > arithmeticalMeanOfArrayOfNumbersLesserThanZero && number < arithmeticalMeanOfArrayOfNumbersGreaterThanZero
    )
const newArithmeticalMeanOfArrayOfNumbersLesserThanZeroBetweenMeans = arrayOfNumbersLesserThanZero
    .filter(
        (number) => number > arithmeticalMeanOfArrayOfNumbersLesserThanZero && number < arithmeticalMeanOfArrayOfNumbersGreaterThanZero
    )
const arrayOfValuesBetweenArithmeticalMeans = [...newArithmeticalMeanOfArrayOfNumbersLesserThanZeroBetweenMeans, ...newArithmeticalMeanOfArrayOfNumbersGreaterThanZeroBetweenMeans];
console.log('Кінцевий масив', arrayOfValuesBetweenArithmeticalMeans)
