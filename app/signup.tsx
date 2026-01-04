import { AuthLayout } from "../ui/auth/AuthLayout";
import { SignupForm } from "../ui/auth/SigupForm";

export default function SignupScreen() {
  return (
    <AuthLayout title="Sign up">
      <SignupForm />
    </AuthLayout>
  );
}
