// useEmailValidation.js
import { ref, computed } from 'vue';

export default function useEmailValidation() {
  const email = ref('');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const emailError = computed(() => {
    if (email.value === '') {
      return '';
    }
    return emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
  });

  return {
    email,
    emailError,
  };
}