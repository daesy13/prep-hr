var newReleases = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
	];

// use forEach to get key and value for id & title
// newReleases.forEach(function(element){
// 	var videoAndTitlePairs = [];
//     videoAndTitlePairs.push({id: element.id, title: element.title});
//       console.log(videoAndTitlePairs)
//       return videoAndTitlePairs;
// });


// use map to get key and value for id & title
// console.log(newReleases.map(function(element){
// 	return {id : element.id, title: element.title}
// }))


// Use forEach function to accumulate every video with a rating of 5.0



// newReleases.forEach(function(video){
// 	var videos=[];
// 	if (video.rating === 5.0){
// 		videos.push(video)

// 	}
// 	return videos;
// })	


// *** joining filter & map to get ratings = 5.0 and return id only
// return newReleases.
// 		filter(function(video) {
// 			return video.rating === 5.0;
// 		}).
// 		map(function(video) {
// 			return video.id;
// 		});
// }

// *** Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.
allVideoIdsInMovieLists = [];

	movieLists.forEach(function(movieList) {
		movieList.videos.forEach(function(video) {
			allVideoIdsInMovieLists.push(video.id);
		});
	});

	return allVideoIdsInMovieLists;






	