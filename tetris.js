//创建canvas组件
var creatCanvas = function(rows,cols,cellWidth,cellHeight){
    tetris_canvas = document.createElement('canvas');
    tetris_canvas.width = cols * cellWidth;
    tetris_canvas.height = rows * cellHeight;
    tetris_canvas.style.border = "1px solid #000";
    tetris_ctx = tetris_canvas.getContext('2d');
    tetris_ctx.beginPath();
    //绘制横向网格路径
    for(var i=1; i < TETRiS_ROWS; i++){
        tetris_ctx.moveTo(0, i*CELL_SIZE);
        tetris_ctx.lineTo(TeTRIS_COLS * CELL_SIZE,i*CELL_SIZE);
    }
    //绘制竖向网格路径
    for(var i=1; i < TETRiS_COLS; i++){
        tetris_ctx.moveTo(i*CELL_SIZE,0);
        tetris_ctx.lineTo(i*CELL_SIZE,TeTRIS_ROWS * CELL_SIZE);
    }
    tetris_ctx.closePath();
    tetris_ctx.strokeStyle = '#aaa';
    tetris_ctx.lineWidth = 0.3;
    tetris_ctx.stroke();
}