import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import Note from '../Note';

function NotesListScreen() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadNotes = async () => {
            const storedNotes = await AsyncStorage.getItem('notes');
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes));
            }
        };

        loadNotes();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Note note={item} />}
            />
            <Button title="Add Note" onPress={() => navigation.navigate('AddNote')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});

export default NotesListScreen;