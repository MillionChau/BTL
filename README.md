[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QeHYFfL9)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17158268&assignment_repo_type=AssignmentRepo)
# Bài tập lớn - Phát triển ứng dụng web

## Thông tin sinh viên
- **Họ và tên**: Triệu Ỳ Châu
- **MSSV**: 2221050688
- **Lớp**: DCCTCT67_05A

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

# Xây dựng ứng dụng Quản lí khoá học bằng ReactJS, Bootstrap, MongoDB, Node + ExpressJS
- Trang web với mô hình gồm ReactJS, Bootstrap, ExpressJS và MongoDB là một loại mô hình phổ biến sử dụng cho nhiều trang web như Facebook, Instagram, Spotify...
- Việc sử dụng trang web SPA - Single-page Application bằng ReactJS sẽ mang lại trải nghiệm người dùng tốt khi chỉ cần load trang một lần duy nhất trong một lần duy nhất. Kết hợp với Bootstrap tạo UI là một lựa chọn hoàn hảo cho một ứng dụng thuần web
- NodeJS với ExpressJS cũng là một framework rất nhẹ và tối giản, không yêu cầu nhiều cấu hình ban đầu. Điều này giúp lập trình viên dễ dàng bắt đầu và tạo ra các ứng dụng backend mà không cần phải viết quá nhiều mã. Đồng thời nó cũng cung cấp cách tiếp cận rõ ràng và nhất quán trong việc tổ chức routes, middlewware và logic xử lí.
- MongoDB là cơ sở dữ liệu NoSQL, rất phù hợp với các ứng dụng có lượng dữ liệu lớn và yêu cầu thay đổi nhanh chóng.
## Mục tiêu
- Xây dựng UI gồm Đăng nhập, đăng ký, quản lí khoá học và xem khoá học bằng ReactJS
- Sử dụng Express để xử lí các yêu cầu HTTP theo chuẩn RESTful API
- Tích hợp giao diện với phản hồi từ server thông qua HTTP PORT
- Thực hiện kiểm thử đơn vị (unit tests) và kiểm thử tích hợp (integration tests) cho các chức năng chính của ứng dụng.
- Thực hiện kiểm thử End-to-End (E2E) với Cypress và đảm bảo các luồng thao tác chính hoạt động đúng.
- Sử dụng MongoDB để làm CSDL lưu trữ dữ liệu cho ứng dụng
- Thiết lập GitHub Actions để tự động hóa quy trình kiểm thử và triển khai.
## Cấu trúc thư mục
- Cấu trúc thư mục của dự án như sau:
- backend
  - config/ Thư mục có file liên kết với database
  - controllers/ Chứa các controllers của dự án
  - models/ Chứa các models của dự án
  - routes/ Chứa các route của dự án
  - test/ Chứa file testing
  - server.js 
- my-course-app
  - src
    - components/ Chứa các thành phần của giao diện
    - pages/ Chứa các trang chính của dự án
    - app.js
    - index.js
  - cypress/e2e chứa file kiểm thử e2e
## Các bước thực hiện
### Bước 1: Tạo thư mục backend và download các thư viện cần thiết
```bash
   mkdir backend
   npm install express mongoose dotenv cors body-parser bcryptjs jsonwebtoken
   npm install --save-dev jest supertest nodemon
```
### Bước 2: Tạo thư mục my-course-app và download thư viện
```bash
npm install axios react-router-dom bootstrap react-toastify
npm install --save-dev @testing-library/react jest-dom cypress
```

### Bước 3: Xây dựng backend
- Kết nối với database
+ Trong file config/db.js
```js
const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/my_course')
    console.log('Connect Successfully!')
  } catch (error) {
    console.error(error)
  }
}

module.exports = { connect }
```
- Tạo file server.js
```js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const courseRoutes = require('./routes/courseRoutes')
const db = require('./config/db')

dotenv.config()

const app = express()
const port = 5000

db.connect()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)

// Logger HTTP
app.use(morgan('combined'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
```
- Sử dụng start
```json
"start": "nodemon --inspect ./server.js",
```
- Tạo router
+ `courseRoute.js`
```js
   const express = require('express')
const courseController = require('../controllers/courseController')
const router = express.Router()

router.get('/', courseController.getCourses)  // Lấy danh sách khóa học
router.post('/', courseController.addCourse) // Thêm khóa học mới
router.get('/:id/edit', courseController.editCourse) // Chỉnh sửa khoá học
router.put('/:id', courseController.update)
router.delete('/:id', courseController.delete)

module.exports = router

```

+ userRoute.js
```js
const express = require('express')
const { registerUser, loginUser } = require('../controllers/userController')
const router = express.Router()

router.post('/register', registerUser) // Đăng ký
router.post('/login', loginUser)      // Đăng nhập

module.exports = router
```
- Tạo Controller
+ `courseCOntroller.js`
```js
const Course = require('../models/Course')

class CourseController {
  // Lấy danh sách khóa học
  async getCourses(req, res) {
  try {
    const courses = await Course.find()
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Thêm khóa học mới
async addCourse(req, res) {
  const { name, description, videoId, image, level, energy } = req.body
  try {
    const newCourse = new Course({ name, description, videoId, image, level, energy })
    await newCourse.save()
    res.status(201).json({ message: 'Course added successfully', course: newCourse })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async editCourse(req, res, next) {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    res.status(200).json(course) // Trả về dữ liệu khóa học
  } catch (err) {
    next(err)
  }
}


async update(req, res, next) {
  try {
    const { id } = req.params
    const { name, description, videoId, image, level, energy } = req.body
    
    const course = await Course.findById(id)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    // Cập nhật thông tin khóa học
    course.name = name
    course.description = description
    course.videoId = videoId
    course.image = image
    course.level = level
    course.energy = energy

    await course.save()
    res.json(course) // Trả về khóa học đã được cập nhật
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}
async delete(req, res, next) {
  try {
    const { id } = req.params
    const deletedCourse = await Course.findByIdAndDelete(id)

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.status(200).json({ message: 'Course deleted successfully', course: deletedCourse })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
}


module.exports = new CourseController

```

