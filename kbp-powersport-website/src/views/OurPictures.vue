<template>
  <div class="pictures-page">
    <Tagline />

    <section class="gallery">
      <div class="gallery-row">
        <figure v-for="n in 3" :key="n" class="thumb">
          <img :src="`../assets/pictures/action_${n}.jpg`" :alt="`Action ${n}`" />
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'Pictures',
  components: { Tagline }
}
</script>

<style scoped>
.gallery-row { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; padding:1rem; }
.thumb img { width:320px; height:200px; object-fit:cover; border-radius:10px; }
@media (max-width:768px) { .thumb img { width:90%; height:auto; } }
</style>
