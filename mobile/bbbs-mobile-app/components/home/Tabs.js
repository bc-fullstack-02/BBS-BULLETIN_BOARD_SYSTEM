import { View,StyleSheet,Image, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { useState } from 'react'
const IconFooter = [{
    name : "Home",
    ImgUrl: "https://img.icons8.com/ios/50/000000/home.png"
},
{
    name : "Search",
    ImgUrl: "https://img.icons8.com/ios/50/000000/search--v1.png"
},
{
    name: "Add",
    ImgUrl: "https://img.icons8.com/ios/50/000000/plus-math.png"
},
{
    name : "profile",
    ImgUrl: "https://img.icons8.com/ios/50/000000/user-male-circle.png"
},
]
const Tabs = () => {
    const [active, setActive] = useState("Home")
    const changeTab = (tab) => {
        setActive(tab)
    }
    return (
        <View style={styles.wrapper}>
        <View style={styles.container}>
            {IconFooter.map((tab, index) => (
                <TouchableOpacity key={index} onPress={() => changeTab(tab.name)}>
                    <Image source={{uri: tab.ImgUrl}} style={[styles.icon, {tintColor: tab.name === active ? "#2e64e5" : "#748c94"}]}/>
                    {/**ir para o perfil */}
                    {tab.name === "profile" && <View style={{position: "absolute", top: 0, right: 0, backgroundColor: "#2e64e5", width: 15, height: 15, borderRadius: 15, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: 10}}>1</Text>
                    </View>}
                </TouchableOpacity>
            ))}
        </View>
        </View>
    )
}
const changeTab = (tab) => {
    if (tab === "profile") {
        navigation.navigate("Profile")
    }else{
        navigation.navigate("Home")
    }
}
const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
        marginTop: 760,
        width: "100%",
        height: 50,
        backgroundColor: "#1e272e",
        
        
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10,

    },
    icon: {
        height: 25,
        width: 25,
        color: "#748c94"      

    }
})


export default Tabs