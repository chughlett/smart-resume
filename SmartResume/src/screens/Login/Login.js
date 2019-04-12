import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Switch,
    CheckBox,
    AsyncStorage
} from "react-native";
import {Style} from "./Style";
import {Platform} from 'react-native';
import {btnColor, btnSecondaryColor, fadedHeadingColor, labelDarkColor} from "../../Theme/colors";

import Icon from "react-native-vector-icons/Entypo";

import validator from "email-validator";
import {Button} from "../../Components";
import {ShowLoading} from "../../Theme/Prefab";
import {SocialButton} from "../../Components/SocialButton";


type Props = {};


export class Login extends Component<Props> {


    constructor(props) {
        super(props);
        this.state = {
            isLoadingVisible: false,
            user_email: '',
            user_password: '',
            authStatusReported: false,
            isUserAuthenticated: false

        }
    }


    _controlLoadingView = () => this.setState({isLoadingVisible: !this.state.isLoadingVisible});

    _onLoginPressed = () => {
        this._controlLoadingView()
        const {navigation} = this.props;
        setInterval(() => {


            navigation.replace('HomePage')
        }, 5000)
        this._controlLoadingView()

    };

    render() {


        return (


            <ScrollView
                contentContainerStyle={{
                    flexGrow: 2,
                    justifyContent: 'space-around'
                }}
            >

                <ShowLoading
                    loadingMsg={"loading"}
                    visible={this.state.isLoadingVisible}/>

                <View
                    style={Style.container}
                >

                    {/*upper box*/}

                    <View style={Style.upperBoxStyle}>

                        <Text style={Style.headingTextStyle}>LOGIN</Text>

                    </View>

                    {/*center box*/}

                    <ImageBackground

                        source={require('../../assets/bg_login.png')}
                        style={Style.centerBoxStyle}>

                        <View style={Style.editTextBoxStyle}>


                            <View
                                style={Style.editTextContainer}
                            >
                                <Icon name={'email'} color={btnColor}/>
                                <TextInput
                                    style={Style.textInputStyle}
                                    placeholder='E-Mail'
                                    placeholderTextColor={'rgba(248,68,116,0.2)'}
                                    onChangeText={(user_email) => this.setState({user_email})}

                                />

                            </View>

                            <View
                                style={Style.editTextContainer}
                            >
                                <Icon name={'lock'} color={btnColor}/>

                                <TextInput
                                    style={Style.textInputStyle}
                                    placeholder='password'
                                    secureTextEntry={true}
                                    placeholderTextColor={'rgba(248,68,116,0.2)'}

                                    onChangeText={(user_password) => this.setState({user_password})}

                                />
                            </View>

                            <View style={{alignItems: 'flex-end', width: '100%'}}>
                                <TouchableOpacity>
                                    <Text style={Style.subHeading}>Forgot password?</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                        <View style={Style.btnContainer}>
                            <Button btnLabel={'Sign in'} onPress={this._onLoginPressed}/>
                            <Button btnLabel={'Create profile'}/>

                        </View>


                        <View style={{justifyContent: 'space-evenly', width: '100%'}}>

                            <SocialButton btnLabel={'Sign in with Facebook'} btnIcon={'facebook'}/>

                            <SocialButton btnLabel={'Sign in with Email'}/>


                        </View>

                    </ImageBackground>

                    {/*the bottom saying area*/}

                    <View style={Style.bottomBoxStyle}>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: fadedHeadingColor}}>Don't Have Account ? </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('SignupPage');
                                }}
                            >
                                <Text style={{color: btnColor}}>Register Here</Text>
                            </TouchableOpacity>


                        </View>

                    </View>


                </View>
            </ScrollView>


        );
    }


}
