<template>
  <v-app>
    <my-loading></my-loading>
  </v-app>
</template>

<script>
import MyLoading from './components/MyLoading.vue';
export default {
  components: { MyLoading },
  name: 'App',

  data: () => ({
    //
  }),
  created() {
    this.$loading.hide();

    setTimeout(() => {
      this.$loading.show();
    }, 3000);
    
    this.$loading.hide();
  }
};
</script>
