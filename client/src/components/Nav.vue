<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div
                id="navbarBasicExample"
                class="navbar-menu"
                :class="{ 'is-active': active }"
        >
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Homepage</router-link>
                <router-link to="/rooms" class="navbar-item">Rooms</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        active: false
      };
    }
  };
</script>

<style lang="scss">
    @import "../styles/variables.scss";

    .router-link-exact-active,
    .navbar-item:hover {
        color: $primary !important;
        background-color: #fafafa;
    }
</style>