import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";




interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string
}
const daods: Item[] = [


    { id: "1", nome: "Aprecida", idade: "17", email: "aparecida@dragon.com" },
    { id: "2", nome: "Maria", idade: "22", email: "maria@dragon.com" },
    { id: "3", nome: "joao", idade: "50", email: "joa@dragon.com" },
    
    { id: "4", nome: "Aprecida", idade: "17", email: "aparecida@dragon.com" },
    { id: "5", nome: "Maria", idade: "22", email: "maria@dragon.com" },
    { id: "6", nome: "joao", idade: "50", email: "joa@dragon.com" },
    
    { id: "7", nome: "Aprecida", idade: "17", email: "aparecida@dragon.com" },
    { id: "8", nome: "Maria", idade: "22", email: "maria@dragon.com" },
    { id: "9", nome: "joao", idade: "50", email: "joa@dragon.com" },
    
    { id: "10", nome: "Aprecida", idade: "17", email: "aparecida@dragon.com" },
    { id: "11", nome: "Maria", idade: "22", email: "maria@dragon.com" },
    { id: "12", nome: "joao", idade: "50", email: "joa@dragon.com" },
];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text>s{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
)


function FlatlistExample(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={"green"} barStyle='light-content'/>
           
           <View style={styles.header}>
            <Text style={styles.headerText}> Flat List</Text>
           </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={daods}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>

    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
 

    },
    item: {
        padding: 20,
        backgroundColor: 'yellow',
        marginVertical: 8,
        marginHorizontal: 16
    },
    header:{
backgroundColor:'green',
paddingVertical:10,
alignItems:'center'
    },
    headerText:{
fontSize:20,
fontWeight:'bold',
color:'white'
    }

});









export default FlatlistExample;