+ `userController.js`
```js
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Đăng ký người dùng
const registerUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: 'User already exists' })

    const newUser = new User({ username, email, password })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Đăng nhập người dùng
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { registerUser, loginUser }
```
- Tạo models để định dạng hoá dữ liệu
+ `Course.js`
```js
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // instructor: { type: String, required: true },
  videoId: {type: String},
  image: {type: String},
  level: {type: String},
  energy: {type: String},
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', CourseSchema)
```
- `User.js`
```js
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// Hàm mã hóa mật khẩu trước khi lưu vào DB
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

module.exports = mongoose.model('User', UserSchema)
```
**Lưu ý:** Sau khi đã xây dựng xong backend ta kiểm thử API với tất cả các phương thức đã xây dựng và cho ra kết quả hợp lệ mới được sang bước tiếp theo

### Bước 4: Xây dựng front-end
- Tạo homepage
+ Dựng Component Card
```js
import React from "react"
import { Link } from "react-router-dom"
import styles from "./Card.module.scss"

const Card = ({ image, name, description, onClick }) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <img
        src={image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={name}
      />
      <h5 className={styles.cardTitle}>{name}</h5>
      <p className={styles.cardText}>{description}</p>
      <Link to="#" className="btn btn-primary">
        Buy Course
      </Link>
    </div>
  )
}

export default Card
```
- style cho Card
```scss
.cardContainer {
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%; 
    box-sizing: border-box;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
  
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
      border-radius: 4px;
    }
  
    .cardTitle {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 10px 0;
    }
  
    .cardText {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: auto;
    }
  
    .btn {
      background: #007bff;
      color: #fff;
      border: none;
      padding: 10px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
  
      &:hover {
        background: #0056b3;
      }
    }
  }
```
+ `HomePage.js`
```js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import styles from "./HomePage.module.scss"

const CourseList = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses')
        setCourses(response.data)
      } catch (error) {
        console.error(error)
        alert('Error fetching courses')
      }
    }
    fetchCourses()
  }, [])

  return (
    <div className={styles.container}>
      <h2>Course List</h2>
      <div className={styles.courseGrid}>
        {courses.map((course) => (
          <div key={course._id} className={styles.courseItem}>
            <Card name={course.name} description={course.description} image={course.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseList
```

+ style cho HomePage với `HomePage.module.scss`
```scss
.container {
    padding: 20px;
  
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .courseGrid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: stretch; // Đảm bảo chiều cao các card bằng nhau
  
      .courseItem {
        flex: 1 1 calc(33.333% - 20px); // 3 card mỗi dòng
        max-width: calc(33.333% - 20px);
        display: flex;
        flex-direction: column;
        justify-content: space-between; // Nút nằm ở cuối cùng
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
  
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
        }
  
        img {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
          border-radius: 4px;
        }
  
        button {
          margin-top: auto;
          background: #007bff;
          color: #fff;
          border: none;
          padding: 10px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
  
          &:hover {
            background: #0056b3;
          }
        }
      }
  
      // Responsive styles
      @media (max-width: 768px) {
        .courseItem {
          flex: 1 1 calc(50% - 20px); // 2 card mỗi dòng trên tablet
          max-width: calc(50% - 20px);
        }
      }
  
      @media (max-width: 480px) {
        .courseItem {
          flex: 1 1 100%; // 1 card mỗi dòng trên mobile
          max-width: 100%;
        }
      }
    }
  }
  ```
  - Xây dựng các Components
  + Navbar.js
```js
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true)

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">CourseApp</Link>
      <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
```
+ `Footer.js`
```js
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className='mt-4'>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">About Us</a></li>
              <li><a href="/" className="text-white">Careers</a></li>
              <li><a href="/" className="text-white">Blog</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Terms of Service</a></li>
              <li><a href="/" className="text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-white">Support</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Facebook</a></li>
              <li><a href="/" className="text-white">Twitter</a></li>
              <li><a href="/" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy 2024 My Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
```
+ `CourseList.js`
```js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteCourseModal = ({ showModal, handleClose, handleDelete }) => {
  return (
    <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="deleteCourseModalLabel" aria-hidden={!showModal} style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteCourseModalLabel">Are you sure?</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>This course will be deleted from the list permanently!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CourseList = () => {
  const [courses, setCourses] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [courseToDelete, setCourseToDelete] = useState(null)
  const navigate = useNavigate()

  const handleNavigateUpdate = (id) => {
    navigate(`/courses/${id}/edit`)
  }

  const handleNavigateDelete = async (id) => {
    setCourseToDelete(id) 
    setShowModal(true)
  }

  const handleDelete = async () => {
    if (courseToDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/courses/${courseToDelete}`)
        setCourses(courses.filter((course) => course._id !== courseToDelete))
        alert('Course deleted successfully!')
        setShowModal(false)
      } catch (error) {
        console.error(error)
        alert('Error deleting course')
        setShowModal(false)
      }
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses')
        setCourses(response.data)
      } catch (error) {
        console.error(error)
        alert('Error fetching courses')
      }
    }
    fetchCourses()
  }, [])

  return (
    <div className="container">
      <h2>Course List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Created At</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course._id}>
              <th scope="row">{index + 1}</th>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{new Date(course.createdAt).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-info" onClick={() => handleNavigateUpdate(course._id)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleNavigateDelete(course._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/add-course')}>
        Add Course
      </button>

      <DeleteCourseModal showModal={showModal} handleClose={handleCloseModal} handleDelete={handleDelete} />
    </div>
  )
}

export default CourseList
```
+ `AddCourse.js`
```js
import { useNavigate } from 'react-router-dom' // Import đúng hook useNavigate
import { useState } from 'react'
import axios from 'axios'

