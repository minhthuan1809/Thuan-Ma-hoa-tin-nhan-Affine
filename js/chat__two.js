  // Gán sự kiện cho nút Enter trong ô input
  document.getElementById("messageInput--two").addEventListener("keypress", function(event) {
      if (event.keyCode === 13) { // Kiểm tra nút Enter đã được nhấn
          event.preventDefault(); // Ngăn chặn hành động mặc định của nút Enter (tránh làm mới trang)
          thuthichat__two(); // Gọi hàm thuthichat__one() khi nhấn nút Enter
          sendMessage__two(); // Gọi hàm sendMessage__two() để gửi tin nhắn (nếu cần)
      }
  });
  function thuthichat__two() {
      let a = 3;
      let b = 6;
      
      let tinNhan = document.getElementById("messageInput--two").value.toUpperCase(); 
      
      // Lấy thời gian hiện tại
      let currentTime = new Date();
      let hours = currentTime.getHours().toString().padStart(2, "0");
      let minutes = currentTime.getMinutes().toString().padStart(2, "0");
      let seconds = currentTime.getSeconds().toString().padStart(2, "0");
      let timeString = hours + ":" + minutes + ":" + seconds;

      // Mã hóa tin nhắn
      function maHoaTinNhan(tinNhan)
      {
          let maMa = ""; 
          for (let i = 0; i < tinNhan.length; i++)
          {
              let charCode = tinNhan[i].charCodeAt(0) - 65; // Chuyển ký tự thành mã Unicode và đưa về khoảng từ 0 đến 25
              if (tinNhan[i] !== ' ') {
                  let maHoaCharCode = (((a * charCode) + b) % 26) + 65; // Áp dụng công thức mã hóa Affine Cipher
                  maMa += String.fromCharCode(maHoaCharCode); // Chuyển mã Unicode thành ký tự và thêm vào chuỗi kết quả
              } else {
                  maMa += 'Z'; // Mã hóa dấu cách thành chữ cái 'Z' và thêm vào chuỗi kết quả
              }    
          }
          return maMa;
      }
      
      // Gọi hàm mã hóa và lưu kết quả vào biến maMaTin
      let maMaTin = maHoaTinNhan(tinNhan);
      console.log("Mã Hóa : " + maMaTin);

      // Giải mã tin nhắn
      function giaiMaMa(maMa)
      {
          let tinNhanGiaiMa = "";
          let a_nghichDao = 0;

          // Tìm số nghịch đảo của a trong modulo 26
          for (let i = 0; i < 26; i++)
          {
              if ((a * i) % 26 === 1) { 
                  a_nghichDao = i;
                  break; // Số nghịch đảo đã được tìm thấy, thoát khỏi vòng lặp
              }
          }

          // Giải mã từ mã đã được mã hóa
          for (let i = 0; i < maMa.length; i++)
          {
              let charCode = maMa[i].charCodeAt(0) - 65; // Chuyển ký tự đã mã hóa thành mã Unicode và đưa về khoảng từ 0 đến 25
              if (maMa[i] !== 'Z') { // Kiểm tra nếu không phải là chữ cái 'Z'
                  let giaiMaCharCode = (((a_nghichDao * (charCode - b)) % 26) + 26) % 26 + 65; // Áp dụng công thức giải mã Affine Cipher
                  tinNhanGiaiMa += String.fromCharCode(giaiMaCharCode); // Chuyển mã Unicode thành ký tự và thêm vào chuỗi kết quả
              } else {
                  tinNhanGiaiMa += ' '; // Giải mã chữ cái 'Z' thành dấu cách
              }
          }
      
          return tinNhanGiaiMa;
      }


      // Gọi hàm giải mã và lưu kết quả vào biến tinNhanGiaiMa
      let tinNhanGiaiMa = giaiMaMa(maMaTin);
      console.log("Mã Hóa: " + tinNhanGiaiMa);

      // In tin nhắn đã giải mã ra textarea
      var textarea = document.getElementById("messageTextarea--one");
      textarea.value = "Hiếu Gửi (" + timeString + "): " + tinNhanGiaiMa + "\n" + textarea.value;
    textarea.scrollTop = textarea.scrollHeight; 
    
      // In tin nhắn đã giải mã ra textarea
      var nguoigui = document.getElementById("messageTextarea");
      nguoigui.value ="Bạn Gửi (" + timeString + "): " + tinNhanGiaiMa + "\n" + nguoigui.value;
      nguoigui.scrollTop = nguoigui.scrollHeight; 
    
      // Lưu tin nhắn đã mã hóa vào text--show__mahoa
      var _textarea = document.getElementById("text--show__mahoa");
      _textarea.value = "Hiếu Gửi (" + timeString + "): Mã Hóa: " + maMaTin + "\n" + _textarea.value;
      _textarea.value = "Hiếu Gửi (" + timeString + "): Giải Mã: " + tinNhanGiaiMa + "\n" + _textarea.value;
      _textarea.value = "----------------------Hiếu-----------------------" + "\n" + _textarea.value;
    _textarea.scrollTop = _textarea.scrollHeight; 
    
    // Xóa nội dung trong ô input sau khi gửi
    document.getElementById("messageInput--two").value = "";
  }
