let dropzone = document.getElementById("dropzone");
let fileInput = document.getElementById("fileInput");
let fileList = document.getElementById("fileList");

function handleFiles(files) {
    fileList.innerHTML = "";
    Array.from(files).forEach(file => {
        let listItem = document.createElement("li");
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    });
}

dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropzone.classList.add("dragover");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
});

dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("dragover");
    let files = event.dataTransfer.files;
    handleFiles(files);
});

dropzone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", (event) => {
    let files = event.target.files;
    handleFiles(files);
});
