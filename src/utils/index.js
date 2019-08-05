export function insert(arr, itemToAdd) {
  if (arr.find(item => item.id === itemToAdd.id)) {
    return arr.map((item) => {
      if (item.id === itemToAdd.id) {
        return Object.assign({ quantity: ++item.quantity }, itemToAdd);
      }
      return item;
    });
  }
  return [...arr, Object.assign({ quantity: 1 }, itemToAdd)];
}

export function remove(arr, idToRemove) {
  // SE POSSUIR MAIS DE UM ITEM DIMINUI A QUANTIDADE, SENÃO, REMOVE DA LISTA
  const itemToRemove = arr.find(({ id }) => id === idToRemove);
  if (itemToRemove.quantity > 1) {
    return arr.map((item) => {
      if (item.id === idToRemove) {
        return Object.assign({ quantity: --item.quantity }, item);
      }
      return item;
    });
  }
  return arr.filter(({ id }) => id !== idToRemove);
}

export function countCart(arr) {
  console.tron.log(arr);
  let count = 0;
  arr.forEach(({ quantity }) => {
    count += quantity;
  });
  return count;
}
