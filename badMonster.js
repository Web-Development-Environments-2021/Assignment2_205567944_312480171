function changeMonstersPositions() {

	for (var i=0; i<parseInt(monsters); i++) {
		var monster = monsterArray[i];
		var left = Math.sqrt(200); // maximal value
		var right = Math.sqrt(200); // maximal value;
		var up = Math.sqrt(200); // maximal value;
		var down = Math.sqrt(200); // maximal value;

		if (isValidMove(monster.i, monster.j-1)==true) { //Up
			up = Math.sqrt(Math.pow((monster.i) - shape.i,2) + Math.pow((monster.j-1) - shape.j,2));
		}
		if (isValidMove(monster.i, monster.j+1)) { //Down
			down = Math.sqrt(Math.pow((monster.i) - shape.i,2) + Math.pow((monster.j+1) - shape.j,2));
		}
		if (isValidMove(monster.i-1, monster.j)) { //left
			left = Math.sqrt(Math.pow((monster.i-1) - shape.i,2) + Math.pow((monster.j) - shape.j,2));
		}
		if (isValidMove(monster.i+1, monster.j)) { //right
			right = Math.sqrt(Math.pow((monster.i+1) - shape.i,2) + Math.pow((monster.j) - shape.j,2));
		}

		var minimum = Math.min(left,right,up,down);

		var Distances = {"left": left, "right": right, "up": up, "down": down};
		var movement=Object.keys(Distances).find(key => Distances[key] === minimum);
		if (monster.whatWas == 5 || monster.whatWas == 7) {
			board[monster.i][monster.j]= 0;
		}
		else 
			board[monster.i][monster.j]= monster.whatWas;
		switch(movement) {
			case "up":
				monster.whatWas = board[monster.i][monster.j - 1];	
				monster.j = monster.j - 1;
				break;
			case "down":
				monster.whatWas = board[monster.i][monster.j + 1];	
				monster.j = monster.j + 1;
				break;
			case "left":
				monster.whatWas = board[monster.i - 1][monster.j];
				monster.i = monster.i- 1;
				break;
			case "right":
				monster.whatWas = board[monster.i + 1][monster.j];
				monster.i = monster.i + 1;
				break;
		}
		if (monster.i == shape.i && monster.j == shape.j) 
			collapse();
		else
			board[monster.i][monster.j] = 5;
	}
}

function collapse() {
	score-=10;
	minusLife();	
	for (var i = 1; i <= parseInt(monsters); i++ ) {
		var mons =monsterArray[i-1];
		board[mons.i][mons.j]=0;
		if (i==1){
			board[0][0] = 5;
			mons.i = 0;
			mons.j = 0;
		}
		else if (i==2){
			board[0][9] = 5;
			mons.i = 0;
			mons.j = 9;
		}
		else if (i==3){
			board[9][0] = 5;
			mons.i = 9;
			mons.j = 0;
		}
		else if (i==4){
			board[9][9] = 5;
			mons.i = 9;
			mons.j = 9;
		}
		mons.whatWas=0;
	}
	board[shape.i][shape.j]=0;
	var emptyCell = findRandomEmptyCell(board);
	shape.i = emptyCell[0];
	shape.j = emptyCell[1];
	board[shape.i][shape.j] = 10; //pacman
}