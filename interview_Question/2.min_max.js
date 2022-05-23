// min_max without using any inbuild method
const min_max = [3, 8, -2, 0, 10];

function minMax(min_max) {
  const element = min_max;
  let min = (max = element[0]);

  for (let index = 0; index < element.length; index++) {
    if (element[index] < min) {
      min = element[index];
    } else if (element[index] > max) {
      max = element[index];
    }
  }
  console.log(min, max);
}

minMax(min_max);
