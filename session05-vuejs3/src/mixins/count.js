import { ref } from 'vue'

export default function useCounter() {
    const count = ref(0);

    function incrementCount() {
        count.value++;
    }
    
    return {
        count,
        incrementCount
    }
}