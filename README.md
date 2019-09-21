## ATPGS - Automatic-test-paper-generation-system

### 背景

完成结对编程项目

### 项目需求

**带UI的小初高数学学习软件（自动生成题目练习）**

- 页面
  - [x] 注册
  - [x] 登录
  - [x] 登录状态下的做题选项
  - [ ] 修改密码
  - [x] 题目练习

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
    - [x] 选项有小初高sange
    - [x] 然后选择题目数量
    - [x] 生成题目：同个人项目
    - [x] 生成试卷，每次显示一道题
    - [x] 选好后点击下一题相当于提交，没选提醒
    - [x] 最后一题提交完给出分数
    - [x] 回到做题系统首页

### 开发环境依赖

1. Node

   `brew install node`

2. Watchman

   `brew install watchman`

3. React Native脚手架

   `npm install -g react-native-cli`

4. React Native 路由

   `yarn add react-navigation`

   `yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23`

   `cd ios`

   `pod install`

5. 运行应用，ios应用必须在macOS下运行

   `react-native run-ios`

6. 调试环境

   `yarn add react-devtools`

7. clone后环境配置(无需前面步骤)

   1. 安装依赖

      `yarn install`

   2. 安装Cocoapods

      `cd ios`先进入ios文件夹

      `sudo gem install cocoapods`

      `pod install`

   3. 运行

      `react-native run-ios`


### 路由配置

```js
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions
    },
    Main: {
      screen: Main,
      navigationOptions
    },
    Reg: {
      screen: Register,
      navigationOptions
    },
    ChangePWD: {
      screen: ChangePassword,
      navigationOptions
    },
    Paper: {
      screen: Paper,
      navigationOptions
    },
  },
  {
    initialRouteName: 'Home',
  },
);
```

