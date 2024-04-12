 function changeDisplay(clickedLi) {
    // Lấy thông tin về hình ảnh và tên của người dùng từ phần tử li được click
    var imgSrc = clickedLi.querySelector('img').src;
    var userName = clickedLi.querySelector('strong').innerText;

    // Lấy phần tử có class là "name-display"
    var nameDisplay = document.querySelector('.name-display');
    var nameimg = document.querySelector('.name--img');

    // Lấy phần tử img trong ".name-display"
    var imgElement = nameDisplay.querySelector('img');

    // Ẩn phần tử "name-display" và tất cả các phần tử con của nó
    nameDisplay.style.display = "none";
    nameimg.style.display = "none";

    // Thay đổi nội dung của phần tử "name-display"
    nameDisplay.innerHTML = '<img src="' + imgSrc + '" alt="user--two" />' +
      '<strong>' + userName + '</strong>' +
      '<span>Active now</span>';

    // Tạo một thẻ <style> và thiết lập nội dung của nó bằng các quy tắc CSS
    var style = document.createElement('style');
    style.innerHTML = `
      
.name-display{
   margin-top: -65px;
   margin-left: 55px;
}

.name-display span {
  display: block;
  line-height: 16px;
  margin-left: 65px;
  margin-top: 23px;
}
.active img{
  margin-top: 53px;
  position: relative;
  top:35px;
  right:40px;


}




    `;
    document.head.appendChild(style);

    // Hiển thị lại phần tử "name-display" sau khi đã thay đổi nội dung
    nameDisplay.style.display = "block";
  }