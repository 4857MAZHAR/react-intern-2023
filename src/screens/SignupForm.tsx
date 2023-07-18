import React,{useState} from 'react'
import { View,Dimensions,StyleSheet ,Alert} from 'react-native'
import CenteredText from '../components/CenteredText'
import TextInputField from '../components/TextInputField'
import colors from '../utils/colors'
import CustomButton from '../components/CustomButton'
import * as Yup from "yup";
import { useFormikContext } from "formik";
import Error from '../components/Error'
import ActionText from '../components/ActionText'


// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const SignupForm = () => {

  const validateEmail = (email:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const moveToLogin = () => {
    console.log("Move");
  };

  const handleSignUp = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);

      if (!validateEmail(email)) {
        setEmailError("Invalid email");
        return;
      }
  
      if (password.length === 0) {
        setPasswordError("Enter Password ");
        return;
      }
  
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
      }
  
      // Implement your signup logic here
      console.log("Form values:", { email, password }); 
  };

  return (
    <View style={styles.container}>
        <View style={styles.text}>
        <CenteredText text="Try BOXD for free for 2 weeks" />
        <CenteredText text="Quick and simple signup" />
        <CenteredText text="No card required" />
        
        </View> 
        <View style={styles.form}>
        <TextInputField
        
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false}
        />
        {emailError ?<Error error={emailError}></Error> : null}
        <TextInputField
        
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        {passwordError ? <Error error={passwordError}></Error> : null}
        <TextInputField
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
        />
         {confirmPasswordError ? <Error error={confirmPasswordError}></Error> : null}
        <CustomButton title='Create my free account >' onPress={handleSignUp}/>
        <ActionText text="Already with BOXD? Log in here" onPress={moveToLogin} />

        
        
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
     backgroundColor:colors.primary,
     

    padding:screenWidth*0.08,
      
      flex:1,
    },
    text:{
       // backgroundColor:'red',
     alignItems:'center',
     justifyContent:'center',
    
     flex:1.5,
    },
    form:{ 
        flex:5,
       // backgroundColor:colors.light,
    },error: {
      color: "red",
      marginBottom: 5,
    },
  
    
  });

export default SignupForm