const AddCourse = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [videoId, setVideoId] = useState('')
  const [level, setLevel] = useState('')
  const [energy, setEnergy] = useState('')
  const navigate = useNavigate() // Sử dụng hook useNavigate để điều hướng

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/courses/', {
        name,
        description,
        videoId,
        image: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        level,
        energy,
      })
      navigate('/') // Điều hướng đến trang chủ sau khi thêm khóa học
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  return (
    <div className="mt-4">
      <h3>Add Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Course Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Video ID</label>
          <input
            type="text"
            className="form-control"
            id="video"
            name="video"
            value={videoId}
            onChange={e => setVideoId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">Level</label>
          <input
            type="text"
            className="form-control"
            id="level"
            name="level"
            value={level}
            onChange={e => setLevel(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="energy" className="form-label">Place</label>
          <input
            type="text"
            className="form-control"
            id="energy"
            name="energy"
            value={energy}
            onChange={e => setEnergy(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Course
        </button>
      </form>
    </div>
  )
}

export default AddCourse
```
+ `UpdateCourse.js`
```js
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditCourse = () => {
  const { courseId } = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [videoId, setVideoId] = useState('')
  const [level, setLevel] = useState('')
  const [energy, setEnergy] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}/edit`)
        const course = response.data

        setName(course.name)
        setDescription(course.description)
        setVideoId(course.videoId)
        setLevel(course.level)
        setEnergy(course.energy)
        setLoading(false)
      } catch (err) {
        setError('Failed to load course details')
        setLoading(false)
      }
    }

    fetchCourse()
  }, [courseId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:5000/api/courses/${courseId}`, {
        name,
        description,
        videoId,
        image: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        level,
        energy,
      })

      navigate('/')
    } catch (error) {
      console.error(error)
      alert('Failed to update course. Please try again.')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="mt-4">
      <h3>Edit Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Course Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">
            Video ID
          </label>
          <input
            type="text"
            className="form-control"
            id="video"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">
            Level
          </label>
          <input
            type="text"
            className="form-control"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="energy" className="form-label">
            Place
          </label>
          <input
            type="text"
            className="form-control"
            id="energy"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
            required
          />
        </div>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleSubmit}
        >
          Update Course
        </button>
      </form>
    </div>
  )
}

export default EditCourse
```
+ `Register.js`
```js
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
      })
      navigate('/login')
    } catch (error) {
      console.error(error)
      alert('Error during registration')
    }
  }

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register
```
+ `Login.js`
```js
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      navigate('/courses')
    } catch (error) {
      console.error(error)
      alert('Invalid credentials')
    }
  }

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login
```
### Bước 5: Xây dựng chức năng đăng xuất và phân quyền
- Thêm role vào `UserSchema` trong `models/User.js`
```js
 role: { type: String, default: 'user' },
```
- Cập nhật lại `userControllers.js`
```js
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Đăng ký người dùng
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: 'User already exists' })

    const newUser = new User({
      username,
      email,
      password,
      role: role || 'user',
    })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// Đăng nhập người dùng
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { registerUser, loginUser }
```
- Lưu username và role vào localStorage khi đăng nhập
```jsx
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      })

      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('role', user.role)
      localStorage.setItem('name', user.username)

      if (user.role === 'admin') {
        navigate('/')
      } else {
        navigate('/courses')
      }

      // Thực hiện refresh lại trang
      window.location.reload()
    } catch (error) {
      console.error(error)
      alert('Invalid credentials')
    }
  }

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login

