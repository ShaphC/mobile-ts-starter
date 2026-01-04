import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { signIn } from "../../lib/auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setError(null);
      await signIn(email, password);
      console.log("Login Successful")
    } catch (err: any) {
      setError(err.message ?? "Login failed");
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

      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
}
