import { supabase } from "./client";

export async function getSession() {
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return session;
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email,
    password
  });
}

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export function onAuthStateChange(
  callback: (session: any) => void
) {
  return supabase.auth.onAuthStateChange(
    (_event, session) => {
      callback(session);
    }
  );
}
