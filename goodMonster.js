function changeGoodMonsterPosition() {

	var movesArray=new Array();

	if (isValidMove(goodMonster.i, goodMonster.j-1)==true) { //Up
		movesArray.push("up");
	}
	if (isValidMove(goodMonster.i, goodMonster.j+1)) { //Down
		movesArray.push("down");
	}
	if (isValidMove(goodMonster.i-1, goodMonster.j)) { //left
		movesArray.push("left");
	}
	if (isValidMove(goodMonster.i+1, goodMonster.j)) { //right
		movesArray.push("right");
	}
	
	var randomDirection = movesArray[Math.floor(Math.random() * movesArray.length)];
	if (goodMonster.whatWas == 5)
		board[goodMonster.i][goodMonster.j]= 0;
	else 
		board[goodMonster.i][goodMonster.j]= goodMonster.whatWas;

	switch(randomDirection) {
		case "up":
			goodMonster.whatWas = board[goodMonster.i][goodMonster.j - 1];	
			goodMonster.j = goodMonster.j - 1;
			break;
		case "down":
			goodMonster.whatWas = board[goodMonster.i][goodMonster.j + 1];	
			goodMonster.j = goodMonster.j + 1;
			break;
		case "left":
			goodMonster.whatWas = board[goodMonster.i - 1][goodMonster.j];
			goodMonster.i = goodMonster.i- 1;
			break;
		case "right":
			goodMonster.whatWas = board[goodMonster.i + 1][goodMonster.j];
			goodMonster.i = goodMonster.i + 1;
			break;
	}

	if (goodMonster.i == shape.i && goodMonster.j == shape.j) 
		collapseGoodMonster();
	else
		board[goodMonster.i][goodMonster.j] = 7;

}

function collapseGoodMonster(){
	score+=50;	
	var emptyCell = findRandomCell(board);
	board[goodMonster.i][goodMonster.j] = 0;
	goodMonster.i = emptyCell[0];
	goodMonster.j = emptyCell[1];
	board[emptyCell[0]][emptyCell[1]] = 7; 
}

function dropGoodMonster() {
	var emptyCell = findRandomEmptyCell(board);
	board[goodMonster.i][goodMonster.j] = 0;
	board[emptyCell[0]][emptyCell[1]] = 6; // add one medicine

	//delete good monster 
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if (board[i][j]==6){
				board[i][j] = 0;///delete madicine
				break;
			}
		}
	}	
	board[emptyCell[0]][emptyCell[1]] = 6; // add one medicine	
}