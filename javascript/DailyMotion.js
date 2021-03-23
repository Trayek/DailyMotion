define(["sitecore"], function (Sitecore) {
  Sitecore.Commands.DailyMotionSync =
  {
    canExecute: function (context) {
      return true;
    },
    execute: function (context) {
	  fetch("https://api.dailymotion.com/user/[username-or-id]/videos?fields=id%2Ctags%2Cdescription%2Cduration%2Ctitle")
	  .then((resp) => resp.json())
	  .then(function(data) {
		let videos = data.list;
		alert ("found " + videos.length + " videos to import" );
		
		var i;
		for (i = 0; i < videos.length; i++) {
			var xhr = new XMLHttpRequest();
			  xhr.open("POST", origin + "/sitecore/api/ssc/item/[path-to-your-item-here]");
			  xhr.setRequestHeader("Content-Type", "application/json");
			  var obj = {};
			  obj['ItemName'] = videos[i].id;
			  obj['__Display Name'] = videos[i].title;
			  obj['TemplateID'] = "[your-template-id-here]";
			  obj['Title'] = videos[i].title;
			  obj['DailyMotionMovie'] = videos[i].id;
			  obj['Description'] = videos[i].description;
			  // and more fields if needed
			  xhr.send(JSON.stringify(obj, null, 4));
		}
	  })
	  .catch(function(error) {
		  alert ("something went wrong");
		  console.log(error);
	  });
    }
  };
});