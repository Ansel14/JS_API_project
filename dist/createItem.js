createItem = () => {
  const name = document.querySelector("#item--name");
  const stock = document.querySelector("#stock");
  const price = document.querySelector("#price");
  const description = document.querySelector("#description");

  axios
    .post("https://api.restful-api.dev/objects", {
      data: {
        itemName: name.value,
        stock: stock.value,
        price: price.value,
        description: description.value,
      },
    })
    .then(
      (response) => {

        let id_array = JSON.parse(localStorage.getItem("list-id")) ?? [];

        id_array.push(response.data.id);

        localStorage.setItem("list-id", JSON.stringify(id_array));

        location.href = "./index.html";
      },
      (error) => {
        console.log(error);
      }
    );
};
