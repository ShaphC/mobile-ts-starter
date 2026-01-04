import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { signUp } from "../../lib/auth";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    try {
      setError(null);
      await signUp(email, password);
      console.log("Sign Up Successful")
    } catch (err: any) {
      setError(err.message ?? "Signup failed");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 12 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 12 }}
      />

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <Button title="Create account" onPress={handleSignup} />
    </View>
  );
}
