function giaiMaChuoi(encodedString, a, b) {
  // Mảng chứa các ký tự chữ hoa
  const text = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];

  // Mảng chứa các số tương ứng với ký tự
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  // Tạo mảng giải mã
  var decodedValues = [];

  // Duyệt qua chuỗi mã hóa
  for (let i = 0; i < encodedString.length; i++) {
    var ch = encodedString[i]; // Lấy ký tự mã hóa
    if (text.includes(ch)) {
      var viTri = timViTriTrongMang(ch, text); // Tìm vị trí của ký tự mã hóa trong mảng text
      if (viTri !== -1) {
        var y = number[viTri]; // Lấy giá trị số tương ứng
        var x = chuyenDoiXY(y, a, b); // Tính giá trị x (bản rõ số)
        var viTriX = number.indexOf(x); // Tìm vị trí của x trong mảng number
        if (viTriX !== -1) {
          var chGiaiMa = text[viTriX]; // Lấy ký tự chữ tương ứng (bản rõ chữ)
          decodedValues.push(chGiaiMa); // Thêm vào mảng giải mã
        }
      }
    }
  }

  // Hiển thị bản giải mã
  var result = "Bản giải mã: " + decodedValues.join("");
  alert(result);
}