/* config.js - Initialize all globals and the config dict */

// Copied from JIT example code. Probably not necessary
var labelType, useGradients, nativeTextSupport, animate;
(function() {
  var ua = navigator.userAgent,
	  iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
	  typeOfCanvas = typeof HTMLCanvasElement,
	  nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
	  textSupport = nativeCanvasSupport 
		&& (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var rgraph;
var RGraph = $jit.RGraph;
var busy = false;
var defaultsettings = {
		animationsettings:
			{duration:"1000",
			transition:"$jit.Trans.linear",
			type:"animate"},
		settings:
			{canvaswidth: 600,
			canvasheight: 600}
};
var w = 0;
var h = 0;
		if (settings == undefined) settings = defaultsettings;
		if (settings.settings == undefined) settings.settings = defaultsettings.settings;
		if (settings.animationsettings == undefined) settings.animationsettings = defaultsettings.animationsettings;
		if (settings.settings.canvaswidth!=undefined){
			w = parseInt(settings.settings.canvaswidth)
		}
		else {
			w = defaultsettings.settings.canvaswidth
		}
		if (settings.settings.canvasheight!=undefined){
			h = parseInt(settings.settings.canvasheight)
		}
		else {
			h = defaultsettings.settings.canvaswidth
		}
		if (settings.animationsettings.duration!=undefined){
			d = parseInt(settings.animationsettings.duration)
		}
		else {
			d = defaultsettings.animationsettings.duration
		}
		if (settings.animationsettings.transition!=undefined){
			t = settings.animationsettings.transition
		}
		else {
			t = defaultsettings.animationsettings.transition
		}
		t = eval(t);

var Config = 
{
		//Where to append the visualization
		injectInto: 'infovis',
		//set canvas size
		width:w,
		height:h,
		//Optional: create a background canvas that plots
		//concentric circles.
		background: { CanvasStyles: { strokeStyle: '#555' } },
		//set distance for nodes on different levels
		levelDistance: 100,
		//set transformation speed
		duration: d,
		fps: 40,
		//set transformation style
		transition: t,
		//Add navigation capabilities:
		//zooming by scrolling and panning.
		Navigation:
		{
		  enable: true,
		  panning: 'avoid nodes',
		  zooming: 25
		},
		//Set Node and Edge styles.
		Node:
		{
			overridable: true,
			color: '#ff0000',
			alpha: 0.6,
			dim: 7.0,
//			lineWidth: 0.5,
			angularWidth: 1,
			span:1,
			type: 'customCircle',
			CanvasStyles: {}
		},
		Edge:
		{
			overridable: true,
			color: '#888800',
			alpha: 0.6,
			type: 'customArrow',

			lineWidth:1.5,
		//	lineWidth_hover: 5.0,
			dim: 10,
		//	dim_hover: 15
		}
};
jQuery(function($) {
/*! Function to open the graph-option-navigation and the alignment and other items with a nice animations.*/
	/*setting stuff in css to the prefered size*/
	$('#infovis').css('height', parseInt(settings.settings.canvasheight));
	$('#infovis').css('width', parseInt(settings.settings.canvaswidth));
	$('#center-container').css('width', parseInt(settings.settings.canvaswidth));
	$('#center-container').css('height', parseInt(settings.settings.canvasheight));
	$('#right-container').css('height', parseInt(settings.settings.canvasheight));
	$('#container').css('width', parseInt(settings.settings.canvaswidth)+400);
	$('#container').css('height', parseInt(settings.settings.canvasheight));
});