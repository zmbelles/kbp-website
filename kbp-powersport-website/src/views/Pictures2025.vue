<template>
  <div class="pictures-page">
    <Tagline />

    <section class="gallery">
      <!-- P3 Podiums -->
      <div class="category-section">
        <h3>P3 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p3Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- P2 Podiums -->
      <div class="category-section">
        <h3>P2 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p2Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- P1 Podiums -->
      <div class="category-section">
        <h3>P1 Podiums</h3>
        <div class="gallery-row">
          <figure v-for="picture in p1Pictures" :key="picture.src" class="thumb">
            <img :src="picture.src" :alt="picture.alt" />
          </figure>
        </div>
      </div>

      <!-- Endurance Win -->
      <div class="category-section">
        <h3>Endurance Victory</h3>
        <div class="gallery-row">
          <figure class="thumb">
            <img :src="enduranceImage" alt="Endurance Victory" />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Tagline from '../components/KBPTagline.vue'

export default {
  name: 'Pictures2025',
  components: { Tagline },
  computed: {
    enduranceImage() {
      return '/kbp-website/dist/assets/Endurance-Kw1UCkfq.jpg'
    },
    p3Pictures() {
      return [
        { src: '/kbp-website/dist/assets/Alex_P3_1-DZlp3VYR.jpg', alt: 'Alex P3 Podium 1' },
        { src: '/kbp-website/dist/assets/Alex_P3_2-DD6vfu_T.jpg', alt: 'Alex P3 Podium 2' },
        { src: '/kbp-website/dist/assets/Alex_P3_3-i_4XOgY7.jpg', alt: 'Alex P3 Podium 3' },
        { src: '/kbp-website/dist/assets/Zach_P3_1-BQ0Cdkpi.jpg', alt: 'Zach P3 Podium 1' },
        { src: '/kbp-website/dist/assets/Zach_P3_2-CDZA_j6R.jpg', alt: 'Zach P3 Podium 2' },
        { src: '/kbp-website/dist/assets/Zach_P3_3-D81zsyFE.jpg', alt: 'Zach P3 Podium 3' },
        { src: '/kbp-website/dist/assets/Zach_P3_4-Cc18nWls.jpg', alt: 'Zach P3 Podium 4' }
      ]
    },
    p2Pictures() {
      return [
        { src: '/kbp-website/dist/assets/Alex_P2_1-D6gzMeaa.jpg', alt: 'Alex P2 Podium 1' }
      ]
    },
    p1Pictures() {
      return [
        { src: '/kbp-website/dist/assets/ZachP11-C5VW6Lq3.png', alt: 'Zach P1 Podium 1' },
        { src: '/kbp-website/dist/assets/Zach_P1_2-DKnurcyt.jpg', alt: 'Zach P1 Podium 2' }
      ]
    }
  }
}
</script>

<style scoped>
.pictures-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.gallery { padding: 2rem 0; }
.category-section { margin-bottom: 3rem; }
.category-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--kb-black);
  font-weight: 600;
}
.gallery-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
}
.thumb img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.thumb img:hover {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .thumb img { width: 90%; height: auto; }
  .category-section h3 { font-size: 1.4rem; color: var(--kb-black); }
}
</style>