const container = document.querySelector(".container-content");
const inputName = document.querySelector(".input-name");
const inputDesc = document.querySelector(".input-desc");
const buttonAdd = document.querySelector(".bt-add");
const buttonRemove = document.querySelector(".bt-remove");


const rm = [];
let content = [];
let nameCache = "";
let descCache = ""
let html;

function outputName (e) {
  nameCache = e.target.value;
};

function outputDesc (e) {
  descCache = e.target.value;
};

function addItem () {
  if(!nameCache || !descCache) {
    return;
  } else {
    let add = {
      "nameItems": nameCache,
      "descItems": descCache
    };
    if (content.find(value => (nameCache === value.nameItems))) {
      return;
    } else {
      content.push(add);
      outputContent();
    };
  }
};

function outputContent () {
  let id;
  let html = content.map(index => {
    id = content.indexOf(index);
    return `
    <div class="content">
      <ul>
        <li class="content-name">${index.nameItems}</li>
        <li class="content-desc">${index.descItems}</li>
      </ul>
      <button class="bt-remove" id="id${id}">Remove</button>
    </div>
    `;
  }).join('');
  if (content.length === 0) {
    html = `
      <div class="content">
        <ul id="textStyle">
          <li class="content-name">Name</li>
          <li class="content-desc">Description</li>
        </ul>
      </div>
    `
  };
  container.innerHTML = html;
  addId(id);
};

function addId (param) {
  if (rm.length <= param) {
    rm.push(param);
  } else {
    rm.pop(-1, 1);
  }
  for (const key in rm) {
    document.getElementById(`id${key}`).addEventListener("click", removeContent);
  }
};

function removeContent(e) {
  console.log("hello");
  content.splice(e, 1);
  outputContent();
};

inputName.addEventListener("change", outputName);
inputDesc.addEventListener("change", outputDesc);
buttonAdd.addEventListener("click", addItem);


