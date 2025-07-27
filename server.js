const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// 登录接口
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === '123' && password === '123') {
    res.send({ message: '登录成功！' });
  } else {
    res.status(400).send({ message: '用户名或密码错误！' });
  }
});

// ✅ 注册接口（你要加的地方）
app.post('/register', (req, res) => {
  console.log('收到注册请求:', req.body);  // 👈 打印数据
  res.send({ message: '注册成功！' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
