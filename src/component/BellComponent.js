import { Icon, Text } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const BELL_TIMEOUT = 30000; //30 seconds
const BELL_MESSAGE = "bell";

export default function BellComponent({
    websocket
}){
    const [isBellActive, setIsBellActive] = useState(false);

    websocket.onMessage(data=>{
        if(data + "" == BELL_MESSAGE){
            setIsBellActive(true);
            setTimeout(() => {
                setIsBellActive(false);
            }, BELL_TIMEOUT);
        }
    });

    return (
        <TouchableOpacity onPress={()=>{
            if(isBellActive){
                setIsBellActive(false);
            }
        }}>
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