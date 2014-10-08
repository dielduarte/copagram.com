var setting = {
	hashtags: "copagram",
	client_id: "a2b4e3e7da704010a5d87416baec426e",
	images_to_fetch: 5,
	fetch_time: 150,
	display_time: 150
};

var imgs = new Array();

function loadPics()
{
	
	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: "https://api.instagram.com/v1/tags/" + setting.hashtags + "/media/recent",
		data: {
			access_token: null,
			client_id: setting.client_id,
			count: 200
		},
		success: function(dados) {

			var fotos = dados.data;

			for (var i = 0; i < fotos.length; i++) {
				
				var foto = fotos[i];

				var img = foto.images.standard_resolution.url;
				var like = foto.likes.count;
				var user = foto.user.username;
				var link = foto.link;

				imgs.push({img: img, user: user, like: like, link: link});

			}

			
			imgs.sort(function(a, b){return b.like-a.like});


			for(var i = 0; i < 5; i++){

				var id     = "#"+ i;
				var nick   = '.nm'+ i;
				var	url    = '.url'+i;
				var Nlikes = '.like'+i; 

				
				
				$(id).attr('src', imgs[i].img);
				$(nick).text(imgs[i].user);
				$(Nlikes).text(imgs[i].like + " Likes");
				$(url).prop('href', imgs[i].link);
				$(url).attr('target','_blank');

			}
		}
	});

	setTimeout(function() {
		loadPics();
	}, setting.fetch_time * 1000);
}


$(document).ready(function(){
	loadPics();
});
