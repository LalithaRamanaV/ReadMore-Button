const readMoreBtn = document.querySelector(".read-more-btn");
const paragraph = document.querySelector(".paragraph");

readMoreBtn.addEventListener("click",(e)=>{
paragraph.classList.toggle("show-more");
if(readMoreBtn.innerText === "Read More"){
  readMoreBtn.innerText = "Read Less";
}else {
  readMoreBtn.innerText = " Read More";
}
});
