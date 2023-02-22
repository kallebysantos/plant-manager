import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from '../components/Button';

export function UserIdentification() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text>{true ? '😆' : '😃'}</Text>
            <Text>
              Como podemos {'\n'}
              chamar você?
            </Text>

            {/* <TextInput
              style={[
                styles.input,
                isInvalid
                  ? styles.inputInvalid
                  : (isFocused || isFilled) && styles.inputFocused,
                ,
              ]}
              placeholder="Digite um nome"
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              onChangeText={handleChangeText}
            /> */}

            <View>
              <Button title="Confirmar" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 54,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    width: '100%',
    padding: 10,
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  inputFocused: {
    borderColor: colors.green,
  },
  inputInvalid: {
    borderColor: colors.red,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
});
 */
