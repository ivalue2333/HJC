var link = document.createElement("a");
document.body.appendChild(link);

link.href = "https://ivalue2333.github.io/";
link.target = "_blank";

var photo = document.createElement("img");
link.appendChild(photo);

photo.src = "percy.jpg";
photo.alt = "percy";

photo.style =
  "border-radius:50%;position:fixed;bottom:20px;right:20px;transition:all 0.5s ease";

photo.onmouseover = function() {
  this.style.transform = "scale(1.1,1.1)";
  this.style.boxShadow = "5px 5px 15px #000";
};

photo.onmouseout = function() {
  this.style.transform = "scale(1,1)";
  this.style.boxShadow = "none";
};