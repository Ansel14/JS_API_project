let editItem = JSON.parse(localStorage.getItem("edit-item"));

const itemName = document.querySelector("#item--name");
const stock = document.querySelector("#stock");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const edit_btn = document.querySelector(".edit_btn");

axios
  .get("https://api.restful-api.dev/objects?id=" + editItem, {
    header: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((res) => {
    itemName.value = res.data[0].data.itemName;
    stock.value = res.data[0].data.stock;
    price.value = res.data[0].data.price;
    description.value = res.data[0].data.description;

    edit_btn.onclick = () => itemEdited();
  });

itemEdited = () => {
  axios
    .patch("https://api.restful-api.dev/objects/" + editItem, {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        itemName: itemName.value,
        stock: stock.value,
        price: price.value,
        description: description.value,
      },
    })
    .then((res) => {
      location.href = "./index.html";
    });
};
