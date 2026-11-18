const CELL_SIZE = 50;
const RADIUS_LENGTH = 30;
const ROWS_NUM = 3;
const COLUMNS_NUM = 3;

const resetBoardButton = document.getElementById("reset-board");
const winMessagePara = document.getElementById("win-message");

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
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(this.xPos, this.yPos, this.width, this.height);

        console.log(this.actor);

        if (this.actor !== null) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "black";
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            console.log(this.actor);
            this.ctx.fillText(this.actor, this.xPos + this.width / 2, this.yPos + this.height / 2 + 10);
            this.ctx.closePath();
        };
    };
};

class TicTacToe {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");

        this.squares = [];

        const w = this.canvas.width / ROWS_NUM;
        const h = this.canvas.height / COLUMNS_NUM;

        for (let x = 0; x < ROWS_NUM; x++) {
            for (let y = 0; y < COLUMNS_NUM; y++) {
                this.squares.push(new Square(x * w, y * h, w, h, this.ctx));
            };
        };

        this.actors = ["x", "o"];

        this.turn = 0;

        this.gameOver = false;

        this.squares.forEach(squares => squares.draw());
        console.log(this.squares);

        this.canvas.addEventListener("click", function(event) {
            this.click(event);
        }.bind(this));
    };

    click(event) {
        if (this.gameOver) {
            this.reset();
            return;
        };

        const x = event.offsetX / 2;
        const y = event.offsetY / 2;

        for (const square of this.squares) {
            if (square.actor !== null) {
                continue;
            };

            if ((x >= square.xPos && x <= square.xPos + square.width) && (y >= square.yPos && y <= square.yPos + square.height)) {
                console.log(square.actor);
                console.log(this.actors[this.turn]);
                square.actor = this.actors[this.turn];
                console.log(square.actor);
                square.draw();

                this.turn = (this.turn + 1) % this.actors.length;
            };
        };

        this.checkForWinner();
    };

    checkForWinner() {
        const winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const comb of winCombinations) {
            const s1 = this.squares[comb[0]];
            const s2 = this.squares[comb[1]];
            const s3 = this.squares[comb[2]];

            if (s1.actor !== null) {
                if (s1.actor == s2.actor && s1.actor === s3.actor) {
                    this.gameOver = true;

                    this.ctx.beginPath();
                    this.ctx.moveTo(s1.x + s1.width / 2, s1.y + s1.height / 2);
                    this.ctx.lineTo(s3.x + s3.width / 2, s3.y + s3.height / 2);
                    this.ctx.stroke();

                    this.ctx.fillStyle = "red";
                    this.ctx.font = "30px Arial";
                    this.ctx.textAlign = "center";
                    this.ctx.fillText(s1.actor + " wins!", this.canvas.width / 2, this.canvas.height / 2);
                    this.ctx.closePath();
                };
            };
        };

        if (!this.gameOver && this.squares.filter(square => square.actor === null).length === 0) {
            this.gameOver = true;
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Draw!", this.canvas.width / 2, this.canvas.height / 2);
        };
    };
};

const game = new TicTacToe("game-board");