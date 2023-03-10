<template>
  <div class="my-loading">
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64" color="blue darken-4" class="asd"/>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "MyLoading",
  props: {
    isLoading: Boolean,
  },
};
</script>

<style scoped>
.my-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
}
.asd {
  color: #1565C0;
}
</style>