```

- Chỉnh sửa layout
+ Navbar.js
```jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [userRole, setUserRole] = useState(localStorage.getItem('role')) // Lấy giá trị role ban đầu
  const navigate = useNavigate()
  const name = localStorage.getItem('name') // Lấy tên người dùng từ localStorage

  useEffect(() => {
    // Cập nhật role khi localStorage thay đổi
    const updateRole = () => {
      const role = localStorage.getItem('role')
      setUserRole(role)
    }

    // Lắng nghe sự kiện thay đổi trên localStorage
    window.addEventListener('storage', updateRole)

    // Cleanup khi component bị unmount
    return () => {
      window.removeEventListener('storage', updateRole)
    }
  }, [])

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    localStorage.removeItem('name')

    // Cập nhật state ngay lập tức
    setUserRole(null)

    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">CourseApp</Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {/* Hiển thị link Register/Login nếu không có userRole */}
          {!userRole && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </>
          )}

          {/* Hiển thị link Courses luôn */}
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>

          {/* Dropdown chỉ hiển thị nếu userRole là admin */}
          {userRole === 'admin' && (
            <li
              className="nav-link dropdown-toggle nav-item dropdown"
              role="button"
              onClick={toggleDropdown}
            >
              {name}
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''} dropdown-menu-end`}>
                <li><Link className="dropdown-item" to="/add-course">Create course</Link></li>
                <li className="dropdown-divider"></li>
                <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Log out</Link></li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

```

### Bước 6: Kiểm thử unit tests
- Thêm các thư viện cần thiết
```bash
cd backend
npm install --save-dev supertest mongodb-memory-server
```

- Unit test với User trong `test/user/unit.test.js`
```js
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const supertest = require('supertest')
const app = require('../server') // Export app từ file server.js
const User = require('../models/User') // Model User

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create() // Tạo MongoDB giả
  const uri = mongoServer.getUri()
  await mongoose.disconnect() // Đảm bảo đóng mọi kết nối cũ
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Kết nối mới
})

afterAll(async () => {
  await mongoose.disconnect() // Đóng kết nối MongoDB
  await mongoServer.stop() // Dừng MongoDB giả
})

afterEach(async () => {
  await User.deleteMany({}) // Xoá dữ liệu sau mỗi bài test
})

describe('User API Tests', () => {
  describe('User Registration', () => {
    test('Should register a new user successfully', async () => {
      const newUser = {
        username: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'user',
      }

      const response = await supertest(app).post('/api/users/register').send(newUser)

      expect(response.status).toBe(201) // HTTP Created
      expect(response.body).toHaveProperty('user')
      expect(response.body.user.email).toBe(newUser.email)
    })

    test('Should return 400 if email already exists', async () => {
      const existingUser = {
        username: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        role: 'user',
      }

      await User.create(existingUser) // Thêm user vào database trước

      const response = await supertest(app).post('/api/users/register').send(existingUser)

      expect(response.status).toBe(400) // HTTP Bad Request
      expect(response.body.message).toBe('User already exists') // Thông báo lỗi
    })
  })

  describe('User Login', () => {
    test('Should login successfully with valid credentials', async () => {
      const user = {
        username: 'John Smith',
        email: 'john.smith@example.com',
        password: 'password123',
        role: 'user',
      }

      // Tạo user trong database
      await User.create(user)

      const response = await supertest(app).post('/api/users/login').send({
        email: user.email,
        password: user.password,
      })

      expect(response.status).toBe(200) // HTTP OK
      expect(response.body).toHaveProperty('token')
    })

    test('Should return 401 for invalid password', async () => {
      const user = {
        username: 'John Smith',
        email: 'john.smith@example.com',
        password: 'password123',
        role: 'user',
      }

      await User.create(user) // Thêm user vào database

      const response = await supertest(app).post('/api/users/login').send({
        email: user.email,
        password: 'wrongpassword', // Sai mật khẩu
      })

      expect(response.status).toBe(401) // HTTP Unauthorized
      expect(response.body.message).toBe('Invalid credentials')
    })

    test('Should return 404 for non-existent user', async () => {
      const response = await supertest(app).post('/api/users/login').send({
        email: 'nonexistent@example.com',
        password: 'password123',
      })

      expect(response.status).toBe(404) // HTTP Not Found
      expect(response.body.message).toBe('User not found')
    })
  })
})
```
- Fix bug trong `userController.js`
```js
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Đăng ký người dùng
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: 'User already exists' })

    const newUser = new User({
      username,
      email,
      password,
      role: role || 'user',
    })
    await newUser.save()
    const user = newUser
    res.status(201).json({ 
      message: 'User registered successfully' ,
      user,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// Đăng nhập người dùng
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { registerUser, loginUser }
```
- Unit test với `tests/course/unit.test.js`
```js
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const supertest = require('supertest')
const app = require('../server') // Export app từ file server.js
const Course = require('../models/Course') // Model Course

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.disconnect()
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  await Course.deleteMany({})
})

describe('Course Added', () => {
  test('Should create a new course successfully', async () => {
    const newCourse = {
      name: 'React JS',
      description: 'Thiết kế giao diện với ReactJS',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc mọi nơi',
      createdAt: '2024-11-20T07:39:02.583+00:00',
    }

    const response = await supertest(app).post('/api/courses/').send(newCourse)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('course')
    expect(response.body.course.name).toBe(newCourse.name)
  })

  test('Should return 400 if name already exists', async () => {
    const existingCourse = {
      name: 'React JS',
      description: 'Thiết kế giao diện với ReactJS',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc mọi nơi',
      createdAt: '2024-11-20T07:39:02.583+00:00',
    }

    await Course.create(existingCourse)

    const response = await supertest(app).post('/api/courses/').send(existingCourse)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('message', 'Course already exists')
  })
})

describe('Course Getted', () => {
  test('Should fetch all courses successfully', async () => {
    const course = {
      name: 'React JS',
      description: 'Thiết kế giao diện với ReactJS',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc mọi nơi',
      createdAt: '2024-11-20T07:39:02.583+00:00',
    }

    await Course.create(course)

    const response = await supertest(app).get('/api/courses/')

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1)
    expect(response.body[0].name).toBe(course.name)
  })

  test('Should handle server errors gracefully', async () => {
    jest.spyOn(Course, 'find').mockImplementationOnce(() => {
      throw new Error('Database query failed')
    })

    const response = await supertest(app).get('/api/courses/')

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('message', 'Database query failed')
  })
})

describe('Course Edited', () => {
  test('Should fetch a course successfully by ID', async () => {
    const course = await Course.create({
      name: 'Dart Flutter',
      description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ nâng cao',
      energy: 'Học mọi lúc, mọi nơi',
    })

    // Kiểm tra xem khóa học đã được lưu vào cơ sở dữ liệu chưa
    const storedCourse = await Course.findById(course._id)
    expect(storedCourse).toBeDefined()

    const response = await supertest(app).get(`/api/courses/${course._id}/edit`)
    expect(response.status).toBe(200) // Kiểm tra trả về 200 OK
    expect(response.body).toHaveProperty('name', course.name)
  })

  test('Should handle invalid ID gracefully', async () => {
    const invalidId = 'invalid-id'

    const response = await supertest(app).get(`/api/courses/${invalidId}/edit`)
    expect(response.status).toBe(404) // Kiểm tra trả về 404 cho ID không hợp lệ
    expect(response.body).toHaveProperty('message', 'Course not found') // Kiểm tra thông báo lỗi đúng
  })

  test('Should return 404 if course not found', async () => {
    const nonExistentId = new mongoose.Types.ObjectId() // ID không tồn tại trong DB

    const response = await supertest(app).get(`/api/courses/${nonExistentId}/edit`)
    expect(response.status).toBe(404) // Kiểm tra trả về 404
    expect(response.body).toHaveProperty('message', 'Course not found') // Kiểm tra thông báo lỗi
  })
})

describe('Course Updated', () => {
  test('Should update a course successfully by ID', async () => {
    const course = await Course.create({
      name: 'Dart Flutter',
      description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ nâng cao',
      energy: 'Học mọi lúc, mọi nơi',
    })

    const updatedCourseData = {
      name: 'Updated Dart Flutter',
      description: 'Cập nhật mô tả khóa học',
      videoId: 'newVideoId',
      image: 'https://example.com/newimage.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc,mọi nơi',
    }

    const response = await supertest(app)
      .put(`/api/courses/${course._id}`)
      .send(updatedCourseData)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('name', updatedCourseData.name)
    expect(response.body).toHaveProperty('description', updatedCourseData.description)
    expect(response.body).toHaveProperty('videoId', updatedCourseData.videoId)
    expect(response.body).toHaveProperty('image', updatedCourseData.image)
    expect(response.body).toHaveProperty('level', updatedCourseData.level)
    expect(response.body).toHaveProperty('energy', updatedCourseData.energy)
  })

  test('Should return 404 if course not found', async () => {
    const nonExistentId = new mongoose.Types.ObjectId() // Tạo ID không tồn tại trong DB

    const updatedCourseData = {
      name: 'Updated Dart Flutter',
      description: 'Cập nhật mô tả khóa học',
      videoId: 'newVideoId',
      image: 'https://example.com/newimage.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc,mọi nơi',
    }

    const response = await supertest(app)
      .put(`/api/courses/${nonExistentId}`)
      .send(updatedCourseData)

    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('message', 'Course not found')
  })

  test('Should return 500 if there is a server error', async () => {
    const invalidId = 'invalid-id' // ID không hợp lệ

    const updatedCourseData = {
      name: 'Updated Dart Flutter',
      description: 'Cập nhật mô tả khóa học',
      videoId: 'newVideoId',
      image: 'https://example.com/newimage.jpg',
      level: 'Trình độ cơ bản',
      energy: 'Học mọi lúc,mọi nơi',
    }

    const response = await supertest(app)
      .put(`/api/courses/${invalidId}`)
      .send(updatedCourseData)

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('message', 'Server Error')
  })
})

describe('Course Deleted', () => {
  test('Should fetch a course successfully by ID', async () => {
    const course = await Course.create({
      name: 'Dart Flutter',
      description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
      videoId: 'ZTbPz2i2Dms',
      image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
      level: 'Trình độ nâng cao',
      energy: 'Học mọi lúc, mọi nơi',
    })

    const response = await supertest(app).delete(`/api/courses/${course._id}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('message', 'Course deleted successfully')

    // Kiểm tra xem khóa học đã bị xóa chưa
    const deletedCourse = await Course.findById(course._id)
    expect(deletedCourse).toBeNull()
  })

  test('Should return 404 if course not found', async () => {
    const nonExistentId = new mongoose.Types.ObjectId() // ID không tồn tại trong DB

    const response = await supertest(app).delete(`/api/courses/${nonExistentId}`)

    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('message', 'Course not found')
  })

  test('Should return 500 if there is a server error', async () => {
    const invalidId = 'invalid-id' // ID không hợp lệ

    const response = await supertest(app).delete(`/api/courses/${invalidId}`)

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('message', 'Internal Server Error')
  })
})
```
- Fix bug trong `courseController.js`
```js
const Course = require('../models/Course')

