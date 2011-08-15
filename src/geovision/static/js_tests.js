/**
 * This file includes qunit tests for all javascript code not in external libraries.
 */

$(document).ready(function(){

		module("moreinfo.js");
		test("Alignment test", function()
		{
			expect(1);
			var alignment;
			equals(2, 2, 'Expected 2 as the result, result was: ' + divide(4,2));
		});

		module("graphviz.js");
		 /* Asynchronous testing required when using ajax!*/
		asyncTest("Graph creation and initial query result test", function()
		{
			expect(6);
			initGraph();
//			$.getJSON('/graphjson', query, function(json) {
//					rgraph.loadJSON(prepareJSON(json), query.root || 0);
//			});
			setTimeout(function(){
				ok(rgraph.busy==false, "rgraph.busy: " + rgraph.busy);
				ok(rgraph.config.levelDistance==Config.levelDistance, "rgraph.levelDistance: " + rgraph.config.levelDistance);
				ok(rgraph.config.Node.alpha==Config.Node.alpha, "rgraph.config.Node.alpha: " + rgraph.config.Node.alpha);
				ok(rgraph.config.Edge.dim==Config.Edge.dim, "rgraph.config.Edge.dim: " + rgraph.config.Edge.dim);
				ok(rgraph.json.length == 5, "rgraph.json.length was: " + rgraph.json.length);
				ok(rgraph.root=="R1", "rgraph.root was: " + rgraph.root);
				start();
			}, 1000);
		});

		module("events.js");
		asyncTest("Events test", function()
		{
			expect(5);
			initGraph();
			var node = rgraph.graph.getNode(rgraph.root);
			Config.Events.onMouseEnter(node);
			
			setTimeout(function(){
				
				var cursorStyle = rgraph.canvas.getElement().style.cursor;
				ok((rgraph.canvas.getElement().style.cursor=='pointer'), 'cursorStyle was pointer: ' + (cursorStyle=='pointer'));
				start();
			}, 1000);

//			node = rgraph.graph.getNode(rgraph.root);
//			Config.Events.onMouseLeave(node);
//			setTimeout(function(){
//
//				cursorStyle = rgraph.canvas.getElement().style.cursor;
//				ok(rgraph.canvas.getElement().style.cursor=='', 'cursorStyle was empty: ' + (cursorStyle==''));
//				ok(currentNode==undefined, 'currentNode was undefined: ' + (currentNode==undefined));
//				start();
//			}, 1000);

//			Config.Events.onClick(node);
//			setTimeout(function(){
////				var node = rgraph.graph.getNode(rgraph.root);
//
//				ok(currentNode!=undefined, 'currentNode was not undefined: ' + (currentNode!=undefined));
//				ok(('DB5' in rgraph.graph.nodes), 'DB5 was in the graph: ' + ('DB5' in rgraph.graph.nodes));
//				start();
//			}, 1000);
		});
	});