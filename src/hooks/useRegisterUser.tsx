import { register } from '@/api/auth';
import { UserRegistration } from '@/types/user';
import { MutationOptions, useMutation } from '@tanstack/react-query';

export function useRegisterUser() {
  return useMutation({
    mutationFn: ({ email, password }: UserRegistration) => register({ email, password })
  });
}
