<template>
  <div class="wrapper">
    <h1>Counter App</h1>
    <h2>Count: {{ count }}</h2>
    <div id="set-value">
      <input
        type="number"
        min="1"
        step="1"
        v-model.number="newCount"
        v-bind:style="{ color: newCount > 0 ? 'green' : 'red' }"
      />
      <button @click="setValue(newCount)">Set Value</button>
    </div>
    <div class="buttons">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import useCounter from '@/composables/useCounter';

export default {
  data() {
    return {
      count: ref(0),
      newCount: ref(0),
    };
  },
  methods: {},

  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    return { count, increment, decrement, reset, setValue };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#set-value {
  display: flex;
  margin: 1rem 0;
  align-items: flex-end;
}

input {
  width: 150px;
  height: 38px;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1rem;
}

button {
  cursor: pointer;
  background-color: #41b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.buttons button {
  margin: 0 0.5rem;
  padding: 0.3rem;
}

button:hover {
  background-color: #2c9463;
  color: white;
  transition: all 0.3s;
}

@media (max-width: 374px) {
  #set-value {
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 1rem;
  }
}
</style>
