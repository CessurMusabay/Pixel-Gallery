<template>
  <div class="animate__animated  animate__backInDown">
    <el-input
        class="w-50 m-2"
        size="large"
        placeholder="Search photo ..."
        suffix-icon="search"
        v-model.lazy.trim="query"
        @keyup.enter="$store.dispatch('search')"
    />
  </div>

</template>

<script>

export default {
  name: "search-bar",
  computed: {
    query: {
      get() {
        return this.$store.state.query
      },
      set(value) {
        this.$store.commit('updateQuery', value)
      }
    }
  }
}
</script>

<style scoped>

</style>