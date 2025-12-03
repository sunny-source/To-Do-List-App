function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);

    input.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}
