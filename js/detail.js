
let article2 = ( localStorage.getItem('article') );

article2 = parseInt(article2);

console.log(typeof article2);

fetch('/json/goods.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data[1]);
    let description = document.querySelector('.detail__description');
    let name = document.querySelector('.detail__name');
    let cost = document.querySelector('.detail__price');
    cost.textContent = data[1].cost[0];
    name.textContent = data[1].name;
    description.textContent = data[1].description;
    // console.log(description.textContent);
  });


  let detailImg = document.querySelector('.detail__img');

  detailImg.addEventListener('click', () => {
    console.log(article2);
  })