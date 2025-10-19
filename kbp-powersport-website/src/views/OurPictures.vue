<template>
  <div class="pictures-page">
    <Tagline />

    <div class="pictures-container">
      <div class="pictures-card">
        <div class="pictures-header">
          <h2 class="pictures-title">Picture Galleries</h2>
          <div class="pictures-subtitle">Browse our collection of racing memories</div>
        </div>

        <div class="folder-grid">
          <router-link to="/pictures/2025" class="folder-card">
            <div class="folder-icon">📁</div>
            <div class="folder-content">
              <h3>2025</h3>
              <p>Podium finishes and victories</p>
              <div class="folder-stats">
                <span class="stat">10 photos</span>
                <span class="stat-divider">•</span>
                <span class="stat">Multiple P1-P3 wins</span>
              </div>
            </div>
            <div class="folder-arrow">→</div>
          </router-link>

          <!-- Future years can be added here -->
          <div class="folder-card coming-soon">
            <div class="folder-icon">📁</div>
            <div class="folder-content">
              <h3>2026</h3>
              <p>Coming soon...</p>
              <div class="folder-stats">
                <span class="stat">Season in progress</span>
              </div>
            </div>
            <div class="folder-arrow">⏳</div>
          </div>
        </div>
      </div>
    </div>
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
.pictures-page {
  min-height: 100vh;
  background: var(--kb-cream);
}

.pictures-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.pictures-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(51, 51, 51, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.pictures-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--kb-red) 0%, var(--kb-red) 100%);
}

.pictures-header {
  background: linear-gradient(135deg, var(--kb-black) 0%, rgba(51, 51, 51, 0.9) 100%);
  color: var(--kb-cream);
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
}

.pictures-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.pictures-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 400;
  font-style: italic;
}

.folder-grid {
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.folder-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 2px solid rgba(51, 51, 51, 0.1);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  background: rgba(245, 245, 220, 0.2);
  transition: all 0.3s ease;
  position: relative;
}

.folder-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(51, 51, 51, 0.15);
  border-color: var(--kb-red);
  background: rgba(245, 245, 220, 0.4);
}

.folder-card.coming-soon {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

.folder-card.coming-soon:hover {
  transform: none;
  box-shadow: none;
  border-color: rgba(51, 51, 51, 0.1);
}

.folder-icon {
  font-size: 3rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.folder-card:hover .folder-icon {
  transform: scale(1.1);
}

.folder-content {
  flex: 1;
}

.folder-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--kb-red);
}

.folder-content p {
  font-size: 1rem;
  color: var(--kb-black);
  margin: 0 0 0.75rem 0;
  opacity: 0.8;
}

.folder-stats {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--kb-black);
  opacity: 0.6;
}

.stat-divider {
  opacity: 0.4;
}

.folder-arrow {
  font-size: 1.5rem;
  color: var(--kb-red);
  font-weight: bold;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.folder-card:hover .folder-arrow {
  transform: translateX(5px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .pictures-container {
    padding: 1rem 0.5rem;
  }

  .pictures-card {
    border-radius: 16px;
    margin: 0 0.5rem;
  }

  .pictures-header {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }

  .pictures-title {
    font-size: 2rem;
  }

  .pictures-subtitle {
    font-size: 1rem;
  }

  .folder-grid {
    padding: 2rem 1rem;
  }

  .folder-card {
    padding: 1.25rem;
    gap: 1rem;
  }

  .folder-icon {
    font-size: 2.5rem;
  }

  .folder-content h3 {
    font-size: 1.5rem;
  }

  .folder-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .stat-divider {
    display: none;
  }
}

@media (max-width: 480px) {
  .pictures-container {
    padding: 0.5rem 0.25rem;
  }

  .pictures-card {
    margin: 0 0.25rem;
  }

  .pictures-header {
    padding: 1.5rem 1rem;
  }

  .pictures-title {
    font-size: 1.75rem;
  }

  .folder-grid {
    padding: 1.5rem 1rem;
  }

  .folder-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .folder-arrow {
    display: none;
  }
}
</style>
