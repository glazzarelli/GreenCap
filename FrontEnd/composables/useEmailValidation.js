/**
 * A composable function that provides email validation functionality.
 *
 * @returns {Object} An object containing the email and emailError properties.
 * email: A reference to the email input value.
 * emailError: A computed property that returns an error message if the email input is invalid.
 */
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