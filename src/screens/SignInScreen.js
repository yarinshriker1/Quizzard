import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("User UID after sign-in:", userCredential.user.uid);
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/signup.png")}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            title="Login"
            onPress={handleSubmit}
            buttonStyle={{ backgroundColor: "#F6E05E" }}
            textStyle={{ color: "#475569" }}
          />
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  safeArea: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  iconContainer: {
    justifyContent: "flex-start",
  },
  backButton: {
    backgroundColor: "#F6E05E",
    padding: 10,
    borderRadius: 10,
    marginLeft: 4,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 350,
    height: 180,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  formLabel: {
    color: "#475569",
    marginLeft: 16,
    marginBottom: 4,
  },
  input: {
    padding: 16,
    backgroundColor: "#F3F4F6",
    color: "#475569",
    borderRadius: 10,
    marginBottom: 16,
  },
  forgotPassword: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 5,
  },
  forgotPasswordText: {
    color: "#475569",
    marginBottom: 5,
  },
  loginButton: {
    padding: 16,
    backgroundColor: "#F6E05E",
    borderRadius: 10,
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#475569",
  },
  orText: {
    fontSize: 20,
    color: "#475569",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
  socialButton: {
    padding: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    marginHorizontal: 8,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 7,
  },
  signupText: {
    color: "#475569",
    fontWeight: "600",
  },
  signupLink: {
    color: "#F6E05E",
    fontWeight: "600",
    marginLeft: 4,
  },
});

export default SignInScreen;
