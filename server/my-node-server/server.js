const express = require("express");
const app = express();
const port = 3000; // Chọn một cổng cho máy chủ của bạn
const { dbUser, dbname, dbpassword } = require("./../../config");
const mysql = require("mysql2");
const con = mysql.createConnection({
  user: dbUser,
  database: dbname,
  password: dbpassword,
});
// Middleware để xử lý các yêu cầu JSON
app.use(express.json());

app.get("/user", (req, res) => {
  con.query("SELECT * FROM user", async (Err, result) => {
    if (Err) {
      throw Err;
    }
    if (result[0]) {
      const data = result
      return res.json(data);
    }
  });
});
app.get("/Test_api_02", (req, res) => {
  return res.json({ data: "Dữ liệu trả về khi bấm vào text" });
});
app.get("/test_api", (req, res) => {
  return res.json({ data: "đây là dữ liệu test từ api" });
});
app.get("/", (req, res) => {
  return res.send("hello");
});
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server nodejs is running on port ${port}`);
});
