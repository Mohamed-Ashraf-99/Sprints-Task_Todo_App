const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
const add2 = document.querySelector('.add2');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => this.edit(input, name));

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        }
        else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}

for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}


new item("");


// class item2 {
//     constructor(itemName) {
//         this.createDiv(itemName);
//     }

//     createDiv(itemName) {
//         let input2 = document.createElement('input');
//         input2.value = itemName;
//         input2.disabled = true;
//         input2.classList.add('item_inputt');
//         input2.type = "text";

//         let itemBox2 = document.createElement('div');
//         itemBox2.classList.add('item2');

//         let editButton = document.createElement('button');
//         editButton.innerHTML = "EDIT";
//         editButton.classList.add('edit2');

//         let removeButton = document.createElement('button');
//         removeButton.innerHTML = "REMOVE";
//         removeButton.classList.add('remove2');

//         container.appendChild(itemBox2);

//         itemBox2.appendChild(input2);
//         itemBox2.appendChild(editButton);
//         itemBox2.appendChild(removeButton);

//         editButton.addEventListener('click', () => this.edit(input2));

//         removeButton.addEventListener('click', () => this.remove(itemBox2));
//     }

//     edit(input2) {
//         input2.disabled = !input2.disabled;
//     }

//     remove(item2) {
//         container.removeChild(item2);
//     }

// }

// function check() {
//     if (inputValue2.value !== "") {
//         new item2(inputValue2.value);
//         inputValue2 = "";
//     }
// }

// addButton.addEventListener('click', check);
// window.addEventListener('keydown', (e) => {
//     if (e.which2 == 13) {
//         check();
//     }
// })


// new item2("");




// function check2() {
//     if (inputValue2.value != "") {
//         new item(inputValue2.value);
//         todos.push(inputValue2.value);
//         window.localStorage.setItem("todos", JSON.stringify(todos));
//         inputValue2.value = "";
//     }
// }


