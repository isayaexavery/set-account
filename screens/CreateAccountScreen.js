import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={{
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
          marginTop: 20,
        }}
      >
        Create account
      </Text>
      <Text
        style={{ fontFamily: "bold", color: COLORS.graySecond, fontSize: 14 }}
      >
        Enter your personal information
      </Text>

      <View style={{ width: "80%", marginTop: 12 }}>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 16,
            marginVertical: 6,
            color: COLORS.black,
          }}
        >
          Full Name
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
            placeholder="Enter your full name"
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 50,
              fontFamily: "regular",
              color: COLORS.black,
              fontSize: 16,
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.graySecond}
          />
          <Feather name="eye-off" size={24} color={COLORS.graySecond} />
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
          Confirm Password
        </Text>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.gray,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
              flex: 1,
            }}
            placeholder="Confirm Password"
            placeholderTextColor={COLORS.graySecond}
          />
          <Feather name="eye-off" size={24} color={COLORS.graySecond} />
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
          Sign Up
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontFamily: "regular",
              fontWeight: "700",
              color: COLORS.green,
              fontSize: 14,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateAccountScreen;
