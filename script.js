document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();
	var gender = document.querySelector('input[name="gender"]:checked').value;
	var weight = parseFloat(document.querySelector('input[name="weight"]').value);
	var age = parseInt(document.querySelector('input[name="age"]').value);
	var height = parseFloat(document.querySelector('input[name="height"]').value) / 100;
	var bmi = weight / (height * height);
	var status = '';
	var recommendation = '';
	
	if (gender == 'pria') {
		if(bmi<18.5){
			status = 'Kurus';
			recommendation = 'menambah berat badan';
		}else if(18.5<=bmi&&bmi<=24.9){
			status = 'Sehat';
			recommendation = 'menjaga berat badan Anda';
		}else if(25<=bmi&&bmi<=29.9){
			status = 'Gemuk';
			recommendation = 'menurunkan berat badan';
		}else if(30<=bmi&&bmi<=34.9){
			status = 'Obesitas';
			recommendation = 'menurunkan berat badan secara signifikan';
		}else if(35<=bmi){
			status = 'Obesitas Ekstrem';
			recommendation = 'menghubungi dokter atau ahli gizi segera';
		}
	} else {
		if(bmi<18.5){
			status = 'Kurus';
			recommendation = 'menambah berat badan';
		}else if(18.5<=bmi&&bmi<=24.9){
			status = 'Sehat';
			recommendation = 'menjaga berat badan Anda';
		}else if(25<=bmi&&bmi<=29.9){
			status = 'Gemuk';
			recommendation = 'menurunkan berat badan';
		}else if(30<=bmi&&bmi<=34.9){
			status = 'Obesitas';
			recommendation = 'menurunkan berat badan secara signifikan';
		}else if(35<=bmi){
			status = 'Obesitas Ekstrem';
			recommendation = 'menghubungi dokter atau ahli gizi segera';
		}
	}
	
	document.getElementById('bmi').innerHTML = bmi.toFixed(2);
	document.getElementById('status').innerHTML = status;
	document.getElementById('weight-category').innerHTML = status;
	document.getElementById('recommendation').innerHTML = recommendation;
	document.querySelector('.result').style.display = 'block';
});

document.querySelector('input[type="reset"]').addEventListener('click', function() {
	// document.querySelector('.result').style.display = 'none'; <-- remove this line
	document.getElementById('recommendation').innerHTML = '';
});
