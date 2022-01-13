import React, { Component } from 'react';
import { TouchableOpacity, Keyboard, Platform, StyleSheet, Text, TextInput, View } from 'react-native';


const Register = ({navigation}) => {

  const clickHandler = () =>{
    navigation.navigate('Login')
  }

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});

const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}


    return (

            <View style={styles.container}>

                <Text style={styles.header}>Registration</Text>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        returnKeyType="next"
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />

                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        returnKeyType="next"
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />

                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Confirm Your Password"
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        returnKeyType="next"
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />

                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}>
               </TouchableOpacity>
                    
                </View>
                
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {}}>
                      <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                </View>         
            </View>
      );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
      backgroundColor: '#296460',
    },
    header: {
      fontSize: 36,
      padding: 24,
      margin: 12,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    inputTextWrapper: {
      marginBottom: 12,
    },
    textInput: {
      backgroundColor: "#e6e6e6",
      width: "80%",
      height: 45,
      alignItems: "center",
      height: 40,
      paddingLeft:10,
    },

    errorText: {
      color: 'red',
      fontSize: 10,
    },
    btnContainer: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom:5,
        backgroundColor: "#053630",
    },
    buttonText:{
      color:"white",
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
  });


     
