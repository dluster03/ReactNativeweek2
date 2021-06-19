import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { Text, ScrollView } from 'react-native';
import { PARTNERS } from '../shared/partners';

const Mission = () => {
    return (
        <Card wrapperStyle={{margin: 20}}  title={"Our Mission"}>
            <Text style={{margin: 10}}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. 
                We increase access to adventure for the public while promoting safe and respectful use of resources. 
                The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
                We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPartners = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('../shared/partners', { partnersId: item.id })}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };


        return (
            <ScrollView>
                <Mission />
                <Card wrapperStyle={{margin: 20}} title={"Community Partners"}>
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartners}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;