<template>

  <div class="">
    <p class="animate__animated animate__backInDown" v-show="$store.getters.hasImage">
      {{ $store.getters.imageResult }}
    </p>
    <el-row>
      <el-col v-for="photo in $store.state.photos" :span="24">

        <div class="animate__animated animate__backInUp img-container">
          <photo :src="photo.src.original"/>
        </div>
      </el-col>

    </el-row>

    <div class="pagination-container animate__animated animate__backInUp">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="$store.state.total_results"
          class="mt-4"
          :page-size="20"
          @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
import photo from "@/components/photo.vue";

export default {
  name: "image-container",
  components: {
    photo,
  },
  methods: {
    pageChange(page) {
      this.$store.commit('changePage', page);
      this.$store.dispatch('search');
    }
  },

}
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-direction: column;
}

.img-container img {
  object-fit: contain;
  width: 100%;
  border-radius: 10px;
}


.pagination-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

</style>