import { Card, Text } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import BellDeviceComponent from '../component/BellDeviceComponent';
import WebSocketService from '../service/WebSocketService';

export default function Home(){
    var ws = new WebSocketService();

    ws.initWS();
    
    return (        
        <>
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title><Text h2>DISPOSITIVOS</Text></Card.Title>
                    <Card.Divider />
                    <View style={styles.items}>
                        <BellDeviceComponent websocket={ws}/>
                    </View>
                </Card>
            </View>
        </ScrollView>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    items : {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});