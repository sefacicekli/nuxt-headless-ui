<template>
  <div>
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/common/Header"
import Footer from "../components/common/Footer";
export default {
  name: "default",
  components: {Header,Footer}

}
</script>

<style scoped>

</style>
