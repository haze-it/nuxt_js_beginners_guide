<template>
  <div>
    <h2>ログイン</h2>
    <p>
      <button type="button" @click="login">ログイン</button><br>
      <nuxt-link to="/">トップページ</nuxt-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'
export default {
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 90 })
      this.$router.push('/')
    }
  }
}
</script>