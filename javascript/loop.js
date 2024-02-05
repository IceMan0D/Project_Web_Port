/* Array */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* For each loop */
animals.forEach((element) => {
  document.write(element + " ");
});

/* For loop */
let total = 0;
for (let i = 0; i < number.length; i++) {
  total += number[i];
}
document.write("Total " + total + "<br>");
document.write("Average " + total / number.length + "<br>");

/* While Loop*/
let n = 0;
while (n < number.length) {
  console.log(number[n]);
  n++;
}
