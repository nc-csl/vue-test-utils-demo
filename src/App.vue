<template>
  <div id="cvr-paa-virk">
    <div class="layout">
      <a id="skip-nav" href="#main-content" class="sr-only">
        Gå direkte til indhold
      </a>
      <Header></Header>
    </div>
  </div>
</template>
<script lang="ts">
import { Options } from "vue-class-component";
import Header from "@/components/global/Header.vue";
import VueBase from "@/VueBase.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends VueBase {}
</script>
<style lang="scss"></style>
