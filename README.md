# HỆ THỐNG GIÁM SÁT DINH DƯỠNG CÂY TRỒNG SỬ DỤNG WEB TĨNH VÀ MÔ HÌNH B2C

Hệ thống giám sát dinh dưỡng cây trồng được xây dựng theo dạng website tĩnh (Static Website) kết hợp mô hình B2C (Business to Customer). Hệ thống được thiết kế nhằm hỗ trợ người dùng theo dõi dữ liệu môi trường cây trồng và điều khiển các thiết bị nông nghiệp thông minh thông qua giao diện website trực quan và dễ sử dụng.

Website sử dụng các công nghệ HTML, CSS và JavaScript để xây dựng giao diện và xử lý dữ liệu phía người dùng mà không cần sử dụng cơ sở dữ liệu hoặc backend server. Dữ liệu cảm biến được mô phỏng bằng JavaScript và cập nhật tự động theo thời gian thực nhằm mô phỏng hoạt động của hệ thống IoT trong thực tế.

Mô hình B2C được áp dụng vì hệ thống hướng trực tiếp đến người dùng cuối như nông dân, chủ trang trại hoặc người quản lý nông nghiệp thông minh. Người dùng có thể truy cập website để theo dõi dữ liệu cảm biến, xem trạng thái thiết bị, nhận cảnh báo và điều khiển hệ thống.

Hệ thống góp phần nâng cao hiệu quả quản lý cây trồng, tiết kiệm thời gian giám sát và hỗ trợ ứng dụng công nghệ IoT trong lĩnh vực nông nghiệp thông minh.

Công nghệ sử dụng
HTML5
CSS3
JavaScript
Chart.js
Netlify (Deploy website)
GitHub (Quản lý mã nguồn)
Chức năng chính
Hiển thị dữ liệu cảm biến độ ẩm, nhiệt độ, pH đất và ánh sáng theo thời gian thực.
Dashboard trực quan với biểu đồ thống kê dữ liệu.
Hệ thống cảnh báo khi dữ liệu vượt ngưỡng cho phép.
Điều khiển các thiết bị như quạt, đèn và hệ thống tưới nước.
Hỗ trợ Dark Mode.
Responsive Web Design tương thích trên điện thoại, máy tính bảng và máy tính.
Mục tiêu hệ thống
Hỗ trợ quản lý và giám sát môi trường cây trồng.
Mô phỏng hệ thống nông nghiệp thông minh ứng dụng IoT.
Giúp người dùng dễ dàng theo dõi và điều khiển thiết bị từ giao diện website.

# 🌱 Hệ thống IoT Giám sát Cây trồng (Smart Agriculture IoT)

## 📌 Giới thiệu
Dự án **Hệ thống IoT giám sát cây trồng** là một hệ thống giúp theo dõi các chỉ số môi trường như độ ẩm đất, nhiệt độ, ánh sáng và pH đất theo thời gian thực. Dữ liệu được thu thập từ cảm biến và hiển thị trên giao diện web.

Hệ thống hỗ trợ người dùng trong việc chăm sóc cây trồng hiệu quả hơn thông qua việc giám sát và tự động hóa.

## 🚀 Tính năng chính
- 📡 Thu thập dữ liệu từ cảm biến (độ ẩm, nhiệt độ, ánh sáng, pH
- 📊 Hiển thị dữ liệu gần realtime trên web dashboard (web tĩnh sử dụng HTML/CSS/JavaScript, dữ liệu cập nhật mô phỏng bằng JS)
- - 💧 Điều khiển tưới nước tự động (mô phỏng)
- 📱 Giao diện đơn giản, dễ sử dụng (HTML/CSS/JS)

## 🧰 Công nghệ sử dụng
### Phần cứng:
- Cảm biến độ ẩm đất
- Cảm biến nhiệt độ
- Cảm biến ánh sáng
- Relay điều khiển bơm nước

### Phần mềm:
- HTML, CSS, JavaScript (Frontend)
- Chart.js (hiển thị biểu đồ)

🗂️ Thư mục dự án
project/


├── images/              # Thư mục chứa hình ảnh

├── index.html          # Trang chủ

├── cambien.html        # Trang cảm biến

├── phantich.html       # Trang phân tích dữ liệu

├── setting.html        # Trang cài đặt hệ thống

├── thietbi.html        # Trang thiết bị

├── style.css          # File giao diện CSS

├── script.js          # File JavaScript xử lý logic

└── README.md          # Tài liệu mô tả dự án

