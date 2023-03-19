import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ion from "react-native-vector-icons/Ionicons";
import Label from "../components/Label";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Ion
        name="person-circle-outline"
        color="#000"
        size={100}
        style={styles.icon}
      />
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView behavior="position" style={styles.screen}>
          <View style={styles.inputContainer}>
            <View>
              <Label>Name</Label>
              <TextInput
                keyboardType="default"
                placeholder="Enter your Name"
                style={styles.input}
              />
            </View>
            <View>
              <Label>Email</Label>
              <TextInput
                keyboardType="email-address"
                placeholder="Enter your email"
                style={styles.input}
              />
            </View>

            <View>
              <Label>Password</Label>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.input}
              />
            </View>
            <View>
              <Label>Confirm Password</Label>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.input}
                onBlur={() => console.log("onBlur")}
              />
            </View>
          </View>

          <Text style={styles.text}>
            Have an Account ?{" "}
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signUpText}> Sign In</Text>
            </Pressable>
          </Text>
          <View>
            <View style={styles.button}>
              <Button title="Sign Up" />
            </View>
            <View style={styles.button}>
              <Button title="Sign Up With Google" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    // marginVertical: 10,
  },

  inputContainer: {
    flex: 1,
    marginVertical: 10,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,

    padding: 10,
  },
  signUpText: { textDecorationLine: "underline", color: "#2E67F8" },
  text: { marginVertical: 4 },
  button: {
    marginVertical: 10,
  },
});
