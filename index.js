let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	let email=document.getElementById('email').value;
	let age=document.getElementById('age').value;
	let phone=document.getElementById('phone').value;
	let adhaarnumber=document.getElementById('adhaarnumber').value;
	let adress=document.getElementById('adress').value;
	let date=document.getElementById('date').value;
	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[{name:name,email:email,age:age,phone:phone,adhaarnumber:adhaarnumber,adress:adress,date:date}];
				setCrudData(data);
			}else{
				arr.push({name:name,email:email,age:age,phone:phone,adhaarnumber:adhaarnumber,adress:adress,date:date});
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k]['name']}</td><td>${arr[k]['email']}</td><td>${arr[k]['age']}</td><td>${arr[k]['phone']}</td><td>${arr[k]['adhaarnumber']}</td><td>${arr[k]['adress']}</td><td>${arr[k]['date']}</td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}