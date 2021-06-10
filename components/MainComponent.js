import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(CampsiteId) {
        this.setState({selectedCampsite: CampsiteId});
    } 

    render() {
        return (
            <View style={{flex: 1}}>
               <Directory 
                    campsites={this.state.campsites}
                    onPress={CampsiteId => this.onCampsiteSelect(CampsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
        )
    }
}

export default Main;