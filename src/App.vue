<template>
  <div class="app-container">
    <header>
      <h1>Health Vitals Tracker</h1>
      <p>Vue.js + Vuex State Management Demo</p>
    </header>

    <main>
      <div class="section input-section">
        <VitalsForm />
      </div>

      <div class="section display-section">
        <DashboardCard />
      </div>
    </main>
  </div>
</template>

<script setup>
import VitalsForm from './components/VitalsForm.vue'
import DashboardCard from './components/DashboardCard.vue'
</script>

<style>
/* Global Reset & Typography */
:root {
  --primary-blue: #005eb8; /* "NHS Blue" - standard medical color */
  --secondary-blue: #4c6fa5;
  --bg-color: #f0f4f8;
  --card-bg: #ffffff;
  --text-dark: #2c3e50;
  --text-light: #64748b;
}

body {
  font-family: 'Inter', 'Segoe UI', sans-serif; /* Modern font */
  margin: 0;
  background-color: var(--bg-color);
  color: var(--text-dark);
  -webkit-font-smoothing: antialiased;
}

.app-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}

header {
  text-align: left;
  margin-bottom: 40px;
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  padding: 30px;
  border-radius: 16px;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(0, 94, 184, 0.25);
}

header h1 { margin: 0; font-weight: 700; letter-spacing: -0.5px; }
header p { margin-top: 8px; opacity: 0.9; font-size: 1rem; }

main {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* Form is smaller, Dashboard is wider */
  gap: 30px;
  align-items: start;
}

@media (max-width: 768px) {
  main { grid-template-columns: 1fr; }
  header { text-align: center; }
}
</style>