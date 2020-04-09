var slims = document.querySelectorAll(".slim");
for (let slim of slims){
	slim.addEventListener("mouseover", function () {
		slim.style.color = "#fff";
});
}
for (let slim of slims){
	slim.addEventListener("mouseout", function () {
		slim.style.color = "rgba(255,255,255,.5)";
});
}

// var inputs = document.querySelectorAll("input");
// for (let input of inputs){
// input.addEventListener("submit", function (e) {
// 	// body...
// 	e.preventDefault();
//     	if (input.value==0) {
//     		alert('Input must be filled out');
//     	}
// }

// document.getElementById('inscription').addEventListener("submit", function (e) {
// 	e.preventDefault();
// 	// var name = document.getElementById("name");
// 	// var adresse = document.getElementById("adresse");
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     //var comments = document.getElementById("comments");
//     var regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var regexpwd = /(?=(.*[a-z])*)(?=(.*[0-9]))(?=(.*[A-Z]){1,})/;
//     var check = true;


//     // var inputs = document.querySelectorAll("input");
//     // for (var i = 0; i < inputs.length; i++) {
//     // 	if (inputs[i].value==0) {
//     // 		alert('Input must be filled out');
//     // 	}
//     // }

//     if (email.value && !(regexemail.test(email.value)))
//     {
//   	alert("Please enter a valid e-mail address");
//   	check=false;
//      }

//  }