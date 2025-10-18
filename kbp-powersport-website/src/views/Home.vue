<template>
  <div class="home">
    <Tagline />

    <section class="gallery">
      <div class="gallery-row">
        <img src="../assets/pictures/action_1.jpg" alt="Action Shot 1" />
        <img src="../assets/pictures/action_2.jpg" alt="Action Shot 2" />
      </div>
      <div class="gallery-row">
        <img src="../assets/pictures/action_3.jpg" alt="Action Shot 3" />
        <img src="../assets/pictures/action_4.jpg" alt="Action Shot 4" />
      </div>
    </section>

    <section class="cta">
      <h2>Ready to Ride?</h2>
      <router-link to="/contact" class="cta-button">Contact Us</router-link>
    </section>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'Home',
  components: { Tagline }
}
</script>

<style scoped>
.home { text-align: center; }

/* gallery + CTA same as before (kept tight) */
.gallery { margin: 1.8rem 0; padding: 0 1rem; }
.gallery-row { display:flex; justify-content:center; gap:1.2rem; margin-bottom:1.6rem; flex-wrap:wrap; }
.gallery-row img { width:45%; border-radius:12px; box-shadow:0 6px 12px rgba(0,0,0,0.18); transition:transform .25s; }
.gallery-row img:hover { transform:scale(1.03); }

.cta { background:var(--kb-black); color:var(--kb-cream); padding:2.2rem 1rem; margin-top:1.6rem; }
.cta-button { background:var(--kb-red); color:var(--kb-cream); padding:0.7rem 1.4rem; border-radius:6px; font-weight:700; }
@media (max-width:768px) { .gallery-row img { width:90%; } }
</style>
