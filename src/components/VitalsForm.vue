<template>
  <div class="vitals-form">
    <h3>Update Health Metrics</h3>
    
    <form @submit.prevent="submitVitals">
      <div class="form-group">
        <label>Weight (kg):</label>
        <input v-model.number="localVitals.weight" type="number" required />
      </div>

      <div class="form-group">
        <label>Heart Rate (bpm):</label>
        <input v-model.number="localVitals.heartRate" type="number" required />
      </div>

      <button type="submit" :disabled="isLoading" :class="{ 'loading': isLoading }">
        {{ isLoading ? 'Saving Data...' : 'Update Dashboard' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// Reactive variable to check if store is busy
const isLoading = computed(() => store.getters.isSaving)

const localVitals = reactive({
  weight: '',
  heartRate: ''
})

const submitVitals = () => {
  store.dispatch('saveVitals', localVitals)
}
</script>

<style scoped>
/* ... (Keep your existing CSS here, or verify below) ... */
.vitals-form {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

h3 { margin-top: 0; color: var(--primary-blue); font-size: 1.25rem; }
.form-group { margin-bottom: 20px; }

label {
  display: block; margin-bottom: 8px; font-weight: 600;
  color: var(--text-dark); font-size: 0.9rem;
}

input {
  width: 100%; padding: 12px; border: 2px solid #e2e8f0;
  border-radius: 8px; font-size: 1rem; transition: border-color 0.2s;
  box-sizing: border-box;
}
input:focus { outline: none; border-color: var(--primary-blue); }

button {
  width: 100%; padding: 14px; background-color: var(--primary-blue);
  color: white; border: none; border-radius: 8px;
  font-size: 1rem; font-weight: 600; cursor: pointer;
  transition: all 0.2s;
}

button:hover { background-color: #004d99; }

/* NEW STYLE for disabled button */
button:disabled {
  background-color: #94a3b8; /* Gray color */
  cursor: not-allowed;
  opacity: 0.7;
}
</style>