<template>
  <div class="home">
    <Tagline />

    <div class="home-container">
      <div class="home-content">
        <section class="gallery">
          <div class="gallery-row">
            <img src="/pictures/action_1.jpg" alt="KB Powersport in Action" />
            <img src="/pictures/action_2.jpg" alt="Racing Excellence" />
            <img src="/pictures/action_3.jpg" alt="Track Performance" />
          </div>
        </section>

        <section class="cta">
          <h2>Ready to Ride?</h2>
          <router-link to="/pictures" class="cta-button">View Our Gallery</router-link>
        </section>
      </div>
    </div>
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
.home {
  text-align: center;
  min-height: 100vh;
  background: var(--kb-cream);
}

.home-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.home-content {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  width: 100%;
  margin: 1.8rem 0;
  padding: 0 1rem;
}
.gallery-row {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
}

.gallery-row img {
  width: 30%;
  min-width: 200px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.18);
  transition: transform .25s;
  color: var(--kb-black);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.gallery-row img:hover {
  transform: scale(1.03);
}

.cta {
  background: var(--kb-black);
  color: var(--kb-cream);
  padding: 2.2rem 1rem;
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 12px;
}

.cta-button {
  background: var(--kb-red);
  color: var(--kb-cream);
  padding: 0.7rem 1.4rem;
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #FF4466;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem 0.5rem;
  }

  .home-content {
    margin: 0 0.5rem;
  }

  .gallery {
    margin: 1rem 0;
  }

  .gallery-row img {
    width: 90%;
    min-width: auto;
  }

  .gallery-row {
    flex-direction: column;
    align-items: center;
  }
}
</style>
