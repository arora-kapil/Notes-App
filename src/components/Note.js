import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({ note }) => {
    return (
        <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteTitle}>{note.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    noteContent: {
        fontSize: 14,
        marginTop: 5
    }
});

export default Note;