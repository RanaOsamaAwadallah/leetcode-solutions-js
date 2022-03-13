/**
  Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

  A region is captured by flipping all 'O's into 'X's in that surrounded region.

  Example 1:

  Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
  Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
  Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
  
  Example 2:

  Input: board = [["X"]]
  Output: [["X"]]


  Constraints:

  m == board.length
  n == board[i].length
  1 <= m, n <= 200
  board[i][j] is 'X' or 'O'.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length == 0) return;
    let height = board.length, width = board[0].length;
    checkBorders(board); // Transform 'O' on borders to 'M'
    
    for(let row = 1; row < height - 1; row++) {
        for(let col = 1; col < width - 1; col++) {
            if(board[row][col] === 'O') dfs(row, col, board, false);
        }
    }
    
   for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if(board[row][col] === 'M') board[row][col] = 'O';
        }
    }
};

const checkBorders = (board) => {
    let height = board.length, width = board[0].length;
    for(let row = 0; row < height; row++) {
        if(board[row][0] === 'O') dfs(row, 0, board, true);
        if(board[row][width - 1] === 'O') dfs(row, width - 1, board, true);
    }
    for(let col = 0; col < width; col++) {
        if(board[0][col] === 'O') dfs(0, col, board, true);
        if(board[height - 1][col] === 'O') dfs(height - 1, col, board, true);
    }
}

const dfs = (row, col, board, isBorder) => {
    if(row >= board.length || row < 0 || col < 0 || col >= board[0].length || board[row][col] !== 'O') return;
    if(isBorder) board[row][col] = 'M';
    else board[row][col] = 'X';
    
    if(isBorder){
        dfs(row, col + 1, board, isBorder);
        dfs(row, col - 1, board, isBorder);
        dfs(row + 1, col, board, isBorder);
        dfs(row - 1, col, board, isBorder);
    } 
}
