window.onload = function() {
    // Lấy các phần tử progress
    var skill1 = document.getElementById("skill1");
    var skill2 = document.getElementById("skill2");
    var skill3 = document.getElementById("skill3");
    var skill4 = document.getElementById("skill4");

    // Thiết lập giá trị thanh tiến độ
    skill1.setAttribute("value", 80);
    skill2.setAttribute("value", 70);
    skill3.setAttribute("value", 60);
    skill4.setAttribute("value", 75);

    // Thiết lập giá trị biến CSS để thay đổi độ rộng thanh tiến độ khi chạy
    skill1.style.setProperty('--progress-value', '80%');
    skill2.style.setProperty('--progress-value', '70%');
    skill3.style.setProperty('--progress-value', '60%');
    skill4.style.setProperty('--progress-value', '75%');

    // Thêm lớp .progress-bar để kích hoạt hiệu ứng chuyển động
    skill1.classList.add("progress-bar");
    skill2.classList.add("progress-bar");
    skill3.classList.add("progress-bar");
    skill4.classList.add("progress-bar");
};
