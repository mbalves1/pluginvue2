import MyLoading from "@/components/MyLoading.vue";

export default (() => {
  const installable = MyLoading; 
  
  installable.install = (Vue) => {
    Vue.prototype.$loading = {
      show() {
        const loadingComponent = Vue.extend(MyLoading);
        const vm = new loadingComponent({
          el: document.createElement("div"),
          propsData: {
            isLoading: true,
          },
        });
        document.body.appendChild(vm.$el);
      },
      hide() {
        const loadingEl = document.querySelector(".my-loading");
        if (loadingEl) {
          loadingEl.remove();
        }
      },
    };
  }
  return installable;
})();