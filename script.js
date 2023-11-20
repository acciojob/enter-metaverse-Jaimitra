//your JS code here. If required.
function changeTo() {
  let para = document.querySelector("p");
  para.remove();
  let h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";
  let body = document.querySelector("body");
  let btn = document.querySelector("button");
  body.insertBefore(h1, btn);
}
