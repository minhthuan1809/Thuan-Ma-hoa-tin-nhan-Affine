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
