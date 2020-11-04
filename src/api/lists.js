// eslint-disable-next-line
export async function getLists() {
  const response = await fetch('http://localhost:3000/lists');
  const lists = await response.json();
  return lists;
}
