import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Button} from '../components/Button';

export function UserIdentification() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [username, setUsername] = useState<string>();

  const navigator = useNavigation();

  function handleChangeText(value: string) {
    setIsInvalid(!value);
    setUsername(value);
  }

  function handleSubmit() {
    if (!username) {
      setIsInvalid(true);
      return;
    }

    navigator.navigate('Confirmation');
  }

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="w-full px-14 flex-1 items-center justify-center">
            <Text className="text-4xl text-center text-emoji">
              {username ? '😆' : '😃'}
            </Text>

            <Text className="mt-5 text-2xl font-semibold text-center text-gray-600 dark:text-white">
              Como podemos {'\n'}
              chamar você?
            </Text>

            <TextInput
              placeholder="Digite um nome"
              onChangeText={handleChangeText}
              className={`w-full p-2 my-12 text-lg text-center border-b text-gray-600 dark:text-white border-gray-300 focus:border-green-500 
              ${isInvalid && 'border-red-500'}
              ${username && 'border-green-500'}`}
            />

            <View className="w-full px-4">
              <Button
                className="w-full"
                title="Confirmar"
                onPress={handleSubmit}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
