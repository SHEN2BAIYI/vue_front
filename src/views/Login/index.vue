<script setup>

import vueLogo from '@/assets/images/logo.png'
import { ref } from 'vue'


const password = ref('')
</script>

<template>
    <div class="login">
        <el-row :gutter="10" class="login-container">
            <el-form ref="validateForm" label-width="1em" class="login-body"
                     hide-required-asterisk="hide-required-asterisk">
                <el-image class="login-logo" :src="vueLogo" />
                <el-form-item >
                    <el-input  placeholder="请输入用户名称">
                      <template #prefix>
                        <i class="iconfont icon-user"></i>
                      </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="password" type="password" placeholder="请输入密码" show-password>
                      <template #prefix>
                        <i class="iconfont icon-lock"></i>
                      </template>
                    </el-input>
                </el-form-item>
<!--                <el-form-item prop="imgCode">-->
<!--                    <el-row>-->
<!--                        <el-col :span="14">-->
<!--                            <el-input prefix-icon="el-icon-message"-->
<!--                                      placeholder="请输入验证码"></el-input>-->
<!--                        </el-col>-->
<!--                        <el-col :span="9" :offset="1">-->
<!--                            <VueImgVerify ref="verifyRef"></VueImgVerify>-->
<!--                        </el-col>-->
<!--                    </el-row>-->
<!--                </el-form-item>-->
                <el-form-item>
                    <el-button type="text">忘记密码？</el-button>
                </el-form-item>
                <el-form-item class="login-body-button">
                    <el-button class="login-submit" type="danger" round>登录</el-button>
                </el-form-item>
            </el-form>
        </el-row>
    </div>
</template>

<style lang="scss">
.login {
  background-color: #17171E;
  width: 100%;
  height: 100vh;

  .login-logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 2rem auto;
  }

  .login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(233, 233, 233, 0.3);
    border-radius: 0.4rem;
    border: 1px white solid;
    padding: 0.8rem;

    .login-body {
      padding: 1rem 2rem;
      background: rgba(233, 233, 233, 0.6);
      width: 25rem;
      border-radius: 0.2rem;
    }
  }

  .el-input__inner {
    border-radius: 20px;
  }

  .codeImg {
    height: 40px;
  }

  .login-submit {
    width: 100%;
  }
}
</style>