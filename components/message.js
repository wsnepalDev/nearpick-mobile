import React from 'react-native'
var {
  View,
  Text
}=React;

class Messages extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <Text> This is Messages</Text>
      </View>

    )
  }

};
module.exports=Messages;
