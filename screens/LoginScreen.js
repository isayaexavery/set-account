import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "bold",
          fontSize: 20,
          marginVertical: 4,
          letterSpacing: 1,
        }}
      >
        Log In
      </Text>
      <Text
        style={{ fontFamily: "bold", color: COLORS.graySecond, fontSize: 14 }}
      >
        Enter your credentials
      </Text>

      <View style={{ width: "80%" }}>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 16,
            marginVertical: 6,
            color: COLORS.black,
          }}
        >
          Email
        </Text>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.gray,
            marginBottom: 20,
            justifyContent: "center",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              height: 50,
              fontFamily: "regular",
              color: COLORS.black,
              fontSize: 16,
            }}
            placeholder="Enter your Email"
            placeholderTextColor={COLORS.graySecond}
          />
        </View>
      </View>
      <View style={{ width: "80%" }}>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 16,
            marginVertical: 6,
            color: COLORS.black,
          }}
        >
          Password
        </Text>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.gray,
            marginBottom: 20,
            justifyContent: "center",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              height: 50,
              fontFamily: "regular",
              color: COLORS.black,
              fontSize: 16,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.graySecond}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: COLORS.green,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            letterSpacing: 1,
            color: "white",
            fontSize: 16,
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontFamily: "regular",
            color: COLORS.graySecond,
            fontSize: 12,
            marginVertical: 16,
            fontWeight: "700",
            letterSpacing: 1,
          }}
        >
          Or{" "}
          <Text
            style={{
              fontFamily: "regular",
              fontWeight: "700",
              color: COLORS.green,
              fontSize: 14,
            }}
          >
            Create Account
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
