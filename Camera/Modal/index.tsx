import React from 'react';
import { StyleSheet, View, ScrollView, useColorScheme } from 'react-native';
import { Portal, Modal, Text, Title, Paragraph } from 'react-native-paper';

interface ModalProps {
  visible: boolean;
  onDismiss: () => void;
  title: string,
  paragraph: string
}

const SafetyHelmetModal = ({ visible, onDismiss , title,paragraph}: ModalProps) => {
    const theme  = useColorScheme();
    const backgroundColor = theme === 'dark' ? '#1C1C1E' : 'white'
    return (
        <Portal>
        <Modal
            visible={visible}
            onDismiss={onDismiss}
            contentContainerStyle={[styles.modalContent,{backgroundColor:backgroundColor}]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Title style={styles.title}>{title}</Title>
                <Paragraph style={styles.paragraph}>
                {paragraph}
                </Paragraph>
            </View>
            </ScrollView>
        </Modal>
        </Portal>
    );
    };

const styles = StyleSheet.create({
  modalContent: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  container: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  }
});

export default SafetyHelmetModal;