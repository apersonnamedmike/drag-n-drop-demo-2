(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 980,
	height: 623,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/DMH_35_00_digital_display_numbers_SFS_dashes.png", id:"DMH_35_00_digital_display_numbers_SFS_dashes"},
		{src:"images/DMH_35_02_roasted_chicken.png", id:"DMH_35_02_roasted_chicken"},
		{src:"images/DMH_35_thermistor_alone.png", id:"DMH_35_thermistor_alone"},
		{src:"images/DMH_35_thermistor_buttons_.png", id:"DMH_35_thermistor_buttons_"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.DMH_35_00_digital_display_numbers_SFS_dashes = function() {
	this.initialize(img.DMH_35_00_digital_display_numbers_SFS_dashes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,9);


(lib.DMH_35_02_roasted_chicken = function() {
	this.initialize(img.DMH_35_02_roasted_chicken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3300,1694);


(lib.DMH_35_thermistor_alone = function() {
	this.initialize(img.DMH_35_thermistor_alone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1104,1103);


(lib.DMH_35_thermistor_buttons_ = function() {
	this.initialize(img.DMH_35_thermistor_buttons_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1308,1694);


(lib.WrongZone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("EggyAdNMAAAg6ZMBBlAAAMAAAA6Zg");
	this.shape.setTransform(206.5,215,0.983,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,413,430);


(lib.Title2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAWgXAfAAQAiAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAeADQgHAagTAOQgTAOgdAAQgiAAgWgWgAgdgxQgNANgCAVIBaAAQgCgVgIgKQgOgQgVAAQgSAAgMANg");
	this.shape.setTransform(208,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgyBAQgVgXAAgpQAAgZAJgUQAJgUASgKQASgKAUAAQAbAAARANQARAOAFAZIgbAEQgEgQgKgJQgKgIgOAAQgTAAgOAPQgNAPAAAgQAAAhANAPQANAPASAAQARAAALgKQALgKADgWIAcAEQgFAdgSAQQgTAQgbAAQggAAgVgWg");
	this.shape_1.setTransform(191.7,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_2.setTransform(179.7,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AgDBsQgJgFgDgIQgDgIAAgZIAAhdIgVAAIAAgXIAVAAIAAgoIAagRIAAA5IAcAAIAAAXIgcAAIAABfQAAALACAEQABAEADACQADABAHAAIAMgBIAEAZQgMACgJAAQgQAAgGgEg");
	this.shape_3.setTransform(171.8,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AgyBAQgVgXAAgpQAAgZAJgUQAJgUASgKQASgKAUAAQAbAAARANQARAOAFAZIgbAEQgEgQgKgJQgKgIgOAAQgTAAgOAPQgNAPAAAgQAAAhANAPQANAPASAAQARAAALgKQALgKADgWIAcAEQgFAdgSAQQgTAQgbAAQggAAgVgWg");
	this.shape_4.setTransform(159.7,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAagEQAfgEAQgGIAAgHQAAgSgIgHQgKgJgUAAQgTAAgJAHQgKAHgFARIgbgDQAEgSAIgLQAJgLAQgFQAQgGAUAAQAVAAANAFQANAFAHAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQACALAFAJIgeAAQgEgIgBgMQgPANgPAGQgMAFgRAAQgcAAgOgNgAgGAKQgQACgIADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIARAAQAOAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_5.setTransform(142.2,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("AgsBUIAAikIAZAAIAAAZQAKgRAIgGQAHgFAJAAQAPAAAOAJIgJAaQgLgGgKAAQgJAAgGAFQgHAGgDAKQgFAPAAARIAABVg");
	this.shape_6.setTransform(129.4,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AhWByIAAjjIBWAAQAWAAAMACQAQADALAIQAMAHAHAPQAHAOAAARQAAAdgSATQgTAUgxAAIg4AAIAABdgAg3gEIA4AAQAeAAANgLQAMgLAAgUQAAgOgHgKQgIgKgMgEQgIgCgUAAIg4AAg");
	this.shape_7.setTransform(112.6,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006699").s().p("Ag1BAQgWgXAAgoQAAgoAWgXQAVgXAhAAQAhAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAdADQgGAagTAOQgTAOgdAAQgiAAgVgWgAgegxQgNANgBAVIBaAAQgBgVgJgKQgOgQgVAAQgSAAgNANg");
	this.shape_8.setTransform(83.5,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006699").s().p("AgrBUIAAikIAZAAIAAAZQAKgRAIgGQAFgFALAAQAOAAAPAJIgKAaQgKgGgLAAQgJAAgFAFQgIAGgDAKQgEAPgBARIAABVg");
	this.shape_9.setTransform(70.7,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006699").s().p("AgkBPQgNgGgGgIQgHgJgCgMQgCgJAAgRIAAhmIAcAAIAABbQAAAVACAJQADALAIAGQAJAGANAAQAKAAALgGQALgHAFgLQAFgMAAgVIAAhXIAcAAIAAClIgZAAIAAgZQgUAdgfgBQgPAAgMgFg");
	this.shape_10.setTransform(55,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("AgDBsQgJgFgDgIQgDgIAAgZIAAhdIgVAAIAAgXIAVAAIAAgoIAZgRIAAA5IAdAAIAAAXIgdAAIAABfQABALABAEQABAEAEACQADABAHAAIAMgBIAEAZQgMACgJAAQgPAAgHgEg");
	this.shape_11.setTransform(42,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAagEQAfgEAQgGIAAgHQAAgSgIgHQgKgJgUAAQgTAAgJAHQgKAHgFARIgbgDQAEgSAIgLQAJgLAQgFQAQgGAUAAQAVAAANAFQANAFAHAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQACALAFAJIgeAAQgEgIgBgMQgPANgPAGQgMAFgRAAQgcAAgOgNgAgGAKQgQACgIADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIARAAQAOAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_12.setTransform(28.4,12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006699").s().p("AgsBUIAAikIAZAAIAAAZQAKgRAJgGQAGgFAKAAQAOAAAOAJIgJAaQgLgGgKAAQgJAAgFAFQgIAGgDAKQgFAPAAARIAABVg");
	this.shape_13.setTransform(15.5,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006699").s().p("Ag1BAQgWgXAAgoQAAgoAWgXQAVgXAhAAQAhAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAdADQgHAagSAOQgTAOgdAAQgiAAgVgWgAgegxQgNANgBAVIBaAAQgBgVgJgKQgOgQgVAAQgSAAgNANg");
	this.shape_14.setTransform(-0.1,12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006699").s().p("AhGB0IAAjkIAZAAIAAAWQAKgMALgHQALgGAPAAQAUAAARALQAQAKAJAVQAHAUABAXQgBAagIASQgJAVgSALQgSALgSgBQgMAAgMgFQgLgGgHgJIAABQgAgfhNQgOARAAAhQAAAdANAQQANAPASAAQARAAANgPQAOgRAAgfQAAgfgNgRQgNgPgRAAQgSAAgNAQg");
	this.shape_15.setTransform(-17.4,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006699").s().p("ABUBUIAAhmQAAgRgCgHQgEgIgGgFQgIgEgJAAQgSAAgMAMQgLALAAAaIAABeIgbAAIAAhqQAAgSgGgKQgHgJgPAAQgMAAgLAGQgJAGgFAMQgFANAAAWIAABUIgcAAIAAikIAaAAIAAAYQAHgNANgHQANgHAQAAQATAAAMAHQAJAIAGAOQATgdAfAAQAaAAANANQANAOAAAcIAABwg");
	this.shape_16.setTransform(-40,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAVgXAgAAQAiAAAVAWQAVAXAAAoIAAAGIh6AAQACAcAOAOQANAPAUAAQAPAAALgIQALgIAGgSIAeADQgHAagTAOQgTAOgcAAQgjAAgWgWgAgdgxQgNANgCAVIBaAAQgCgVgIgKQgOgQgVAAQgSAAgMANg");
	this.shape_17.setTransform(-62.3,12.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006699").s().p("AgOByIAAjIIhLAAIAAgbICzAAIAAAbIhLAAIAADIg");
	this.shape_18.setTransform(-80.9,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006699").s().p("AgwBpQgTgOABgbIAcAFQABAMAIAGQALAIARAAQASAAAKgIQALgIAEgOQACgJAAgbQgTAVgZABQgigBgTgYQgTgZAAghQAAgXAJgUQAIgVARgKQAQgLAWAAQAbAAAUAYIAAgVIAZAAIAACOQABAngIAQQgIAQgRAJQgRAKgYAAQgdAAgSgNgAgdhPQgOAPAAAeQAAAhANANQANAPARAAQAUAAANgOQAOgOAAggQAAgegOgQQgOgPgTAAQgQAAgNAPg");
	this.shape_19.setTransform(-109,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006699").s().p("AAnBUIAAhjQAAgRgEgIQgCgJgJgFQgJgFgKAAQgRAAgNALQgNAMAAAgIAABYIgcAAIAAikIAZAAIAAAYQATgbAgAAQAPAAANAFQANAFAFAJQAHAJACAMQACAIAAATIAABkg");
	this.shape_20.setTransform(-126.3,12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_21.setTransform(-138.7,9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006699").s().p("AAhByIg1hVIgTATIAABCIgcAAIAAjjIAcAAIAACAIBAhBIAlAAIg+A8IBEBog");
	this.shape_22.setTransform(-149.3,9.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006699").s().p("Ag3BAQgVgXAAgpQAAgtAagWQAVgSAdAAQAiAAAWAWQAVAWAAAoQAAAegJASQgKATgSAKQgTAKgVAAQghAAgWgWgAghguQgOAPAAAfQAAAfAOAQQAOAQATAAQAVAAAOgQQANgQAAgfQAAgegNgQQgPgQgUAAQgTAAgOAQg");
	this.shape_23.setTransform(-167.3,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006699").s().p("Ag3BAQgVgXAAgpQAAgtAagWQAVgSAdAAQAiAAAWAWQAVAWAAAoQAAAegJASQgKATgSAKQgTAKgVAAQghAAgWgWgAghguQgOAPAAAfQAAAfAOAQQAOAQATAAQAVAAAOgQQANgQAAgfQAAgegNgQQgPgQgUAAQgTAAgOAQg");
	this.shape_24.setTransform(-185.1,12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006699").s().p("Ag0BnQgYgPgMgdQgMgdAAgeQAAgkAOgbQAOgbAZgNQAZgOAcAAQAjAAAXARQAYASAJAgIgeAHQgIgZgPgLQgPgMgXAAQgZAAgRANQgSANgHAUQgIAWAAAWQAAAcAJAVQAIAXASAKQASALATAAQAaAAARgPQASgPAGgdIAfAIQgKAlgZAVQgYATgkAAQgjAAgXgPg");
	this.shape_25.setTransform(-205.3,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-10,453,39.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHIAAgOIAOAAIAAAOg");
	this.shape.setTransform(585.7,481.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_1.setTransform(578.9,478.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAIAAAIIAAAqg");
	this.shape_2.setTransform(572.5,478.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgNIAAgxIAOAAIAAAsIABAPQABAGAFACQAEAEAGAAQAEAAAGgEQAGgDACgGQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_3.setTransform(564.6,478.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_4.setTransform(558.1,476.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgEAEQgFADgDAIIgNgBQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADAAADQgBAGAEAEQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgKIAAgEQgHACgOACg");
	this.shape_5.setTransform(551.3,478.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAIAAAIIAAAqg");
	this.shape_6.setTransform(544.9,478.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_7.setTransform(537.1,478.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAGgEQAGgDAFAAQALAAAIAGQAIAFAFAKQADAKAAAMQAAAMgEAJQgFAKgIAFQgJAGgJAAQgFAAgGgDQgGgDgDgEIAAAogAgPgmQgHAJABAQQgBAOAHAIQAGAHAJAAQAIAAAHgHQAGgIAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_8.setTransform(528.4,479.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFgBQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_9.setTransform(517.1,478.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_10.setTransform(505.9,478.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_11.setTransform(499.4,476.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_12.setTransform(488.1,478.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_13.setTransform(479.2,476.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_14.setTransform(472.7,476.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_15.setTransform(462.4,476.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAgQgKgLAAgVQAAgMAFgKQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACAMIgOACQgCgIgEgEQgGgFgHAAQgIABgHAHQgGAIAAAPQgBAQAHAIQAGAHAJAAQAIABAGgGQAFgFACgLIANACQgBAPgKAIQgJAIgOAAQgPAAgLgLg");
	this.shape_16.setTransform(454.2,478.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_17.setTransform(445.4,478.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_18.setTransform(436.5,476.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAgQgLgLAAgVQABgMAEgKQAEgKAJgFQAJgFAJAAQANAAAJAHQAJAHACAMIgNACQgDgIgFgEQgEgFgHAAQgJABgGAHQgIAIAAAPQABAQAGAIQAHAHAIAAQAIABAFgGQAGgFACgLIANACQgCAPgJAIQgKAIgNAAQgPAAgKgLg");
	this.shape_19.setTransform(428.4,478.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAfQgKgKAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_20.setTransform(415.2,478.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_21.setTransform(408.6,476.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_22.setTransform(399.7,476.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_23.setTransform(392.9,478.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgFAEQgEADgDAIIgNgBQACgJAEgGQAEgFAJgDQAIgDAIAAQALAAAHACQAGADADAEQAEAEAAAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgIAAQgOAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgKIAAgEQgHACgOACg");
	this.shape_24.setTransform(384,478.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAQApIgNgwIgDgOIgQA+IgOAAIgZhRIAOAAIANAuIAFASIAEgRIAOgvIAMAAIANAuIADAQIAGgQIANguIAPAAIgaBRg");
	this.shape_25.setTransform(373.8,478.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgNIAAgxIAOAAIAAAsIABAPQABAGAFACQAEAEAGAAQAEAAAGgEQAGgDACgGQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_26.setTransform(359.1,478.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAfQgKgKAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_27.setTransform(350.2,478.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdA4IgBgNIAIABQAEAAADgBIAEgFIAFgKIABgEIgghRIAQAAIARAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgEAHgFAEQgEADgHAAIgJgCg");
	this.shape_28.setTransform(341.9,479.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_29.setTransform(328.9,478.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAFgJAEgDQACgDAFAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAIAAAIIAAAqg");
	this.shape_30.setTransform(322.4,478.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_31.setTransform(314.6,478.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_32.setTransform(305.7,476.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQApIgNgwIgDgOIgQA+IgOAAIgahRIAPAAIANAuIAFASIAEgRIAOgvIAMAAIANAuIADAQIAGgQIANguIAPAAIgaBRg");
	this.shape_33.setTransform(295.5,478.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAFgJAEgDQACgDAFAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAIAAAIIAAAqg");
	this.shape_34.setTransform(283.3,478.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_35.setTransform(275.5,478.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_36.setTransform(268.9,476.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_37.setTransform(262.1,478.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFgBQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_38.setTransform(251,478.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbAfQgKgKAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_39.setTransform(239.9,478.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFgBQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_40.setTransform(228.8,478.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQADgDAFAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAIAAAIIAAAqg");
	this.shape_41.setTransform(220.1,478.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_42.setTransform(212.3,478.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_43.setTransform(203.4,476.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_44.setTransform(196.8,476.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_45.setTransform(185.6,478.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_46.setTransform(176.7,476.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_47.setTransform(170.1,476.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_48.setTransform(161.5,476.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAfQgKgKAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_49.setTransform(154.4,478.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgqA5IAAhxIAqAAIAQABQAJACAFAEQAGAEAEAHQADAHAAAIQAAAPgJAIQgKAKgYAAIgbAAIAAAvgAgbgBIAbAAQAPAAAGgGQAGgFAAgKQAAgHgDgFQgEgGgGgBIgOgBIgbAAg");
	this.shape_50.setTransform(573,456.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_51.setTransform(565.2,456.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGA5IAAhjIgmAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_52.setTransform(558.1,456.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_53.setTransform(544.2,458.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_54.setTransform(535.3,456.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_55.setTransform(528.8,457);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_56.setTransform(517.5,456.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_57.setTransform(511,457);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_58.setTransform(506.9,456.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAQApIgOgvIgCgPIgPA+IgPAAIgahRIAPAAIANAuIAFARIAFgQIANgvIAMAAIAMAuIAEAQIAGgQIAOguIANAAIgaBRg");
	this.shape_59.setTransform(499.3,458.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_60.setTransform(487,457);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_61.setTransform(482.9,456.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgEQAGgDAHAAQAKAAAIAGQAIAFAEAKQAFAKAAAMQgBAMgEAJQgEAKgJAFQgJAGgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgHAJAAAQQAAAOAHAHQAGAIAJAAQAIAAAHgIQAGgIAAgOQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_62.setTransform(472.4,459.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_63.setTransform(463.3,458.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_64.setTransform(456.8,458.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_65.setTransform(448.8,456.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRA0QgIgFgFgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAHAAQAJAAAGgHQAHgIgBgPQABgQgHgHQgGgIgKAAQgHAAgHAHg");
	this.shape_66.setTransform(435.4,456.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_67.setTransform(426.8,458.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgCIAAgFQAAgIgEgDQgFgFgKAAQgJAAgFAEQgFADgCAIIgNgBQACgJAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQAEAEAAAGIABAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAFAEQAEAEAIAAQAGAAAHgEQAGgDADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_68.setTransform(417.9,458.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_69.setTransform(406.7,462.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgRA0QgIgFgFgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgNgIQgHAIAAAOQAAAQAHAIQAHAIAGAAQAJAAAHgHQAGgIABgPQgBgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_70.setTransform(399.8,456.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_71.setTransform(391.2,458.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_72.setTransform(382.3,458.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_73.setTransform(376,456.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_74.setTransform(364.5,458.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_75.setTransform(355.6,456.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_76.setTransform(349,457);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFAAQgFAAgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_77.setTransform(340.2,458.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_78.setTransform(332.4,458.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFApIgfhRIAOAAIASAwIAEARIAFgQIASgxIAOAAIgfBRg");
	this.shape_79.setTransform(324,458.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_80.setTransform(315.5,458.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_81.setTransform(304.6,458.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_82.setTransform(296.8,458.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_83.setTransform(290.3,457);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_84.setTransform(283.5,458.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgDgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgGAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_85.setTransform(272.4,458.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_86.setTransform(261.2,458.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgDgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgGAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_87.setTransform(250.1,458.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAANQAFgJAEgDQACgDAFAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_88.setTransform(241.4,458.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_89.setTransform(233.6,458.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_90.setTransform(224.7,456.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_91.setTransform(218.2,457);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_92.setTransform(206.9,458.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_93.setTransform(198,456.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_94.setTransform(191.5,457);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_95.setTransform(180,459.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgFgFgKAAQgJAAgEAEQgGADgBAIIgPgBQACgJAFgGQAEgFAIgDQAIgDAJAAQALAAAGACQAHADADAEQADAEABAGIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgCADABAEQAAAFADAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_96.setTransform(171.3,458.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_97.setTransform(164.9,458.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AguA5IAAhxIAoAAQALAAAHACQAKACAHAGQAJAIAEAMQAFAMAAAOQAAAMgDAKQgDAKgFAHQgFAGgFAEQgGAEgIACQgIACgJAAgAgfArIAZAAQAJAAAHgCQAGgCAEgEQAFgFADgJQADgJAAgMQAAgRgGgKQgGgKgIgDQgGgCgMAAIgYAAg");
	this.shape_98.setTransform(156,456.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.DMH_35_02_roasted_chicken();
	this.instance.setTransform(0,0,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,503.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_thermistor_buttons_();
	this.instance.setTransform(0,0,0.169,0.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.7,285.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_thermistor_alone();
	this.instance.setTransform(0,0,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.2,198);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhMjAwqMAAAhhUMCZHAAAMAAABhUg");
	this.shape.setTransform(490,311.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,623);


(lib.SceneBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AtlNmIAA7LIbKAAIAAbLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.CorrectDropZone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("A1sYIMAAAgwPMArZAAAMAAAAwPg");
	this.shape.setTransform(137.5,150,0.989,0.971);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,300);


(lib.Thermometer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Hiding Shape (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxqRrQnVnUAAqXQAAqWHVnUQHUnVKWAAQKXAAHUHVQHVHUAAKWQAAKXnVHUQnUHVqXAAQqWAAnUnVg");

	// Thermometer
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,99,99);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:99.1,x:4.8,y:4.8},0).wait(1).to({x:9.3,y:9.2},0).wait(1).to({x:13.5,y:13.4},0).wait(1).to({x:17.5,y:17.5},0).wait(1).to({x:21.3,y:21.2},0).wait(1).to({x:24.9,y:24.8},0).wait(1).to({x:28.3,y:28.2},0).wait(1).to({x:31.5,y:31.4},0).wait(1).to({x:34.5,y:34.4},0).wait(1).to({x:37.3,y:37.3},0).wait(1).to({x:40,y:40},0).wait(1).to({x:42.5,y:42.5},0).wait(1).to({x:44.9,y:44.9},0).wait(1).to({x:47.2,y:47.1},0).wait(1).to({x:49.3,y:49.2},0).wait(1).to({x:51.3,y:51.2},0).wait(1).to({x:53.1,y:53.1},0).wait(1).to({x:54.9,y:54.9},0).wait(1).to({x:56.6,y:56.5},0).wait(1).to({x:58.2,y:58.1},0).wait(1).to({x:59.7,y:59.7},0).wait(1).to({x:61.2,y:61.1},0).wait(1).to({x:62.5,y:62.5},0).wait(1).to({x:63.9,y:63.8},0).wait(1).to({x:65.2,y:65.1},0).wait(1).to({x:66.4,y:66.4},0).wait(1).to({x:67.7,y:67.6},0).wait(1).to({x:68.9,y:68.8},0).wait(1).to({x:70.1,y:70},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,198.1,198);


// stage content:



(lib.DragAndDrop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Scene2:0,"Drag Func":16});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		
		INSTRUCTIONS: Select all (ctrl/Command +A), copy (ctrl/Command +C), and then paste 
		into the actions panel in animate, when you’re on an “Actions” layer. MAKE SURE YOU’RE ON THE FIRST FRAME.
		
		Also, save as a code snippet so you don’t have to keep coming back here for this
		
		responsive scale code as expressed by @davegamez 
		
		*/
		
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#ffffff";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
		createjs.Touch.enable(stage);
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.gotoScene1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			this.gotoAndPlay("Scene 1");
		}
	}
	this.frame_16 = function() {
		this.stop();
		
		var dragger = this.thermometer;
		var right = this.targetRight;
		var wrong = this.targetWrong;
		
		//this drags with mouse, but not with fingers
		dragger.on("pressmove", function(evt){
			evt.currentTarget.x = evt.stageX;
		    evt.currentTarget.y = evt.stageY;
		    stage.update(evt);
		 }, this);
		
		//refuses to release. doesn't recognize it.
		dragger.on("pressup", function(evt){	//this function will be very custom, always
			//lock position of thermometer and play stabby animation
			dragger.x = dragger.x;
			dragger.y = dragger.y;
		
		
			//When you comment the usage of intersect out, it works fine.
			///*
			if(intersect(evt.currentTarget, right)){    //Intersection testing for good (intersect(evt.currentTarget, right))
				alert("YAY you're right AND it works!");
		
			}else if(intersect(evt.currentTarget, wrong)){	//intersection Testing for bad
				alert("BOO its wrong, but YAY it works");
			}
			//*/
		
		    stage.update(evt);
		}, this);
		
		//Tests if two objects are intersecting
		//Sees if obj1 passes through the first and last line of its
		//bounding box in the x and y sectors
		//Utilizes globalToLocal to get the x and y of obj1 in relation
		//to obj2
		//PRE: Must have bounds set for each object
		//Post: Returns true or false
		function intersect(obj1, obj2){	
		  var objBounds1 = obj1.getBounds().clone();
		  var objBounds2 = obj2.nominalBounds.clone();
		
		  var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);
		  
		  var h1 = -(objBounds1.height / 2 + objBounds2.height);
		  var h2 = objBounds2.width / 2;
		  var w1 = -(objBounds1.width / 2 + objBounds2.width);
		  var w2 = objBounds2.width / 2;
		 
		  
		  if(pt.x > w2 || pt.x < w1) return false;
		  if(pt.y > h2 || pt.y < h1) return false;
		  
		  return true;
		}
		
		stage.update();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(4));

	// GoTo Scene 1
	this.gotoScene1 = new lib.SceneBtn();
	this.gotoScene1.setTransform(485,597,0.299,0.218);
	new cjs.ButtonHelper(this.gotoScene1, 0, 1, 2, false, new lib.SceneBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gotoScene1).wait(20));

	// Scene Btn Txt
	this.text = new cjs.Text("2", "28px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 48;
	this.text.setTransform(555,578);

	this.text_1 = new cjs.Text("1", "28px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 48;
	this.text_1.setTransform(483,578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(20));

	// Thermometer
	this.thermometer = new lib.Thermometer();
	this.thermometer.setTransform(748.4,391.1,1,1,0,0,0,-60,-63);
	this.thermometer.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.thermometer).wait(1).to({regX:30.5,regY:30.5,x:838.9,y:484.6,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(5));

	// Right Drop Zone
	this.targetRight = new lib.CorrectDropZone();
	this.targetRight.setTransform(137.5,150,1,1,0,0,0,137.5,150);
	this.targetRight.alpha = 0.148;
	this.targetRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.targetRight).wait(15).to({_off:false},0).wait(5));

	// Wrong Drop Zone
	this.targetWrong = new lib.WrongZone();
	this.targetWrong.setTransform(574,0,0.722,1,0,0,0,413,0);
	this.targetWrong.alpha = 0.148;
	this.targetWrong._off = true;

	this.timeline.addTween(cjs.Tween.get(this.targetWrong).wait(15).to({_off:false},0).wait(5));

	// Dashes
	this.instance = new lib.DMH_35_00_digital_display_numbers_SFS_dashes();
	this.instance.setTransform(760,162.8,0.714,0.714);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(5));

	// Thermometer Display
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(819.7,202.9,1,1,0,0,0,110.4,142.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(5));

	// Title
	this.instance_2 = new lib.Title2();
	this.instance_2.setTransform(490,26,1,1,0,0,0,0,9.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.1,regY:12.7,x:490.1,y:28.9,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(5));

	// Background
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(490,301.5,1,1,0,0,0,490,251.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(5));

	// White Base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMjAo3MAAAhRsMCZHAAAMAAABRsg");
	this.shape.setTransform(490,311.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Base
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(490,24.9,1,1,0,0,0,490,24.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:311.5,y:311.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(490,311.5,980,623);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;