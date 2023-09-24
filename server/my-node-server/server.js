const express = require("express");
const app = express();
const port = 3000; // Chọn một cổng cho máy chủ của bạn

// Middleware để xử lý các yêu cầu JSON
app.use(express.json());

// Route mẫu
app.get("/Test_api_02", (req, res) => {
    return res.json({data : "Dữ liệu trả về khi bấm vào text"})
  });
app.get("/test_api", (req, res) => {
  return res.json({data : "đây là dữ liệu test từ api"})
});
app.get("/", (req, res) => {
    return res.send("hello")
  });
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
