import { auth } from '@/firebase';
import { UserRegistration } from '@/types/user';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function login({ email, password }: UserRegistration) {
  return signInWithEmailAndPassword(auth, email, password);
}
export async function register({ email, password }: UserRegistration) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export async function logout() {
  return signOut(auth);
}
