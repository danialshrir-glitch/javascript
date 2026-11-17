const CELL_SIZE = 50;

const gameBoard = document.getElementById("game-board");
const resetBoardButton = document.getElementById("reset-board");
const winMessagePara = document.getElementById("win-message");

const ctx = gameBoard.getContext("2d");

class Square {
    constructor(xPos, yPos, width, height, ctx) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.actor = null;
    };

    draw() {
        this.lineWidth = 2;
        this.ctx.strokeStyle = "red";

        if (this.actor) {
            if (this.actor === "X") {
                this.ctx.beginPath();
                this.ctx.moveTo(this.xPos - 20, this.yPos - 20);
                this.ctx.lineTo(this.xPos + 20, this.yPos + 20);
                this.ctx.stroke();
                this.ctx.closePath();

                this.ctx.beginPath();
                this.ctx.moveTo(this.xPos + 20, this.yPos - 20);
                this.ctx.lineTo(this.xPos - 20, this.yPos + 20);
                this.ctx.stroke();
                this.ctx.closePath();
            };
        };
    };
};

const square = new Square(50, 50, 80, 80, ctx);

square.actor = "X";

square.draw();