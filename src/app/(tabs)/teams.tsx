import { FlatList, View, Text } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useEffect, useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export type Team = {
  id: Number;
  name: String;
  code: String;
  city: String;
  logo: String | null;
};

export default function TeamsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [teams, setTeams] = useState<Team[]>([]);

  const getTeams = async () => {
    const endpointUrl = "https://67a1ed53409de5ed52539b64.mockapi.io/api/teams";

    try {
      const data = await fetch(endpointUrl, { method: "GET" });
      const parsedData: Team[] = await data.json();
      setTeams(parsedData);
    } catch (e) {
      console.error("Error fetching teams", e);
    }
  };

  useEffect( () => {
    getTeams();
  }, []);

  return (
    <View style={{ paddingVertical: 8, backgroundColor: "white" }}>
      <FlatList
        data={teams}
        renderItem={({ item }: { item: Team }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: 600,
                }}
              >
                {item.code} - {item.name}
              </Text>
              <Text style={{ fontSize: 12 }}>{item.city}</Text>
            </View>
            <IconSymbol
              size={16}
              name="chevron.right"
              color={Colors[colorScheme ?? "light"].tint}
            />
          </View>
        )}
      />
    </View>
  );
}
