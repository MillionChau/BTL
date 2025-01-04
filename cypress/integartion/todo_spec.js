describe('Todo App E2E', () => {
  
    // Kiểm tra trang Todo có tải đúng không
    it('should load the main page', () => {
      cy.visit('/')  // Truy cập vào trang chính của ứng dụng
      cy.contains('Todo App')  // Kiểm tra xem có tiêu đề "Todo App" không
    })
  
    // Kiểm tra việc thêm một Todo mới
    it('should add a new Todo', () => {
      cy.visit('/')  // Truy cập vào trang chính
      cy.get('#todoName').type('New Todo')  // Nhập tên Todo
      cy.get('#todoDescription').type('Description of new todo')  // Nhập mô tả
      cy.get('#addTodoButton').click()  // Nhấn nút để thêm Todo
      
      // Kiểm tra Todo mới đã được thêm vào danh sách
      cy.get('#todosContainer').should('contain', 'New Todo')
      cy.get('#todosContainer').should('contain', 'Description of new todo')
    })
  
    // Kiểm tra việc thêm Todo khi đã tồn tại
    it('should show error if todo already exists', () => {
      cy.visit('/')  // Truy cập vào trang chính
      cy.get('#todoName').type('New Todo')  // Nhập tên Todo đã tồn tại
      cy.get('#todoDescription').type('Description of new todo')  // Nhập mô tả
      cy.get('#addTodoButton').click()  // Nhấn nút thêm Todo
      
      // Kiểm tra thông báo lỗi
      cy.contains('Todo already exists')
    })
  })
  