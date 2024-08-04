let clickedItem = JSON.parse(localStorage.getItem("clicked-item"));

const item_name = document.querySelector(".clickedItem__name");
const item_stock = document.querySelector(".clickedItem__stock");
const item_price = document.querySelector(".clickedItem__price");
const item_desc = document.querySelector(".clickedItem__desc");
const edit_btn = document.querySelector(".edit_btn");

axios
  .get("https://api.restful-api.dev/objects?id=" + clickedItem, {
    header: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((res) => {
    item_name.innerHTML = res.data[0].data.itemName;
    item_stock.innerHTML = res.data[0].data.stock;
    item_price.innerHTML = res.data[0].data.price;
    item_desc.innerHTML = res.data[0].data.description;

    edit_btn.onclick = () => editItem(res.data[0].id);
  });

editItem = (id) => {
    localStorage.setItem("edit-item", JSON.stringify(id));
    location.href = "./editPage.html";
};
