function mahoa() {
    var inputValue = document.getElementById("messageInput--two").value.toUpperCase(); // Lấy dữ liệu từ input message 2 và chuyển thành chữ hoa
    const text = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]; // Mảng chứa các số tương ứng với ký tự
    var a = 3, b = 6;
    var x = ""; // bản rõ  số
    var y = ""; // bản mã số

    // Hàm tìm vị trí của ký tự trong mảng chữ
    function timViTriTrongMang(kyTu, mangChu) {
        return mangChu.indexOf(kyTu);
    }

    // Duyệt qua từng ký tự trong chuỗi đầu vào
    for (let i = 0; i < inputValue.length; i++) {
        var ch = inputValue[i];
        if (text.includes(ch)) {
            if (ch === " ") {
                x += "26"; // Nếu là khoảng trắng, thêm 26 vào chuỗi mã hóa
            } else {
                var viTri = timViTriTrongMang(ch, text); // Tìm vị trí của ký tự trong mảng `text`
                if (viTri !== -1) {
                    x += number[viTri]; // Thêm số tương ứng vào chuỗi mã hóa
                    y = (a * x + b) % 27;
                    alert("Dữ liệu nhập vào là: " + inputValue + "\nDữ liệu đã mã hóa là: " + y);
                } 
            }
        }
    }

}
