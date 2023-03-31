<script>
import searchBar from "@/components/search-bar.vue";
import imageContainer from "@/components/image-container.vue";

export default {
  components: {
    searchBar,
    imageContainer,
  }
}

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <search-bar></search-bar>
      </el-header>
      <el-main>
        <image-container/>
      </el-main>
    </el-container>
  </div>

</template>

<style scoped>

</style>
