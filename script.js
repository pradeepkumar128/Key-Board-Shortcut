document.addEventListener("keydown", (e) => {
  console.log("Hello Devloper");
  if (e.ctrlKey && e.key === "s") {
    alert("Your file has bin saved !");
  } else if (e.altKey && e.key === "s") {
    alert("Your file has been deleted!");
    const data = document.querySelector(".firsttext");
    data.style.color = "green";
    data.style.fontSize = "15px";
  }
});
