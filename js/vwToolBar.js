var MEMO= MEMO|| {};
MEMO.vwToolBar= function($VW) {
	this.$VW= $VW;
	//this.prototype= new View($VW);
};
$.extend(MEMO.vwToolBar.prototype, {
	'name': 'vwToolBar',
	'init': function() {
		
		
		
		
	},
	'show': function() {
		this.$VW.stop().hide(0);
		this.$VW.show(0);
	},
	'hide': function() {
		this.$VW.stop().hide(0);
	},
	'clear': function(){
		$("ul.todo", this.$VW).html("");
	},
});