import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

function AddNoteScreen() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const saveNote = async () => {
        const newNote = {
            id: Date.now(),
            title,
            content
        };

        const storedNotes = await AsyncStorage.getItem('notes');
        const notes = storedNotes ? JSON.parse(storedNotes) : [];
        notes.push(newNote);
        await AsyncStorage.setItem('notes', JSON.stringify(notes));
        NavigationContainer.navigate('NotesList');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Title'
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder='Content'
                value={content}
                onChangeText={setContent}
                multiline
            />
            <Button title='Save Note' onPress={saveNote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10
    }
});

export default AddNoteScreen;