var rootUrl='http://nearpick-web.meteor.com/getRoomInfo/'
//var rootUrl='http://localhost:3000/getRoomInfo/'

module.exports= function(limit){
	var url=`${rootUrl}${limit}`
		fetch(url)
			.then(function(responseData){
					return responseData.json();

			})
			.then(function(roomData){
					return {roomInfo:roomData}
				});
};
