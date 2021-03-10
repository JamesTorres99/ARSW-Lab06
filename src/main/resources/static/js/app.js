const app = (function() {
	
	let _author;
	let _blueprints;
	
	var _refreshAuthorState = function(author, blueprintObjects){
		
			_author = author;
			_blueprints = blueprintObjects.map((blueprint) => {
				return {name: blueprint.name, puntos: blueprint.points.length}
			});
			
			if (author === "" || author == null){
				alert("¡Debe poner un nombre en el buscador!");
			} else {
				$("#result-name").text(author+"'s Blueprints:");
			}
			$("#result-blueprints-detail td ").remove();
			_blueprints.map((blueprint) => {
				$("#result-blueprints-detail").append(
					"<tr><td>"+blueprint.name+"</td>"+
					"<td>"+blueprint.puntos+"</td>"+
					"<td><button>Open</button></td></tr>"
				);
			});
			
			let totalPuntos = _blueprints.reduce((total, currentValue) => total+currentValue.puntos, 0);
			alert(totalPuntos);
			$("#result-total-points").text("Total user's points: "+totalPuntos);
			
	};
	
	var innerModule = {
		getAuthorBlueprints: function(){
			let author = $("#author-name").val();
			apimock.getBlueprintsByAuthor(author, _refreshAuthorState);
		}
	};
	
	return innerModule;

})();