class CourseController {
  // Lấy danh sách khóa học
  async getCourses(req, res, next) {
  try {
    const courses = await Course.find()
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: error.message })
    next(error)
  }
}

// Thêm khóa học mới
async  addCourse(req, res, next) {
  try {
    const { name } = req.body

    const existingCourse = await Course.findOne({ name })
    if (existingCourse) {
      return res.status(400).json({ message: 'Course already exists' })
    }

    const newCourse = new Course(req.body)
    await newCourse.save()

    res.status(201).json({ course: newCourse })
  } catch (error) {
    res.status(500).json({ message: error.message })
    next(error)
  }
}

// Đên trang chỉnh sửa khoá học
async editCourse(req, res, next) {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    res.status(200).json(course)
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Course not found' })
    }
    res.status(500).json({ message: err.message })
    next(err)
  }
}


// Chỉnh sửa khoá học
async update(req, res, next) {
  try {
    const { id } = req.params
    const { name, description, videoId, image, level, energy } = req.body
    
    const course = await Course.findById(id)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    // Cập nhật thông tin khóa học
    course.name = name
    course.description = description
    course.videoId = videoId
    course.image = image
    course.level = level
    course.energy = energy

    await course.save()
    res.json(course) // Trả về khóa học đã được cập nhật
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
    next(error)
  }
}

// Xoá khoá học
async delete(req, res, next) {
  try {
    const { id } = req.params
    const deletedCourse = await Course.findByIdAndDelete(id)

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.status(200).json({ message: 'Course deleted successfully', course: deletedCourse })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
    next(error)
  }
}
}


module.exports = new CourseController
```
### Bước 7: Thực hiện kiểm thử integration tests
- Tạo file `tests/user/intergration.test.js` và viết mã sau
```js
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const supertest = require('supertest')
const app = require('../../server') 
const User = require('../../models/User')

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.disconnect()
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  await User.deleteMany({})
})

