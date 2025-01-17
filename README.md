[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QeHYFfL9)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17158268&assignment_repo_type=AssignmentRepo)
# Bài tập lớn - Phát triển ứng dụng web

## Thông tin sinh viên
- **Họ và tên**: Nguyễn Việt Anh
- **MSSV**: 1921050068
- **Lớp**: 

## Giới thiệu
Đây là yêu cầu của bài tập lớn cho học phần Phát triển ứng dụng web + BTL (mã học phần 7080116). Sinh viên sẽ xây dựng một ứng dụng web hoàn chỉnh sử dụng một trong các công nghệ sau: NodeJS và Express, .NET, hoặc Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hay một framework tương tự nhằm tăng tốc phát triển. Bài tập lớn này yêu cầu sinh viên áp dụng các kiến thức đã học về lập trình giao diện người dùng, web động theo mô hình Client-Server, tích hợp API hoặc/và CSDL, kiểm thử tự động và CI/CD với GitHub Actions.

## Mục tiêu
Bài tập lớn nhằm:
- Phát triển frontend (UI) cho ứng dụng web động với các công nghệ web truyền thống hoặc hiện đại.
- Hiểu và áp dụng mô hình Client-Server trong phát triển ứng dụng web.
- Biết tích hợp ứng dụng với backend hoặc dịch vụ backend thông qua API hoặc CSDL.
- Thực hiện được các thao tác CRUD (Create, Read, Update, Delete) cơ bản với dữ liệu.
- Biết áp dụng kiểm thử tự động để đảm bảo chất lượng ứng dụng.
- Biết áp dụng CI/CD với GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

## Yêu cầu ứng dụng
1. **Chức năng CRUD**  
   Ứng dụng phải có khả năng thực hiện các thao tác CRUD cơ bản trên một loại dữ liệu cụ thể (ví dụ: quản lý người dùng, sản phẩm, bài viết, v.v.).

2. **Giao diện người dùng**  
   Ứng dụng phải có giao diện người dùng thân thiện và dễ sử dụng, được xây dựng bằng HTML, CSS và JavaScript (hoặc Dart nếu sử dụng Flutter Web).

3. **Tích hợp API hoặc/và CSDL**  
   Ứng dụng phải tích hợp với một backend hoặc dịch vụ backend thông qua API hoặc/và CSDL. Backend có thể được xây dựng bằng NodeJS và Express, .NET, Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hay một framework tương tự.

4. **Kiểm thử tự động**
Ứng dụng phải có các kiểm thử tự động để đảm bảo chất lượng. Các kiểm thử này có thể bao gồm kiểm thử đơn vị (unit tests), kiểm thử tích hợp (integration tests), và kiểm thử giao diện người dùng (UI tests) tùy theo yêu cầu của ứng dụng và công nghệ sử dụng.

5. **CI/CD với GitHub Actions**
Ứng dụng có thể sử dụng GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

## Hướng dẫn thực hiện
1. **Xác định yêu cầu ứng dụng**: Xác định chức năng cần thực hiện, thiết kế giao diện người dùng, và xác định công nghệ sử dụng.
2. **Phát triển frontend**: Xây dựng giao diện người dùng với HTML, CSS và JavaScript (hoặc Dart nếu sử dụng Flutter Web).
3. **Phát triển backend**: Xây dựng backend với NodeJS và Express, .NET, Web với Dart (**web-only**), Web với Flutter (**multi-platform**) hoặc một framework tương tự.
4. **Tích hợp frontend và backend**: Tích hợp giao diện người dùng với backend thông qua API hoặc CSDL.
5. **Viết kiểm thử tự động**: Viết các kiểm thử tự động để đảm bảo chất lượng ứng dụng.
6. **Thực thi và gỡ lỗi**: Kiểm thử ứng dụng và sửa lỗi nếu có trên môi trường phát triển.
7. **Thiết lập CI/CD**: Thiết lập GitHub Actions để tự động hóa quy trình kiểm thử và triển khai (không bắt buộc).
8. **Triển khai ứng dụng**: Triển khai ứng dụng lên môi trường sản phẩm để sử dụng (không bắt buộc).

