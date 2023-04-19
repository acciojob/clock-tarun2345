//your JS code here. If required.
function updateTime() {
			let now = new Date();
			let timeString = now.toLocaleTimeString();
			let dateString = now.toLocaleDateString();
			document.getElementById("timer").innerHTML =  dateString+","+ timeString ;
		}

		setInterval(updateTime, 1000);