## ATPGS - Automatic-test-paper-generation-system

### 背景

完成结对编程项目

### 项目需求

**带UI的小初高数学学习软件（自动生成题目练习）**

- 注册功能（提供手机号，收到注册码，验证注册）
  - [ ] 提供手机号，返回注册码
  - [ ] 检查是否重复
  - [ ] 注册码验证
  - [ ] 验证成功后设置密码，密码需要两次输入
  - [ ] 密码格式验证（6-10位，必须含大小写字母和数字）
- 登录状态
  - 修改密码
    - [ ] 需要正确输入原密码
    - [ ] 两次输入新密码且符合格式，如上
    - [ ] 显示修改成功
  - 做题练习
    - [ ] 选项有小初高sange
    - [ ] 然后选择题目数量
    - [ ] 生成题目：同个人项目
    - [ ] 生成试卷，每次显示一道题
    - [ ] 选好后点击下一题相当于提交，没选提醒
    - [ ] 最后一题提交完给出分数
    - [ ] 回到做题系统首页

### 开发环境依赖

1. Node

   `brew install node`

2. Watchman

   `brew install watchman`

3. React Native脚手架

   `npm install -g react-native-cli`

4. 运行应用，ios应用必须在macOS下运行

   `react-native run-ios`