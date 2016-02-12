'use strict';

var React = require('react-native');

import RestApi from '../modules/module.fetch'
import Cards from './cards'
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    ActivityIndicatorIOS
    } = React;


var ListRooms = React.createClass({
    componentDidMount: function () {
      //  var url = `http://localhost:3000/getRoomInfo/10`
        var url = `http://nearpick-test.meteor.com/getRoomInfo/10`

        //console.log(this.ds);
        var self = this;
        fetch(url)
            .then(function (responseData) {
                return responseData.json();

            })
            .then(function (roomData) {

                console.log(roomData);

                self.setState({
                    isLoading: false,
                    dataSource: self.ds.cloneWithRows(roomData.rooms)
                });
            });

    },
    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.ds = ds;
        return {
            isLoading: true,
            dataSource: null,
            limit: 5,
            skip: 0,
        }
    },
    navigateDetail(){

    },
    renderRooms(data){
      console.log('in Room Detail',this.props);
        return (
            <Cards
                _id={data._id}
                image={data.image}
                amount={data.price}
                noOfRooms={data.rooms}
                area={data.area}
                distance={data.distance}
                onRoomPressed={this.props.openModel}
            />
        );
    },
    renderLogin(){


    },
    renderBody:function () {
      if(this.state.isLoading){
       return <View style={styles.container}>
            <Text> Loading </Text>
        </View>
      }else{
        return <View style={styles.content}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRooms}
            />
        </View>
      }
    },
    render: function () {

            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>NearPick !</Text>
                    </View>

                    {this.renderBody()}

                </View>
            );



    }
});

var styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'stretch'

    },
    content: {
        marginTop: 20,
        flex: 1
    },
    header: {
        backgroundColor: '#069488',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20
    }
});

module.exports = ListRooms;
