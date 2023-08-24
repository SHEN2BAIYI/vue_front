<script setup>
import { ref } from 'vue'
import { useUserStore } from "@/stores/userStore"
import { ElMessage } from "element-plus"
import router from '@/router'

// 导入用户相关 store
const userStore = useUserStore()

// 表单校验 (用户名 + 密码 + 条款)
// 1.准备表单对象和数据模型
const formRef = ref(null)
const formModel = ref({
  account: '',
  password: '',
  agree: true
})

// 2.准备校验规则
const loginRules = {
  account: [
    {required: true, message: '用户名不能为空', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 6, max: 14, message: '密码字符数为6-14', trigger: 'blur'}
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
          if (value) {
            callback()
          } else {
            callback(new Error('请勾选协议'))
          }
      }
    }
  ]
}

// 3.点击登陆时进行统一校验
const doLogin = () => {
  const { account, password } = formModel.value
  console.log(account, password)
  formRef.value.validate( async (valid) => {
    if (valid){
      // 登录，获得用户信息
      await userStore.getUserInfo({ account, password})

      // 1.提示用户
      ElMessage({type: 'success', message: '登录成功'})

      // 2.跳转聊天室
      await router.push({
        name: 'ChatHome'
      })
    }
  })
}

</script>


<template>
  <div class="login-container">
    <div class="login-wrapper">
      <!--  表单元素  -->
      <el-form ref="formRef" :model="formModel" :rules="loginRules"
               label-position="right" label-width="60px" status-icon>
        <!--  账号  -->
        <el-form-item label="账户" prop="account">
          <el-input v-model="formModel.account">

          </el-input>
        </el-form-item>

        <!--  密码  -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="formModel.password">

          </el-input>
        </el-form-item>

        <!--  用户条款  -->
        <el-form-item label-width="22px" prop="agree">
          <el-checkbox size="large" v-model="formModel.agree">
            我已同意隐私条款和服务条例
          </el-checkbox>
        </el-form-item>

        <!--  登录按钮  -->
        <el-button size="large" @click="doLogin">
          登录
        </el-button>

      </el-form>
    </div>

  </div>
</template>


<style lang="scss">
.login-container {
  width: 380px;
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  user-select: none;
  -webkit-user-drag:none;

  .el-form {
    padding: 20px 20px 20px 20px;

    &-item {
      margin: 0 0 25px 0 !important;;

      input {
      }

      &__label {
        color: rgb(117, 120, 137);
        font-weight: bold;
      }

      &__error {
        margin-top: 4px;
      }

    }

    // checkbox 样式调整
    .el-checkbox {
      height: 25px !important;
    }
    .is-checked{
      .el-checkbox__label {
        color: rgb(117, 120, 137);
        font-weight: bold;
      }
    }

    // button 样式调整
    .el-button {
      width: 100%;
      border: none;
      background-color: rgb(117, 120, 137);

      &:hover {
          color: #fff !important;
      }
    }

  }
}



</style>