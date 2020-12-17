let timer1;
    let timer2;
	let winnerColor;
    let winnerColorHard;
    let currentDifficulty = 'easy';
	function generateColor() {
    	const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  		const r = randomBetween(0, 255);
  		const g = randomBetween(0, 255);
  		const b = randomBetween(0, 255);
  		return `rgb(${r},${g},${b})`;
    }

    function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1) + min);
	}

    function generateNewColors(){
    	if(currentDifficulty==='easy'){
        	generateEasy();
        }else{
        	generateHard();
        }

    }

	var computerResponse = getRandomInt(1, 3);

	function generateEasy() {
    	timer1 = setTimeout(function() {
        	alert('בפעם הבאה יותר מהר');
        	generateEasy();
        }, 60000);

    	currentDifficulty='easy';
        document.getElementById('hard').style.display = 'none';
    	document.getElementById('easy').style.display = 'block';
        const arrayOfColors = [generateColor(),generateColor(),generateColor()];
		document.getElementById('colorPadEasy1').style.backgroundColor = arrayOfColors[0];
       	document.getElementById('colorPadEasy2').style.backgroundColor = arrayOfColors[1];
		document.getElementById('colorPadEasy3').style.backgroundColor = arrayOfColors[2];
		winnerColor = getRandomInt(0,2);

    }

    function guessing(guessNumber){
    	clearTimeout(timer1);
        clearTimeout(timer2);
    	let winnerColorEasyOrHard = winnerColor

    	if(currentDifficulty === 'hard'){
        	winnerColorEasyOrHard = winnerColorHard;
        }
    	if(guessNumber === winnerColorEasyOrHard){
        	//win
        	alert("WON!!!!");
        }else{
        	alert('LOSE, please try again');
        }

    }

    function generateHard() {
    	timer2 = setTimeout(function() {
        	alert('בפעם הבאה יותר מהר');
        	generateHard();
        }, 60000);
    	currentDifficulty = 'hard';
    	document.getElementById('easy').style.display = 'none';
    	document.getElementById('hard').style.display = 'block';
         const arrayOfColors = [generateColor(),generateColor(),generateColor(),generateColor(),generateColor(),generateColor()];
		document.getElementById('colorPadHard1').style.backgroundColor = arrayOfColors[0];
       	document.getElementById('colorPadHard2').style.backgroundColor = arrayOfColors[1];
		document.getElementById('colorPadHard3').style.backgroundColor = arrayOfColors[2];
        document.getElementById('colorPadHard4').style.backgroundColor = arrayOfColors[3];
        document.getElementById('colorPadHard5').style.backgroundColor = arrayOfColors[4];
        document.getElementById('colorPadHard6').style.backgroundColor = arrayOfColors[5];
		winnerColorHard = getRandomInt(0,5);
    }


  	(function () {
  	    document.getElementById('chooseDiff').style.display = 'block';
		document.getElementById('easy').style.display = 'none';
    	document.getElementById('hard').style.display = 'none';


	})();