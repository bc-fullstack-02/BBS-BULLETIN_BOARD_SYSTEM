import { View,StyleSheet,Image, TouchableOpacity} from 'react-native'
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
        <View style={styles.container}>
            {IconFooter.map((tab, index) => (
                <TouchableOpacity key={index} onPress={() => changeTab(tab.name)}>
                    <Image source={{uri: tab.ImgUrl}} style={[styles.icon, {tintColor: tab.name === active ? "#2e64e5" : "#748c94"}]}/>
                </TouchableOpacity>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e8e8e8"
    },
    icon: {
        height: 30,
        width: 30
    }
})


export default Tabs