describe('POST /api/users/register', () => {
  describe('User Registration', () => {
    test('Should register a new user successfully', async () => {
      const newUser = {
        username: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'user',
      }

      const response = await supertest(app).post('/api/users/register').send(newUser)

      expect(response.status).toBe(201) // HTTP Created
      expect(response.body).toHaveProperty('user')
      expect(response.body.user.email).toBe(newUser.email)
    })

    test('Should return 400 if email already exists', async () => {
      const existingUser = {
        username: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        role: 'user',
      }

      await User.create(existingUser) // Thêm user vào database trước

      const response = await supertest(app).post('/api/users/register').send(existingUser)

      expect(response.status).toBe(400) // HTTP Bad Request
      expect(response.body.message).toBe('User already exists') // Thông báo lỗi
    })
  })

  describe('GET /api/users/login', () => {
    test('Should login successfully with valid credentials', async () => {
      const user = {
        username: 'John Smith',
        email: 'john.smith@example.com',
        password: 'password123',
        role: 'user',
      }

      // Tạo user trong database
      await User.create(user)

      const response = await supertest(app).post('/api/users/login').send({
        email: user.email,
        password: user.password,
      })

      expect(response.status).toBe(200) // HTTP OK
      expect(response.body).toHaveProperty('token')
    })

    test('Should return 401 for invalid password', async () => {
      const user = {
        username: 'John Smith',
        email: 'john.smith@example.com',
        password: 'password123',
        role: 'user',
      }

      await User.create(user) // Thêm user vào database

      const response = await supertest(app).post('/api/users/login').send({
        email: user.email,
        password: 'wrongpassword', // Sai mật khẩu
      })

      expect(response.status).toBe(401) // HTTP Unauthorized
      expect(response.body.message).toBe('Invalid credentials')
    })

    test('Should return 404 for non-existent user', async () => {
      const response = await supertest(app).post('/api/users/login').send({
        email: 'nonexistent@example.com',
        password: 'password123',
      })

      expect(response.status).toBe(404) // HTTP Not Found
      expect(response.body.message).toBe('User not found')
    })
  })
})
```

- Tại file `tests/course/intergration.test.js`
```js
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const supertest = require('supertest')
const app = require('../../server') 
const Course = require('../../models/Course')

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.disconnect()
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

afterEach(async () => {
  await Course.deleteMany({})
})

describe('POST /api/courses', () => {
    test('Should create a new course successfully', async () => {
      const newCourse = {
        name: 'React JS',
        description: 'Thiết kế giao diện với ReactJS',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc mọi nơi',
        createdAt: '2024-11-20T07:39:02.583+00:00',
      }
  
      const response = await supertest(app)
        .post('/api/courses')
        .send(newCourse)
  
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('course')
      expect(response.body.course.name).toBe(newCourse.name)
    })
  
    test('Should return 400 if name already exists', async () => {
      const existingCourse = {
        name: 'React JS',
        description: 'Thiết kế giao diện với ReactJS',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc mọi nơi',
        createdAt: '2024-11-20T07:39:02.583+00:00',
      }
  
      await Course.create(existingCourse)
  
      const response = await supertest(app)
        .post('/api/courses')
        .send(existingCourse)
  
      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('message', 'Course already exists')
    })
  })
  
  describe('GET /api/courses', () => {
    test('Should fetch all courses successfully', async () => {
      const course = {
        name: 'React JS',
        description: 'Thiết kế giao diện với ReactJS',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc mọi nơi',
        createdAt: '2024-11-20T07:39:02.583+00:00',
      }
  
      await Course.create(course)
  
      const response = await supertest(app).get('/api/courses')
  
      expect(response.status).toBe(200)
      expect(response.body.length).toBe(1)
      expect(response.body[0].name).toBe(course.name)
    })
  
    test('Should handle server errors gracefully', async () => {
      jest.spyOn(Course, 'find').mockImplementationOnce(() => {
        throw new Error('Database query failed')
      })
  
      const response = await supertest(app).get('/api/courses/')
  
      expect(response.status).toBe(500)
      expect(response.body).toHaveProperty('message', 'Database query failed')
    })
  })
  
  describe('GET /api/courses/:id/edit', () => {
    test('Should fetch a course successfully by ID', async () => {
      const course = await Course.create({
        name: 'Dart Flutter',
        description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ nâng cao',
        energy: 'Học mọi lúc, mọi nơi',
      })
  
      // Kiểm tra xem khóa học đã được lưu vào cơ sở dữ liệu chưa
      const storedCourse = await Course.findById(course._id)
      expect(storedCourse).toBeDefined()
  
      const response = await supertest(app).get(`/api/courses/${course._id}/edit`)
      expect(response.status).toBe(200) // Kiểm tra trả về 200 OK
      expect(response.body).toHaveProperty('name', course.name)
    })
  
    test('Should handle invalid ID gracefully', async () => {
      const invalidId = 'invalid-id'
  
      const response = await supertest(app).get(`/api/courses/${invalidId}/edit`)
      expect(response.status).toBe(404) // Kiểm tra trả về 404 cho ID không hợp lệ
      expect(response.body).toHaveProperty('message', 'Course not found') // Kiểm tra thông báo lỗi đúng
    })
  
    test('Should return 404 if course not found', async () => {
      const nonExistentId = new mongoose.Types.ObjectId() // ID không tồn tại trong DB
  
      const response = await supertest(app).get(`/api/courses/${nonExistentId}/edit`)
      expect(response.status).toBe(404) // Kiểm tra trả về 404
      expect(response.body).toHaveProperty('message', 'Course not found') // Kiểm tra thông báo lỗi
    })
  })
  
  describe('PUT /api/course/:id', () => {
    test('Should update a course successfully by ID', async () => {
      const course = await Course.create({
        name: 'Dart Flutter',
        description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ nâng cao',
        energy: 'Học mọi lúc, mọi nơi',
      })
  
      const updatedCourseData = {
        name: 'Updated Dart Flutter',
        description: 'Cập nhật mô tả khóa học',
        videoId: 'newVideoId',
        image: 'https://example.com/newimage.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc,mọi nơi',
      }
  
      const response = await supertest(app)
        .put(`/api/courses/${course._id}`)
        .send(updatedCourseData)
  
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('name', updatedCourseData.name)
      expect(response.body).toHaveProperty('description', updatedCourseData.description)
      expect(response.body).toHaveProperty('videoId', updatedCourseData.videoId)
      expect(response.body).toHaveProperty('image', updatedCourseData.image)
      expect(response.body).toHaveProperty('level', updatedCourseData.level)
      expect(response.body).toHaveProperty('energy', updatedCourseData.energy)
    })
  
    test('Should return 404 if course not found', async () => {
      const nonExistentId = new mongoose.Types.ObjectId() // Tạo ID không tồn tại trong DB
  
      const updatedCourseData = {
        name: 'Updated Dart Flutter',
        description: 'Cập nhật mô tả khóa học',
        videoId: 'newVideoId',
        image: 'https://example.com/newimage.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc,mọi nơi',
      }
  
      const response = await supertest(app)
        .put(`/api/courses/${nonExistentId}`)
        .send(updatedCourseData)
  
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message', 'Course not found')
    })
  
    test('Should return 500 if there is a server error', async () => {
      const invalidId = 'invalid-id' // ID không hợp lệ
  
      const updatedCourseData = {
        name: 'Updated Dart Flutter',
        description: 'Cập nhật mô tả khóa học',
        videoId: 'newVideoId',
        image: 'https://example.com/newimage.jpg',
        level: 'Trình độ cơ bản',
        energy: 'Học mọi lúc,mọi nơi',
      }
  
      const response = await supertest(app)
        .put(`/api/courses/${invalidId}`)
        .send(updatedCourseData)
  
      expect(response.status).toBe(500)
      expect(response.body).toHaveProperty('message', 'Server Error')
    })
  })
  
  describe('DELETE /api/courses/:id', () => {
    test('Should fetch a course successfully by ID', async () => {
      const course = await Course.create({
        name: 'Dart Flutter',
        description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
        videoId: 'ZTbPz2i2Dms',
        image: 'https://img.youtube.com/vi/ZTbPz2i2Dms/mqdefault.jpg',
        level: 'Trình độ nâng cao',
        energy: 'Học mọi lúc, mọi nơi',
      })
  
      const response = await supertest(app).delete(`/api/courses/${course._id}`)
  
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('message', 'Course deleted successfully')
  
      // Kiểm tra xem khóa học đã bị xóa chưa
      const deletedCourse = await Course.findById(course._id)
      expect(deletedCourse).toBeNull()
    })
  
    test('Should return 404 if course not found', async () => {
      const nonExistentId = new mongoose.Types.ObjectId() // ID không tồn tại trong DB
  
      const response = await supertest(app).delete(`/api/courses/${nonExistentId}`)
  
      expect(response.status).toBe(404)
      expect(response.body).toHaveProperty('message', 'Course not found')
    })
  
    test('Should return 500 if there is a server error', async () => {
      const invalidId = 'invalid-id' // ID không hợp lệ
  
      const response = await supertest(app).delete(`/api/courses/${invalidId}`)
  
      expect(response.status).toBe(500)
      expect(response.body).toHaveProperty('message', 'Internal Server Error')
    })
  })
