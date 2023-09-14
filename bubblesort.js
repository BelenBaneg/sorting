function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let pos = i;
        array = swap(array, pos);
      }
    }
  }
  return array;
}
function swap(arr, num) {
  let ref = arr[num];
  arr[num] = arr[num + 1];
  arr[num + 1] = ref;
  return arr;
}



// function bubbleSort(array) {
//  
//   let swaping;
//   do {
//     swaping = false;
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         swap(array, i, i + 1);
//         swaping = true;
//       }
//       op++;
//     }
//   } while (swaping);
//   return array;
// }

// function swap(arr, index1, index2) {
//   let change = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = change;
// }