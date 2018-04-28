//���������ڼ�¼�����Ѿ��̶��ķ���
var tetris_status = [];
for(var i=0; i<TETRIS_ROWS;i++){
    tetris_status[i] = [];
    for(var j=0;j<TETRIS_COLS;j++){
        tetris_status[i][j] = NO_BLOCK;
    }
}

//���弸�ֿ��ܳ��ֵķ������
var blockArr = [
    [
        //��һ�ֿ��ܳ��ֵķ�����ϣ�Z
        {x:TETRIS_COLS / 2 - 1, y:0, color:1},
        {x:TETRIS_COLS / 2, y:0, color:1},
        {x:TETRIS_COLS / 2, y:1, color:1},
        {x:TETRIS_COLS / 2 + 1, y:1, color:1}
    ],[
        //�ڶ��ֿ��ܳ��ֵķ�����ϣ���Z
        {x:TETRIS_COLS / 2 + 1, y:0, color:2},
        {x:TETRIS_COLS / 2, y:0, color:2},
        {x:TETRIS_COLS / 2, y:1, color:2},
        {x:TETRIS_COLS / 2 - 1, y:1, color:2}
    ],[
        //�����ֿ��ܳ��ֵķ������ ����
        {x:TETRIS_COLS / 2 - 1, y:0, color:1},
        {x:TETRIS_COLS / 2, y:0, color:1},
        {x:TETRIS_COLS / 2, y:1, color:1},
        {x:TETRIS_COLS / 2 + 1, y:1, color:1}
    ],[
        //�����ֿ��ܳ��ֵķ�����ϣ�L
        {x:TETRIS_COLS / 2 - 1, y:0, color:4},
        {x:TETRIS_COLS / 2 - 1, y:1, color:4},
        {x:TETRIS_COLS / 2 - 1, y:2, color:4},
        {x:TETRIS_COLS / 2, y:2, color:4}
    ]
]

//����canvas���
var creatCanvas = function(rows,cols,cellWidth,cellHeight){
    tetris_canvas = document.createElement('canvas');
    tetris_canvas.width = cols * cellWidth;
    tetris_canvas.height = rows * cellHeight;
    tetris_canvas.style.border = "1px solid #000";
    tetris_ctx = tetris_canvas.getContext('2d');
    tetris_ctx.beginPath();
    //���ƺ�������·��
    for(var i=1; i < TETRiS_ROWS; i++){
        tetris_ctx.moveTo(0, i*CELL_SIZE);
        tetris_ctx.lineTo(TeTRIS_COLS * CELL_SIZE,i*CELL_SIZE);
    }
    //������������·��
    for(var i=1; i < TETRiS_COLS; i++){
        tetris_ctx.moveTo(i*CELL_SIZE,0);
        tetris_ctx.lineTo(i*CELL_SIZE,TeTRIS_ROWS * CELL_SIZE);
    }
    tetris_ctx.closePath();
    tetris_ctx.strokeStyle = '#aaa';
    tetris_ctx.lineWidth = 0.3;
    tetris_ctx.stroke();
}