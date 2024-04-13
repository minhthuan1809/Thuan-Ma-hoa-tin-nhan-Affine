function checkKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage__two();
  }
}

// thuận tạo sự kiện enter
function _checkKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage__one();
  }
}

function sendMessage__one() {
  var message = document.getElementById("sent--one").value.trim(); // Lấy dữ liệu từ input
  var currentTime = new Date(); // Lấy thời gian hiện tại

  // Format thời gian thành chuỗi có dạng "HH:MM:SS"
  var hours = currentTime.getHours().toString().padStart(2, "0");
  var minutes = currentTime.getMinutes().toString().padStart(2, "0");
  var seconds = currentTime.getSeconds().toString().padStart(2, "0");
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Thêm tin nhắn mới vào textarea đã gửi, kèm theo thời gian
  var sentTextarea = document.getElementById("messageTextarea--one");
  sentTextarea.value =
    "Bạn: (" + timeString + "): " + message + "\n" + sentTextarea.value;
  sentTextarea.scrollTop = sentTextarea.scrollHeight; // Cuộn xuống dòng cuối của textarea đã gửi
  sentTextarea.style.color = "blue"; // Đặt màu văn bản cho tin nhắn đã gửi là xanh
  sentTextarea.style.textAlign = "right"; // Căn lề văn bản sang phải

  // Thêm tin nhắn mới vào textarea chưa gửi, kèm theo thời gian
  var textarea = document.getElementById("messageTextarea");
  textarea.value =
    "Thuận gửi : (" + timeString + "): " + message + "\n" + textarea.value;
  textarea.scrollTop = textarea.scrollHeight; // Cuộn xuống dòng cuối của textarea chưa gửi
  textarea.style.color = "red"; // Đặt màu văn bản cho tin nhắn chưa gửi là đỏ
  textarea.style.textAlign = "left"; // Căn lề văn bản sang trái

  // Xóa nội dung trong ô input sau khi gửi
  document.getElementById("sent--one").value = "";
}

// hiếu
function sendMessage__two() {
  var message = document.getElementById("messageInput--two").value;
  var currentTime = new Date(); // Lấy thời gian hiện tại

  // Format thời gian thành chuỗi có dạng "HH:MM:SS"
  var hours = currentTime.getHours().toString().padStart(2, "0");
  var minutes = currentTime.getMinutes().toString().padStart(2, "0");
  var seconds = currentTime.getSeconds().toString().padStart(2, "0");
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Thêm tin nhắn mới vào textarea đã gửi, kèm theo thời gian
  var sentTextarea = document.getElementById("messageTextarea--one");
  sentTextarea.value =
    "Hiếu Gửi (" + timeString + "): " + message + "\n" + sentTextarea.value;
  sentTextarea.scrollTop = sentTextarea.scrollHeight; // Cuộn xuống dòng cuối của textarea đã gửi
  sentTextarea.style.color = "red"; // Đặt màu văn bản cho tin nhắn đã gửi là đỏ
  sentTextarea.style.textAlign = "left"; // Căn lề văn bản sang trái

  // Thêm tin nhắn mới vào textarea chưa gửi, kèm theo thời gian
  var textarea = document.getElementById("messageTextarea");
  textarea.value =
    "Bạn (" + timeString + "): " + message + "\n" + textarea.value;
  textarea.scrollTop = textarea.scrollHeight; // Cuộn xuống dòng cuối của textarea chưa gửi
  textarea.style.color = "blue"; // Đặt màu văn bản cho tin nhắn chưa gửi là xanh
  textarea.style.textAlign = "right"; // Căn lề văn bản sang phải

  // Xóa nội dung trong ô input sau khi gửi
  document.getElementById("messageInput--two").value = "";
}

//animaition

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
      
.name-display{
   margin-top: -65px;
   margin-left: 25px;
}

.name-display span {
  display: block;
  line-height: 16px;
  margin-left: 60px;
  margin-top: 15px;
}
.active img{
  margin-top: 53px;
  position: relative;
  top:35px;
  right:20px;
  left:-20px;

}
.active ion-icon{
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
