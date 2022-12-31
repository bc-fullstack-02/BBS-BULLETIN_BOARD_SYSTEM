import { View,StyleSheet,Image, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { useState } from 'react'
export const IconFooter = [{
    name : "Home",
    Active : "https://img.icons8.com/ios/50/000000/home--v1.png",
    Inactive : "https://img.icons8.com/ios/50/000000/home--v3.png"
},
{
    name : "Search",
    Active : "https://img.icons8.com/ios/50/000000/search--v1.png",
    Inactive : "https://img.icons8.com/ios/50/000000/search--v2.png"
},
{
    name: "Add",
    Active : "https://img.icons8.com/ios/50/000000/plus-math--v1.png",
    Inactive : "https://img.icons8.com/ios/50/000001/plus-math--v1.png"
},
{
    name : "profile",
    Active : "https://img.icons8.com/ios/50/000000/user--v1.png",
    Inactive : "https://img.icons8.com/ios/50/000001/user-not-found.png"
},
]
const Tabs = ({icons}) => {
    const [active, setActive] = useState("Home")
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActive(icon.name)}>
            <Image source={icon.name === active ? {uri: icon.Active} : {uri: icon.Inactive}} style={{      width: 30,height: 30,tintColor: icon.name === active ? "#e84118" : "#ffffff",
            }}/>
        </TouchableOpacity>
    )
    
    return (
        <View style={styles.wrapper}>
        <View style={{flexDirection: "row",justifyContent: "space-around",paddingTop: 10}}>
        {icons.map((icon, index) => (
            <Icon icon={icon} key={index}/>
        ))    
        }
        </View>
        </View>)}

{/* styles */}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        marginTop: 760,
        width: "100%", 
        backgroundColor: "#1e272e",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        color: "#ffffff",
        padding: 2,        
    }
})


export default Tabs;