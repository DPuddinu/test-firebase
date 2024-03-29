import { login, logout } from '@/api/auth';
import { UserRegistration } from '@/types/user';
import { useMutation } from '@tanstack/react-query';

export function useLoginUser() {
  return useMutation({
    mutationFn: ({ email, password }: UserRegistration) => login({ email, password })
  });
}
export function useLogoutUser() {
  return useMutation({
    mutationFn: () => logout()
  });
}
