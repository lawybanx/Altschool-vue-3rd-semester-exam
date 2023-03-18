import { ref } from 'vue';

const useCounter = () => {
  const count = ref(0);
  const increment = () => count.value++;
  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };
  const reset = () => (count.value = 0);
  const setValue = value => {
    if (value > 0) {
      count.value = value;
    }
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useCounter;