```
### Bước 8: Kiểm thử E2E(End-to-End) với Cypress
- Tạo file `cypress.config.js` tại thư mục gốc của `my-course-app`
```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
})
```

- Viết kịch bản kiểm thử với user trong `cypress/e2e/user.cy.js`
```js
describe('User Registration', () => {
    it('should register a new user successfully', () => {
      cy.visit('http://localhost:3000/register')
  
      cy.get('#username').type('newuser')
      cy.get('#email').type('newuser@example.com')
      cy.get('#password').type('password123')
      cy.get('button[type="submit"]').click()
  
      cy.url().should('include', '/login')
      cy.get('.alert-danger').should('not.exist')
    })
  
    it('should show error on duplicate email', () => {
      cy.visit('http://localhost:3000/register')
      cy.get('#username').type('newuser')
      cy.get('#email').type('newuser@example.com')
      cy.get('#password').type('password123')
      cy.get('button[type="submit"]').click()
  
      cy.get('.alert-danger').should('exist')
    })
  })

  describe('User Login', () => {
    it('should log in successfully with valid credentials', () => {
      cy.visit('http://localhost:3000/login')
  
      cy.get('#email').type('newuser@example.com')
      cy.get('#password').type('password123')
      cy.get('button[type="submit"]').click()
  
      cy.url().should('include', '/')
      cy.get('.alert-danger').should('not.exist')
    })
  
    it('should show error with invalid credentials', () => {
      cy.visit('http://localhost:3000/login')
  
      cy.get('#email').type('nonexistentuser@example.com')
      cy.get('#password').type('wrongpassword')
      cy.get('button[type="submit"]').click()

      cy.get('.alert-danger').should('exist')
    })
  })
```

- Viết kịch bản kiểm thử course trong `cypress/e2e/course.cy.js`
```js
describe('Add Course', () => {
    it('should add a course successfully', () => {
        cy.visit('/add-course')
    
        cy.get('#name').type('New Course')
        cy.get('#description').type('Course description')
        cy.get('#video').type('abc123')
        cy.get('#level').type('Beginner')
        cy.get('#energy').type('High')
    
        cy.get('button[type="submit"]').click()
    
        cy.url().should('include', '/')
    })
})