## Tiêu chí đánh giá
- **5/10**: Hoàn thành các chức năng cơ bản của ứng dụng web động, bao gồm giao diện người dùng, server backend với Node.js và Express (hoặc framework khác), và các thao tác CRUD cơ bản.
- **6/10**: Thực hiện kiểm thử đơn vị (unit tests) và kiểm thử tích hợp (integration tests) cho các chức năng chính của ứng dụng.
- **7/10**: Thực hiện kiểm thử End-to-End (E2E) với Cypress và đảm bảo các luồng thao tác chính hoạt động đúng.
- **8/10**: Tích hợp ứng dụng với một CSDL (ví dụ: MongoDB, MySQL) hoặc dịch vụ backend như Firebase để lưu trữ và quản lý dữ liệu.
- **9/10**: Thiết lập CI/CD với GitHub Actions để tự động hóa quy trình kiểm thử và triển khai ứng dụng.
- **10/10**: Báo cáo chi tiết về quá trình phát triển ứng dụng, bao gồm thiết kế, triển khai, kiểm thử và CI/CD. Video demo ứng dụng hoạt động và tài liệu hướng dẫn cài đặt ứng dụng trên thiết bị di động hoặc máy ảo.

## Báo cáo kết quả

Sinh viên viết báo cáo kết quả trực tiếp vào phần này để tránh tạo ra nhiều file báo cáo. Báo cáo cần bao gồm các nội dung sau:

1. **Giới thiệu ứng dụng**: Mô tả ngắn gọn về ứng dụng, mục tiêu và các chức năng chính.

2. **Hình ảnh giao diện**: Chèn hình ảnh giao diện chính và các chức năng của ứng dụng. Đảm bảo hình ảnh rõ ràng và mô tả đầy đủ các phần của giao diện.

3. **Mô tả chức năng**: Mô tả chi tiết các chức năng của ứng dụng, bao gồm các thao tác CRUD, quản lý trạng thái, tích hợp API hoặc CSDL, kiểm thử tự động và CI/CD.

4. **Video demo (nếu có)**: Chèn liên kết đến video demo ứng dụng hoạt động. Video không quá 5 phút, trình bày rõ ràng các chức năng chính và cách sử dụng ứng dụng.

5. **Tự đánh giá điểm**: Sinh viên tự đánh giá điểm của mình theo tiêu chí đánh giá đã đề ra. Ghi rõ điểm tự đánh giá và lý do.

## Yêu cầu nộp bài
- **Source code**: Sinh viên cần nhận bài tập từ GitHub Classroom và nộp mã nguồn của ứng dụng theo đúng cấu trúc yêu cầu.
- **Gỡ lỗi ứng dụng**: Sinh viên cần chắc chắn ứng dụng hoạt động đúng trên máy tính cá nhân trước khi nộp bài.
- **Kiểm thử tự động**: Sinh viên cần thiết lập kiểm thử tự động để đảm bảo chất lượng ứng dụng. Mã nguồn của kiểm thử cần được đặt trong thư mục `tests`.
- **Thiết kế giao diện**: Thiết kế giao diện người dùng cho ứng dụng, đảm bảo tính thân thiện và dễ sử dụng.
- **Phát triển backend**: Xây dựng backend cho ứng dụng, bao gồm các API cần thiết để thực hiện các thao tác CRUD với dữ liệu thông qua **CSDL hoặc dịch vụ backend như Firebase**.

- **Tích hợp frontend và backend**: Tích hợp giao diện người dùng với backend thông qua các API.
- **Thiết lập CI/CD**: Thiết lập GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.

# Todo App - Node.js, MongoDB, and Cypress E2E Testing

## Giới thiệu

Đây là ứng dụng Todo được phát triển với Node.js và MongoDB. Ứng dụng cung cấp các chức năng chính như thêm, sửa, xóa và hiển thị danh sách các Todo. Ngoài ra, ứng dụng cũng được kiểm thử tự động với các bài kiểm thử Unit, Integration và kiểm thử E2E bằng Cypress.

## Các tính năng chính

