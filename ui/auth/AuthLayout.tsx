import { ReactNode } from "react";
import { Text, View } from "react-native";

export function AuthLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16 }}>{title}</Text>
      {children}
    </View>
  );
}
