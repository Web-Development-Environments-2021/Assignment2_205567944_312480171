function dropMadicine() {
	var emptyCell = findRandomEmptyCell(board);
	//delete medicine
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			if (board[i][j]==6){
				board[i][j] = 0;///delete madicine
				break;
			}
		}
	}	
	board[emptyCell[0]][emptyCell[1]] = 6; // add one medicine
}

function addLife() {
	if (lifeArray[4] == 1)
		return;
	for (var i = 0; i < 5; i++) {
		if (lifeArray[i]==0){
			lifeArray[i] = 1;
			return;
		}
	}
}