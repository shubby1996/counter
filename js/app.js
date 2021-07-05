value = document.querySelector("#value");
count = 0;

/*getElementsByClassName gives an array not an object*/

/* increase = document.getElementsByClassName("increase");
reset = document.querySelector(".reset");
decrease = document.querySelector(".decrease");

increase[0].addEventListener("click", function() {
	count++;
	value.textContent = count;
})

decrease.addEventListener("click", function() {
	count--;
	value.textContent = count;
})
reset.addEventListener("click", function() {
	
	value.textContent = 0;
}) */

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
	btn.addEventListener("click", function(event){
		const styles = event.currentTarget.classList;
			if (styles.contains("decrease")){
				count--;
			}
			else if (styles.contains("increase")){
				count++;
			}else{
				count=0;
			}
			/* console.log(count); */
		if(count >0)
		{
			value.style.color="green";
		}else if(count <0)
		{
			value.style.color="red";
		}else{
			value.style.color="black";
		}
		value.textContent = count
		
	} );
	
});
