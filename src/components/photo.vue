<template>
  <div class="animate__animated animate__backInUp img-container">
    <img :src="src" style="display: none" @load="onImgLoad"/>
    <el-skeleton
        style="width: 100%"
        :loading="loading"
        animated
        :throttle="500">
      <template #template>
        <el-skeleton-item variant="image" style="width: 100%;" :style="{'height: 300px': loading}"/>
      </template>
      <template #default>
        <el-image :src="src"/>
      </template>
    </el-skeleton>

  </div>
</template>

<script>
export default {
  name: "photo",
  props: ['src'],
  data() {
    return {
      loading: true,
    }
  },
  methods: {
    onImgLoad() {
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>