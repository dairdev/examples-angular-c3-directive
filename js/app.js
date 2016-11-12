angular.module('examplesC3ng', ['gridshore.c3js.chart']);

angular.module('examplesC3ng').controller('ExamplesController', function(){
	var vm = this;

	vm.gaugeMax=120;
	vm.gaugeValue= 38;
	vm.gauge = [];
	vm.gauge.column = [{ "id" : "Category", 'type': 'gauge' }];
	vm.gauge.data = [{ 'Category':  vm.gaugeValue }];

	vm.updateGauge = updateGauge;

	vm.gaugeCallback = function (_gaugeChart){
		vm.gaugeChart = _gaugeChart;
	};

	function updateGauge(){
		vm.gauge.data = [{ 'Category':  vm.gaugeValue }];
		vm.gaugeChart.internal.config.gauge_max = vm.gaugeMax;
		vm.gaugeChart.flush();
	}

});
