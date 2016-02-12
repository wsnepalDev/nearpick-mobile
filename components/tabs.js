import React from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import ListRooms from './listRooms'
import Messages from './message'
import Modal from 'react-native-modalbox'
var {
TabBarIOS,
View,
Text
}=React;


class TabHome extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab:'home',
      roomsDetail:false
    }
    this.openModel=this.openModel.bind(this);
  }
  openModel(data){
    this.setState({
      roomsDetail:data
    });

    this.refs.model1.open();
  }
  render(){
    return(
        <TabBarIOS selectedTab={this.state.selectedTab}  tintColor="white"
          barTintColor="darkslateblue">

          <Icon.TabBarItem
               title="Home"
               iconName="ios-home-outline"
               selectedIconName="ios-home"
               selected={this.state.selectedTab === 'home'}
               onPress={() => {
                 this.setState({
                   selectedTab: 'home',
                 });
               }}>
              <ListRooms route={this.props.route} navigator={this.props.navigator} openModel={this.openModel} />
          </Icon.TabBarItem>

          <Icon.TabBarItem
               title="messege"
               iconName="chatbubble"
               selectedIconName="chatbubble"
               selected={this.state.selectedTab === 'messege'}
               onPress={() => {
                 this.setState({
                   selectedTab: 'messege',
                 });
               }}>
              <Messages />
          </Icon.TabBarItem>
        </TabBarIOS>

    )


  }
}

module.exports=TabHome;
