<template >
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item"><strong>📻 Platzi Music</strong></div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="navbar-item" to="/">Buscar</router-link>
            <router-link class="navbar-item"  to="/about">Nosostros</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que están Vue-nísimas </h2>
        <PmPlayer/>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from "@/views/pmPlayer.vue";

export default {
  components: {PmPlayer}
}
</script>

<style>
</style>

