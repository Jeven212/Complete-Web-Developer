var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var del = document.querySelectorAll(".deleteBtn");
debugger;
function inputLength() {
	return input.value.length;
}

function createListElement() {
	// new del btn
	var newDel = document.createElement("input");
	newDel.classList.add("deleteBtn");
	newDel.type = "button";
	newDel.value = "delete";
	ul.appendChild(newDel);

	// updating var del
	del = document.querySelectorAll(".deleteBtn");

	// add eventlistener to new del btn
	delEvent(ul.lastChild, del.length - 1);

	// new list item
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));
	ul.appendChild(newLi);
	input.value = "";

	// updating var li
	li = document.querySelectorAll("li");

	// updating eventlistener
	listItemEvent(ul.lastChild);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listItemEvent(element) {
	element.addEventListener("click", function() {
		toogleItem(element);
	});
}

function toogleItem(element) {
	if (element.getAttribute("class") === null) {
		element.classList.add("done");
	}
	else {
		element.classList.toggle("done");
	}
}

function delEvent(element, i) {
	element.addEventListener("click", function () {
		console.log(i, "delevent");
		li[i].remove();
		element.remove();
	});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Toggle list-item by click
li.forEach(element => {
	listItemEvent(element);
});

// Delete list-item with delteBtn
del.forEach((element, i) => {
	delEvent(element, i);
});

// Better solution. Remember!!!
ul.addEventListener("click", ulElement => {
	console.log(ulElement);
	console.log(ulElement.target)
});
