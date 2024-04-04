import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/backgroundLogin.png')}>
        <View style={styles.logoView}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
        </View>
        <Text style={styles.textoBoasVindas}>Welcome</Text>
        <Text style={styles.textoLogin}>Sign in to continue</Text>
      </ImageBackground>
      <View style={styles.formContent}>
        <Text style={styles.label}>Email address</Text>
        <TextInput style={styles.inputs}/>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.inputs}/>
        <TouchableOpacity style={styles.botaoEntrar}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
        <View style={styles.entrarEsqueceu}>
          <TouchableOpacity>
            <Text style={styles.botaoEntrarEsqueceu}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.botaoEntrarEsqueceu}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar
        style='auto'
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
  },
  logoView: {
    marginTop: 64,
    marginStart: 32,
  },
  logo: {
    width: 64,
    height: 64
  },
  textoBoasVindas: {
    marginStart: 32,
    color: 'white',
    marginTop: 10,
    fontSize: 32
  },
  textoLogin: {
    marginStart: 32,
    color: 'white',
    fontSize: 24
  },
  formContent: {
    flex: 1,
    height: 256,
    padding: 32
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
  },
  inputs: {
    borderWidth: 2,
        borderRadius: 10,
        height: 44,
        fontSize: 18,
        paddingStart: 4,
        marginBottom: 30,
        width: '100%',
  },
  botaoEntrar: {
    backgroundColor: '#2d665f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,

  },
  entrarEsqueceu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 96
  },
  botaoEntrarEsqueceu: {
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});