1. **CRUD (Create, Read, Update, Delete)**:
   - **Thêm Todo**: Cho phép người dùng thêm một Todo mới.
   - **Hiển thị Todo**: Hiển thị danh sách tất cả các Todo.
   - **Sửa Todo**: Cho phép người dùng sửa tên và mô tả của một Todo.
   - **Xóa Todo**: Cho phép người dùng xóa một Todo khỏi danh sách.

2. **Xử lý lỗi**:
   - Kiểm tra xem Todo có tồn tại trước khi thêm mới.
   - Đảm bảo rằng các Todo có thông tin hợp lệ trước khi lưu vào cơ sở dữ liệu.

3. **Kiểm thử tự động**:
   - **Unit Test**: Kiểm tra các hàm trong controller (`todoController.js`).
   - **Integration Test**: Kiểm tra các route API (`todoRoutes.js`).
   - **E2E Test**: Kiểm tra toàn bộ quy trình từ giao diện người dùng đến backend với Cypress.

## Cấu trúc thư mục

```plaintext
/my-todo-app
│
├── /cypress                    # Thư mục chứa các bài kiểm thử E2E
│   ├── /fixtures               # Dữ liệu giả cho các bài kiểm thử
│   ├── /integration            # Các bài kiểm thử E2E
│   ├── /plugins                # Cấu hình plugin cho Cypress (nếu có)
│   └── /support                # Tập tin hỗ trợ Cypress
│
├── /node_modules               # Thư mục chứa các thư viện đã cài đặt
│
├── /public                     # Thư mục chứa các tài nguyên tĩnh (HTML, CSS, JS)
│   ├── index.html              # Trang chính của ứng dụng Todo
│   ├── app.js                  # JavaScript cho giao diện người dùng
│   └── style.css               # CSS cho ứng dụng
│
├── /config                     # Thư mục cấu hình
│   └── db.js                   # Cấu hình kết nối MongoDB
│
├── /controllers                # Thư mục chứa các controller
│   └── todoController.js       # Các hàm xử lý logic của ứng dụng Todo
│
├── /models                     # Thư mục chứa các mô hình dữ liệu (MongoDB schemas)
│   └── Todo.js                 # Mô hình Todo
│
├── /routes                     # Thư mục chứa các route của ứng dụng
│   └── todoRoutes.js           # Các route API cho Todo
│
├── /test                       # Thư mục chứa các bài kiểm thử
│   ├── todoController.test.js  # Unit test cho Todo Controller
│   └── todoRoutes.test.js      # Integration test cho Todo Routes
│
├── /views                      # Thư mục chứa các view (nếu sử dụng các template engine như EJS)
│   └── index.ejs               # View cho giao diện chính (nếu có)
│
├── .gitignore                  # File gitignore để loại trừ các file không cần thiết
├── package.json                # Quản lý các phụ thuộc và scripts của dự án
├── package-lock.json           # Phiên bản khóa của các phụ thuộc đã cài đặt
└── server.js                   # Tệp chính để khởi chạy ứng dụng Node.js

```
## Tự đánh giá
- Trang web đã đáp ứng được các tiêu chí
- [x] Hoàn thành các chức năng cơ bản của ứng dụng web động, bao gồm giao diện người dùng, server backend với Node.js và Express (hoặc framework khác), và các thao tác CRUD cơ bản.
- [x] Thực hiện kiểm thử đơn vị (unit tests) và kiểm thử tích hợp (integration tests) cho các chức năng chính của ứng dụng.
- [x] Thực hiện kiểm thử End-to-End (E2E) với Cypress và đảm bảo các luồng thao tác chính hoạt động đúng.
- [x] Tích hợp ứng dụng với một CSDL (ví dụ: MongoDB, MySQL) hoặc dịch vụ backend như Firebase để lưu trữ và quản lý dữ liệu
- [ ] Thiết lập CI/CD với GitHub Actions để tự động hóa quy trình kiểm thử và triển khai ứng dụng.
- [x] Báo cáo chi tiết về quá trình phát triển ứng dụng, bao gồm thiết kế, triển khai, kiểm thử và CI/CD. Video demo ứng dụng hoạt động và tài liệu hướng dẫn cài đặt ứng dụng trên thiết bị di động hoặc máy ảo.
- Minh chứng đã được để trong thư mục video/
- Tự đánh giá: 8.0 Điểm