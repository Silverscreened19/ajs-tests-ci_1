export default function sorts(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
