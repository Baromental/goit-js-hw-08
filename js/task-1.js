const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent.trim();
  const items = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${items.length}`);
});


// items.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const categoryItems = item.querySelectorAll('ul li').length;
//   console.log(`Category: ${categoryName}, Number of items: ${categoryItems}`);
// });