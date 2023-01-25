export function generateRandomColors(): string {
  const arrLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result: number[] | string[] = [];
  const arrConcat: number[] | string[] = [].concat(arrLetters as never, arrNumbers as never);
  // eslint-disable-next-line array-callback-return
  arrConcat
    .map((el, ind, array) => {
      if (result.length < 6) {
        result.push(array[Math.floor(Math.random() * 16)] as never);
      }
      return result;
    })
    .join(',');
  return `#${result.join('')}`;
}
