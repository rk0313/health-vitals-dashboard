<template>
  <div class="dashboard-container">
    <div class="card current-stats">
      <h2>Current Vitals</h2>
      <div class="stat-row">
        <strong>Weight:</strong> 
        <span>{{ currentVitals.weight || '--' }} kg</span>
      </div>
      <div class="stat-row">
        <strong>Heart Rate:</strong> 
        <span>{{ currentVitals.heartRate || '--' }} bpm</span>
      </div>
      <div class="stat-row">
        <strong>Total Updates:</strong> 
        <span>{{ updateCount }}</span>
      </div>
    </div>

    <div class="card history-log">
      <h3>History Log</h3>
      <ul>
        <li v-for="(entry, index) in history" :key="index">
          <span class="time">{{ entry.timestamp }}</span>
          <span>{{ entry.weight }}kg | {{ entry.heartRate }}bpm</span>
        </li>
        <li v-if="history.length === 0" class="empty-msg">No data recorded yet.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentVitals = computed(() => store.getters.getLatestVitals)
const history = computed(() => store.state.history)
const updateCount = computed(() => store.getters.getHistoryCount)
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

h2, h3 { margin-top: 0; color: var(--text-dark); }

/* Current Stats Styling */
.current-stats { border-left: 5px solid var(--primary-blue); }

.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
}
.stat-row:last-child { border-bottom: none; }

.stat-row strong { color: var(--text-light); font-weight: 500; }
.stat-row span { font-weight: 700; color: var(--text-dark); font-size: 1.1rem; }

/* History Log Styling */
.history-log ul { list-style: none; padding: 0; margin: 0; }

.history-log li {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f8fafc;
  margin-bottom: 8px;
  border-radius: 8px;
  font-size: 0.9rem;
}

.time { color: var(--text-light); font-size: 0.85rem; }
.empty-msg { text-align: center; color: var(--text-light); padding: 20px; }
</style>