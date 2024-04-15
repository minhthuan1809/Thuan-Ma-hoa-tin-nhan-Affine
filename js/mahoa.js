function mahoa() {
    var inputValue = document.getElementById("messageInput--two").value.toUpperCase(); // Lấy dữ liệu từ input message 2 và chuyển thành chữ hoa
    const text = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]; // Mảng chứa các số tương ứng với ký tự
    var a = 3, b = 6;
    var xValues = []; // Mảng chứa các giá trị x
    var yValues = []; // Mảng chứa các giá trị y

    // Hàm tìm vị trí của ký tự trong mảng chữ
    function timViTriTrongMang(kyTu, mangChu) {
        return mangChu.indexOf(kyTu);
    }

    // Chuyển đổi giá trị x thành giá trị y
    function chuyenDoiXY(x) {
        return (a * x + b) % 27;
    }

    // Duyệt qua từng ký tự trong chuỗi đầu vào
    for (let i = 0; i < inputValue.length; i++) {
        var ch = inputValue[i];
        if (text.includes(ch)) {
            if (ch === " ") {
                xValues.push(26); // Nếu là khoảng trắng, thêm 26 vào mảng giá trị x
            } else {
                var viTri = timViTriTrongMang(ch, text); // Tìm vị trí của ký tự trong mảng `text`
                if (viTri !== -1) {
                    var x = number[viTri]; // Lấy giá trị số tương ứng với ký tự
                    xValues.push(x); // Thêm giá trị x vào mảng
                } 
            }
        }
    }

    // Tính giá trị y cho mỗi giá trị x và lưu vào mảng yValues
    xValues.forEach(function(x) {
        var y = chuyenDoiXY(x);
        yValues.push(y);
    });

    // Hiển thị kết quả
    var inputText = "Dữ liệu nhập vào là: " + inputValue + "\n";
    var encodedText = "Dữ liệu đã mã hóa là: ";
    yValues.forEach(function(y) {
        encodedText += y + ", ";
    });
    alert(inputText + encodedText);
}
