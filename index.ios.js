
'use strict';

import  React from 'react-native'
import TabsHome from './components/tabs'
import RoomDetail from './components/roomDetail'

var {
  AppRegistry,
  StyleSheet,
  Navigator
} = React;

var ROUTES={
  tabsHome:TabsHome,
  roomDetail:RoomDetail
}

class mainComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  renderScene(Route,Navigator){
    var Component=ROUTES[Route.name];
    return <Component route={Route} navigator={Navigator} />
  }

  render(){
    return (
      <Navigator
          style={Styles.container}
          initialRoute={{name:'tabsHome'}}
          renderScene={this.renderScene}
          configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}

        />
    );
  }
};

var Styles=StyleSheet.create({
  container:{
    flex:1
  }
});




AppRegistry.registerComponent('nearpick', () => TabsHome);