describe('Get Courses', () => {
    it('should fetch the list of courses successfully', () => {
      cy.intercept('GET', 'http://localhost:5000/api/courses', {
        statusCode: 200,
        body: [
          {
            name: 'React Basics',
            description: 'Learn the fundamentals of React.',
            videoId: 'abc123',
            image: 'https://img.youtube.com/vi/abc123/mqdefault.jpg',
            level: 'Beginner',
            energy: 'High',
          },
          {
            name: 'Advanced Node.js',
            description: 'Dive deep into Node.js and backend development.',
            videoId: 'def456',
            image: 'https://img.youtube.com/vi/def456/mqdefault.jpg',
            level: 'Advanced',
            energy: 'Medium',
          },
        ],
      }).as('getCourses')
  
      cy.visit('/courses')
  
      cy.wait('@getCourses')
    })
  })


  describe('Edit Courses', () => {
    it('should fetch the course successfully', () => {
      const courseId = '673d92163452b3b757238858'
      cy.intercept('GET', `http://localhost:5000/api/courses/${courseId}/edit`, {
        statusCode: 200,
        body: {
          name: 'Dart Flutter',
          description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
          videoId: 'ZTbPz2i2Dms',
          level: 'Trình độ nâng cao',
          energy: 'Học mọi lúc,mọi nơi',
        }
      }).as('getCourse')

      cy.visit(`/courses/${courseId}/edit`)
  
      cy.wait('@getCourse')
  
      cy.wait('@getCourse').its('response.statusCode').should('eq', 200)

      cy.get('#name').should('have.value', 'Dart Flutter')
      cy.get('#description').should('have.value', 'Phát triển ứng dụng mobile app bằng Dart và Flutter')
      cy.get('#video').should('have.value', 'ZTbPz2i2Dms')
      cy.get('#level').should('have.value', 'Trình độ nâng cao')
      cy.get('#energy').should('have.value', 'Học mọi lúc,mọi nơi')
    })
  })

  describe('Update Course', () => {
    it('should update the course successfully', () => {
      const courseId = '673d92163452b3b757238858'
      const updatedCourse = {
        name: 'Dart Flutter',
        description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
        videoId: 'ZTbPz2i2Dms',
        level: 'Trình độ nâng cao',
        energy: 'Học mọi lúc,mọi nơi'
      }
  
      cy.intercept('GET', `http://localhost:5000/api/courses/${courseId}/edit`, {
        statusCode: 200,
        body: {
          name: 'Dart Flutter 2',
          description: 'Phát triển ứng dụng mobile app bằng Dart và Flutter',
          videoId: 'ZTbPz2i2Dms',
          level: 'Trình độ nâng cao',
          energy: 'Học mọi lúc,mọi nơi',
        },
      }).as('getCourse')
  
      cy.intercept('PUT', `http://localhost:5000/api/courses/${courseId}`, {
        statusCode: 200,
        body: {
          message: 'Course updated successfully',
          course: updatedCourse,
        },
      }).as('updateCourse')
  
      cy.visit(`/courses/${courseId}/edit`)
  
      cy.get('#name').clear().type(updatedCourse.name)
      cy.get('#description').clear().type(updatedCourse.description)
      cy.get('#video').clear().type(updatedCourse.videoId)
      cy.get('#level').clear().type(updatedCourse.level)
      cy.get('#energy').clear().type(updatedCourse.energy)
  
      cy.get('button[type="submit"]').click()
  
      cy.wait('@updateCourse')
        .then((interception) => {
          expect(interception.request.body).to.deep.equal({
            name: updatedCourse.name,
            description: updatedCourse.description,
            videoId: updatedCourse.videoId,
            image: `https://img.youtube.com/vi/${updatedCourse.videoId}/mqdefault.jpg`,
            level: updatedCourse.level,
            energy: updatedCourse.energy,
          })
          expect(interception.response.statusCode).to.eq(200)
        })

      cy.url().should('include', '/')
      cy.get('.alert-info').should('not.exist')
    })
  })
  
  describe('Delete Course', () => {
    beforeEach(() => {
      // Thiết lập API giả lập và dữ liệu ban đầu
      cy.intercept('GET', 'http://localhost:5000/api/courses', {
        statusCode: 200,
        body: [
          {
            _id: '123',
            name: 'React Basics',
            description: 'Learn the basics of React',
            createdAt: new Date().toISOString(),
          },
          {
            _id: '456',
            name: 'Node.js Fundamentals',
            description: 'Understand core concepts of Node.js',
            createdAt: new Date().toISOString(),
          },
        ],
      }).as('getCourses')
  
      cy.intercept('DELETE', 'http://localhost:5000/api/courses/123', {
        statusCode: 200,
        body: { message: 'Course deleted successfully' },
      }).as('deleteCourse')
  
      localStorage.setItem('role', 'admin')
  
      cy.visit('/courses')
      cy.wait('@getCourses')
    })
  
    it('should delete a course successfully', () => {
      cy.get('.courseItem').contains('React Basics').should('exist')
  
      cy.contains('React Basics')
        .parent()
        .find('.btn-danger')
        .click()
      cy.contains('This course will be deleted').should('be.visible')
      cy.contains('Delete').click()
  
      cy.wait('@deleteCourse').its('response.statusCode').should('eq', 200)
  
      cy.get('.courseItem').contains('React Basics').should('not.exist')
    })
  
    it('should cancel deletion', () => {
      cy.contains('React Basics')
        .parent()
        .find('.btn-danger')
        .click()
      cy.contains('This course will be deleted').should('be.visible')
      cy.contains('Cancel').click()
  
      cy.get('.courseItem').contains('React Basics').should('exist')
    })
  })  
```
### Bước 9: Phát triển ứng dụng
## Tự đánh giá:
- Trang web đã đáp ứng được những tiêu chí được đề ra sau:
+ **5/10**: Hoàn thành các chức năng cơ bản của ứng dụng web động, bao gồm giao diện người dùng, server backend với Node.js và Express (hoặc framework khác), và các thao tác CRUD cơ bản.
+ **6/10**: Thực hiện kiểm thử đơn vị (unit tests) và kiểm thử tích hợp (integration tests) cho các chức năng chính của ứng dụng.
+ **7/10**: Thực hiện kiểm thử End-to-End (E2E) với Cypress và đảm bảo các luồng thao tác chính hoạt động đúng.
+ **8/10**: Tích hợp ứng dụng với một CSDL (ví dụ: MongoDB, MySQL) hoặc dịch vụ backend như Firebase để lưu trữ và quản lý dữ liệu.
+ Đã thêm video chạy thử ứng dụng(Trong folder /Video)
<video controls src="Video/test e2e.mp4" title="Title"></video>
<video controls src="Video/video chạy test.mp4" title="Title"></video>
<video controls src="Video/Video chạy thử ứng dụng.mp4" title="Title"></video>
+ Có file mô tả ứng dụng và quá trình thực hiện
=> Kết luận: 8 điểm