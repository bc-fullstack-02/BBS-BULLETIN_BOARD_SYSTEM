import React, { Component} from 'react';
import { View, Button, TextInput} from 'react-native';
import firebase from 'firebase';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            ocupation : '',
            location: '',
        }
        this.onSignUp = this.onSignUp.bind(this);
    }
onSignUp = () => {
        const { email, password, name, ocupation, location } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                        ocupation,
                        location
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            }
            )
        
}

    render() {
        return (
            <View>
                <TextInput placeholder="Name" onChangeText={(name) => this.setState({ name })} />
                <TextInput placeholder="Email" onChangeText={(email) => this.setState({ email })} />
                <TextInput placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })} />
                <TextInput placeholder="Ocupation" onChangeText={(ocupation) => this.setState({ ocupation })} />
                <TextInput placeholder="Location" onChangeText={(location) => this.setState({ location })} />
                <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
            </View>
        )
    }
}
