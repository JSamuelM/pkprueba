<template>
  <nav class="d-flex">
    <a class="navbar-logo">
      <img src="@/assets/favicon.png" height="40" alt="logo">
    </a>
    <div class="d-flex buttons">
      <button type="button">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

nav
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  padding 0.5rem
.navbar-logo
  flex: 1
button
  background: #0dcaf0
  border: 1px solid #0dcaf0
  cursor: pointer
  height: 40
  padding: 5px 10px

</style>