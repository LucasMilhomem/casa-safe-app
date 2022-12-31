import { Icon, Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

const BELL_TIMEOUT = 30000; //30 seconds
const BELL_MESSAGE = "bell";

export default function BellDeviceComponent({
    websocket
}){
    const [isBellActive, setIsBellActive] = useState(false);
    const [sound, setSound] = useState();

    websocket.onMessage(data=>{
        if(data + "" == BELL_MESSAGE){
            activateBell();
            setTimeout(()=>{
                setIsBellActive(false);
            }, BELL_TIMEOUT);
        }
    });

    useEffect(()=>{
        if(!isBellActive){
            deactivateBell();
        }
    })

    function activateBell(){
        setIsBellActive(true);
        playSound();
    }

    function deactivateBell(){
        setIsBellActive(false);
        stopSound();
    }

    function stopSound(){
        if(sound){
            console.log('Unloading Sound');
            sound.unloadAsync();
        }
    }

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/codec.mp3'));
        setSound(sound);

        if (sound){
            console.log('Playing Sound');
            sound.playAsync();
            sound.setIsLoopingAsync(true);
        }
    }

    return (
        <TouchableOpacity onPress={()=>deactivateBell()}>
            <View style={styles.icon} onPress>
                <Text h4>Campainha</Text>
                <Icon
                    name='bell'
                    type='font-awesome'
                    reverse={true}
                    size={40}
                    color={isBellActive ? "green" : "black"}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        flexBasis: "auto",
        flexGrow: 1,
    }
});