import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesListScreen from './src/components/screens/NotesListScreen';
import AddNoteScreen from './src/components/screens/AddNoteScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotesList">
        <Stack.Screen name="NotesList" component={NotesListScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}