import { AuthLayout } from "../ui/auth/AuthLayout";
import { LoginForm } from "../ui/auth/LoginForm";

export default function LoginScreen() {
  return (
    <AuthLayout title="Log in">
      <LoginForm />
    </AuthLayout>
  );
}
