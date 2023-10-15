// Get UI

const getprogressbar = document.getElementById('progress-bar');
// console.log(getprogressbar);

window.onscroll = function(){
    // console.log('hay');
    scrollpoint()
}




function scrollpoint(){

	var getscrolltop = document.documentElement.scrollTop;

	//console.log(getscrolltop); //0 to 7064

	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);


	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;
    // console.log(calcheight);

    // // let getfinal = Math.floor(getscrollheight*100 / calcheight);
    var getfinal = Math.floor((getscrolltop / calcheight) * 100);
	console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    window.print();
}