import { Card } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { Text } from '@rneui/themed';

export default function Home(){
    return (
        <>
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title><Text h2>DISPOSITIVOS</Text></Card.Title>
                    <Card.Divider />
                    <View style={styles.items}>
                        <View style={styles.icon}>
                            <Text h4>Campainha</Text>
                            <Icon
                                name='bell'
                                type='font-awesome'
                                reverse={true}
                                size={40}
                            />
                        </View>
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
    icon: {
        flexBasis: "auto",
        flexGrow: 1,
    }
});