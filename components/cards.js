import React from 'react-native'

var {
		View,
		Text,
		StyleSheet,
		Image,
		TouchableHighlight
		}=React;

 class CardsUI extends React.Component{
	constructor(props){
		super(props);
		this.state={};
		this.onRoomPressed=this.onRoomPressed.bind(this);

	}
	onRoomPressed(){
		console.log('in Cards',this.props);

		//this.props.navigator.push({name:'roomDetail'});
	}

	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.props.onRoomPressed} >

				<View style={ styles.cardContainer }>
					<Image style={ styles.cardImage } source={ { uri: this.props.image} }/>
					<View style={ styles.cardInfo }>
						<Text style={ styles.cardPrice }>
						 {this.props.amount}
						</Text>
						<View style={ styles.personScore }>
							<Text style={ styles.personScoreHeader }>
								Rooms
							</Text>
							<Text style={ [styles.personScoreValue, styles.won] }>
								{this.props.noOfRooms}
							</Text>
						</View>
						<View style={ styles.personScore }>
							<Text style={ styles.personScoreHeader }>
								Parking
							</Text>
							<Text style={ [styles.personScoreValue, styles.won] }>
								10
							</Text>
						</View>
						<View style={ styles.personScore }>
							<Text style={ styles.personScoreHeader }>
								Sq.ft
							</Text>
							<Text style={ [styles.personScoreValue, styles.lost] }>
								{this.props.area}
							</Text>
						</View>
						<View style={ styles.personScore }>
							<Text style={ styles.personScoreHeader }>
								Distance
							</Text>
							<Text style={ styles.personScoreValue }>
								{this.props.distance}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>

			</View>

		);
	}

}

var styles=StyleSheet.create({
	cardContainer: {
		flex: 1,
		margin: 10,
		borderRadius: 3,
		overflow: 'hidden'
	},
	cardInfo: {
		borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
		borderLeftWidth: 1,
		borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
		borderRightWidth: 1,
		borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
		borderBottomWidth: 1,
		padding: 10,
		alignItems: 'center',
		flexDirection: 'row'
	},
	cardImage: {
		flex: 1,
		height: 200
	},
	cardPrice: {
		fontSize: 18,
		flex: 1,
		paddingLeft: 5,
		color:'#0d866e'
	},
	personScore: {
		flex: 0.5,
		alignItems: 'center',
		borderLeftColor: 'rgba( 10, 159, 129, 0.1 )',
		borderLeftWidth: 1,
	},
	personScoreHeader: {
		color: 'rgba( 205, 4, 72, 0.5 )',
		fontSize: 10,
		fontWeight: 'bold'
	},
	personScoreValue: {
		color: 'rgba( 0, 0, 0, 0.6 )',
		fontSize: 16
	},
	won: {
		color: '#0a9f81'
	},
	lost: {
		color: '#0a9f81'
	}

});
module.exports=CardsUI;
