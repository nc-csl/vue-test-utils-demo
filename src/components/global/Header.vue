<template>
  <header class="header">
    <div class="row">
      <div class="col">
        <div class="logo" />
      </div>
      <div class="col-md-auto">
        <nav class="cvr-top-nav">
          <div class="navbar navbar-primary">
            <div class="navbar-inner container">
              <ul class="nav-primary">
                <li>
                  <a href="#" class="nav-link">
                    <span>Mit Virk</span>
                  </a>
                </li>
                <div class="seperator"></div>
                <li>
                  <a href="#" class="nav-link">
                    <span>Digital Post</span>
                  </a>
                </li>
                <div class="seperator"></div>
                <li>
                  <a href="#" class="nav-link">
                    <span>Log på</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Header extends Vue {}
</script>
<style lang="scss"></style>
