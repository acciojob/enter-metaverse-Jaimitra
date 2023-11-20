//your JS code here. If required.
function changeTo() {
  let para = document.querySelector("#status");
  para.remove();
  let h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";
  let body = document.querySelector("body");
  let btn = document.querySelector("#enterBtn");
  body.insertBefore(h1, btn);
}
