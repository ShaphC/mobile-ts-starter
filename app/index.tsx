import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  
  // THE IS TO TEST THE SUPABASE CONNECTION AND .ENV
  // useEffect(() => {
  //   const run = async () => {
  //     await signIn(
  //       process.env.EXPO_PUBLIC_TEST_EMAIL!,
  //       process.env.EXPO_PUBLIC_TEST_PASSWORD!
  //     );

  //     const session = await getSession();
  //     console.log("SESSION:", session?.user.email);
  //   };

  //   run();
  // }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text>Main App Screen</Text>

      <Link href="/login">
        <Text style={{ color: "blue" }}>Go to Login</Text>
      </Link>

      <Link href="/signup">
        <Text style={{ color: "blue" }}>Go to Signup</Text>
      </Link>

      <Link href="/paywall">
        <Text style={{ color: "blue" }}>Go to Paywall</Text>
      </Link>

      <Link href="/settings">
        <Text style={{ color: "blue" }}>Go to Settings</Text>
      </Link>
    </View>
  );
}
