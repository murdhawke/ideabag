var app = new Vue({
	el: '#app',
	data:{
		num1: '',
		num2: '',
		checked:'',
		finans:'',
		return:{
			checked: null
		}
	},
	watch: {
		checked(newValue){
			rad();
		}
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

 function rad(){
 	if (app.checked == "mul") {
 		app.finans = app.multip;
 	}
 	else if (app.checked == "add") {
 		app.finans = app.addit;
 	}
 	else if (app.checked == "div") {
 		app.finans = app.divis;
 	}
 	else{
 			app.finans = app.subtr;
 	}
 }



