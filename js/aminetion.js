//  box one
function changeDisplay(clickedLi) {
  // Lấy thông tin về hình ảnh và tên của người dùng từ phần tử li được click
  var imgSrc = clickedLi.querySelector("img").src;
  var userName = clickedLi.querySelector("strong").innerText;

  // Lấy phần tử có class là "name-display"
  var nameDisplay = document.querySelector(".name-display");
  var nameimg = document.querySelector(".name--img");

  // Lấy phần tử img trong ".name-display"
  var imgElement = nameDisplay.querySelector("img");

  // Ẩn phần tử "name-display" và tất cả các phần tử con của nó
  nameDisplay.style.display = "none";
  nameimg.style.display = "none";

  // Thay đổi nội dung của phần tử "name-display"
  nameDisplay.innerHTML =
    '<img src="' +
    imgSrc +
    '" alt="user--two" />' +
    "<strong>" +
    userName +
    "</strong>" +
    "<span>Active now</span>";

  // Tạo một thẻ <style> và thiết lập nội dung của nó bằng các quy tắc CSS
  var style = document.createElement("style");
  style.innerHTML = `
      
.name--display__one{
   margin-top: -65px;
   margin-left: 25px;
}

.name--display__one span {
  display: block;
  line-height: 16px;
  margin-left: 60px;
  margin-top: 15px;
}
.changer--active__one img{
  margin-top: 53px;
  position: relative;
  top:35px;
  right:20px;
  left:-20px;

}
.changer--active__one ion-icon{
  position: relative;
  left:73px;
  top:57px;
  z-index: 999;

  
}

    `;
  document.head.appendChild(style);

  // Hiển thị lại phần tử "name-display" sau khi đã thay đổi nội dung
  nameDisplay.style.display = "block";
}
