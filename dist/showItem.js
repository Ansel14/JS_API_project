let id_array = JSON.parse(localStorage.getItem("list-id")) ?? [];

console.log(id_array);
console.log(id_array.join("&id="));

axios
  .get("https://api.restful-api.dev/objects?id=" + id_array.join("&id="), {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((response) => {
    for (let i = 0; i != response.data.length; i++) {
      const itemsContainer = document.querySelector("#items__container");
      const list = document.createElement("li");
      list.setAttribute("class", "items__details");

      // const linkName = document.createElement("a");
      // linkName.setAttribute("href", "./page.html");

      const listName = document.createElement("h4");
      listName.setAttribute("class", "items__details--name");
      listName.innerHTML = response.data[i].data.itemName;
      listName.onclick = () => listItem(response.data[i].id);

      const delBtn = document.createElement("button");
      delBtn.setAttribute("class", "btn bg__delete");
      delBtn.innerHTML = "Delete";
      delBtn.onclick = () => deleteItem(response.data[i].id);

      list.appendChild(listName);
      list.appendChild(delBtn);
      itemsContainer.appendChild(list);
    }

    console.log(response.data);
  });

listItem = (index) => {
  localStorage.setItem("clicked-item", JSON.stringify(index));
  location.href = "./itemPage.html";
};

deleteItem = (index) => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const no = document.querySelector(".no_btn");
  const del = document.querySelector(".del_btn");
  const listIndex = id_array.indexOf(index);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  no.onclick = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  del.onclick = () => {
    axios.delete("https://api.restful-api.dev/objects/" + index);
    id_array.splice(listIndex, 1);
    localStorage.setItem("list-id", JSON.stringify(id_array));
    location.reload();
    // console.log(listIndex);
  };
};
