var app = new Vue({
	el: '#app',
	data:{
		num1: '',
		num2: '',
		checker:'',
		finans:'',
		operation:''
		},
	computed:{
		multip: function(){
			answer = parseInt(app._data.num1) * parseInt(app._data.num2);
			return answer;
		},
		addit: function(){
			answer = parseInt(app._data.num1) + parseInt(app._data.num2);
			return answer;
		},
		divis: function(){
			answer = parseInt(app._data.num1) / parseInt(app._data.num2);
			return answer;
		},
		subtr: function(){
			answer = parseInt(app._data.num1) - parseInt(app._data.num2);
			return answer;
		}
	}
})


function radioVal (){
		if (app._data.checker == "mul") {
			app._data.finans = app.multip;
		}
		else if (app._data.checker == "div") {
			app._data.finans = app.divis;
		}
		else if (app._data.checker == "sub") {
			app._data.finans = app.subtr;
		}	
		else if (app._data.checker == "add") {
			app._data.finans = app.addit;
		}
		else {
			app._data.operation == "operation";
			console.log("Error!! Kindly check your input!");
		}
	}


