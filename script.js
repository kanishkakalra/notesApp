const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
showNotes();
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  inputBox.classList.add(
    "relative",
    "w-full",
    "max-w-[500px]",
    "min-h-[150px]",
    "bg-white",
    "text-[#333]",
    "p-5",
    "my-5",
    "outline-none",
    "rounded-[5px]"
  );

  img.src = "./images/delete.png";
  img.classList.add(
    "w-[25px]",
    "absolute",
    "bottom-[15px]",
    "right-[15px]",
    "cursor-pointer",
    "IMG"
  );

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("IMG")) {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
