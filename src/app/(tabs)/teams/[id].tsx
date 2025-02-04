import {
  Stack,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { Team } from ".";
import { useEffect, useLayoutEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

export default function TeamScreen() {
  const { goBack, setOptions } = useNavigation();
  const { id } = useLocalSearchParams();
  const [team, setTeam] = useState<Team>();
  const endpointUrl = `https://67a1ed53409de5ed52539b64.mockapi.io/api/teams/${id}`;

  const getTeam = async () => {
    try {
      const data = await fetch(endpointUrl, { method: "GET" });
      const parsedData: Team = await data.json();
      setTeam(parsedData);
    } catch (e) {
      console.error("Error fetching teams", e);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await fetch(endpointUrl, { method: "DELETE" });
      console.log("Delete result", result.status);
    } catch (e) {
      console.error("Error deleting a team", e);
    }
    goBack();
  };

  useEffect(() => {
    getTeam();
  }, []);

  useLayoutEffect(() => {
    setOptions({ headerTitle: team?.name });
  }, [team]);

  if (!team) {
    return null;
  }

  return (
    <View
      style={{ padding: 16, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={handleDelete}>
              <IconSymbol
                size={28}
                name="trash"
                color={Colors.light.dangerText}
              />
            </Pressable>
          ),
        }}
      />
      {team.logo !== null && (
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={{ width: "100%", height: 200, marginBottom: 32 }}
          src={team.logo}
        />
      )}
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 32,
          textAlign: "center",
        }}
      >
        {team.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
        }}
      >
        {team.city}
      </Text>
    </View>
  );
}
