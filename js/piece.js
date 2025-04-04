// Piece constructor: Represents a Tetris piece with its shape, position, and rendering metadata
function Piece(cells, renderData) {
    this.cells = cells; // 2D array representing the piece's shape
    this.dimension = this.cells.length; // Size of the piece (e.g., 2 for O, 3 for J, 4 for I)
    this.row = 0; // Current row position on the grid
    this.column = 0; // Current column position on the grid
    this.renderData = renderData; // Metadata for rendering (base color, gradient, border, shadow)
}

// Static method to create a piece based on an index (0 to 6 for O, J, L, Z, S, T, I)
Piece.fromIndex = function(index) {
    var piece;
    // Define rendering metadata for each piece
    const RENDER_DATA = {
        O: {
            baseColor: 0xFFEB3B, // Yellow
            gradientColor: 0xFFD700, // Gold (for gradient)
            borderColor: 0xDAA520, // GoldenRod (border)
            shadowIntensity: 0.5 // Subtle shadow
        },
        J: {
            baseColor: 0x00D4FF, // Cyan
            gradientColor: 0x00BFFF, // DeepSkyBlue (for gradient)
            borderColor: 0x00A1D6, // Darker Cyan (border)
            shadowIntensity: 0.6
        },
        L: {
            baseColor: 0xAA00AA, // Magenta
            gradientColor: 0xFF00FF, // Fuchsia (for gradient)
            borderColor: 0x800080, // Purple (border)
            shadowIntensity: 0.5
        },
        Z: {
            baseColor: 0xFF6F61, // Coral
            gradientColor: 0xFF4500, // OrangeRed (for gradient)
            borderColor: 0xE63946, // Darker Coral (border)
            shadowIntensity: 0.7
        },
        S: {
            baseColor: 0x00AA00, // Green
            gradientColor: 0x32CD32, // LimeGreen (for gradient)
            borderColor: 0x008000, // Darker Green (border)
            shadowIntensity: 0.5
        },
        T: {
            baseColor: 0xFF3D00, // Orange
            gradientColor: 0xFF8C00, // DarkOrange (for gradient)
            borderColor: 0xD2691E, // Chocolate (border)
            shadowIntensity: 0.6
        },
        I: {
            baseColor: 0x00FF00, // Lime Green
            gradientColor: 0x7FFF00, // Chartreuse (for gradient)
            borderColor: 0x00CC00, // Slightly darker green (border)
            shadowIntensity: 0.5
        }
    };

    switch (index) {
        case 0: // O piece (2x2 square)
            piece = new Piece([
                [1, 1],
                [1, 1]
            ], RENDER_DATA.O);
            break;
        case 1: // J piece (3x3)
            piece = new Piece([
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ], RENDER_DATA.J);
            break;
        case 2: // L piece (3x3)
            piece = new Piece([
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0]
            ], RENDER_DATA.L);
            break;
        case 3: // Z piece (3x3)
            piece = new Piece([
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0]
            ], RENDER_DATA.Z);
            break;
        case 4: // S piece (3x3)
            piece = new Piece([
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0]
            ], RENDER_DATA.S);
            break;
        case 5: // T piece (3x3)
            piece = new Piece([
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ], RENDER_DATA.T);
            break;
        case 6: // I piece (4x4)
            piece = new Piece([
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ], RENDER_DATA.I);
            break;
    }
    // Center the piece on the grid (assuming a 10-column grid)
    piece.row = 0;
    piece.column = Math.floor((10 - piece.dimension) / 2);
    return piece;
};

// Clone the piece to create a copy for testing movements or rotations
Piece.prototype.clone = function() {
    var _cells = new Array(this.dimension);
    for (var r = 0; r < this.dimension; r++) {
        _cells[r] = new Array(this.dimension);
        for (var c = 0; c < this.dimension; c++) {
            _cells[r][c] = this.cells[r][c];
        }
    }

    var piece = new Piece(_cells, this.renderData);
    piece.row = this.row;
    piece.column = this.column;
    return piece;
};

// Check if the piece can move left
Piece.prototype.canMoveLeft = function(grid) {
    for (var r = 0; r < this.cells.length; r++) {
        for (var c = 0; c < this.cells[r].length; c++) {
            var _r = this.row + r;
            var _c = this.column + c - 1;
            if (this.cells[r][c] != 0) {
                if (!(_c >= 0 && _r >= 0 && _r < grid.rows && grid.cells[_r][_c] == 0)) {
                    return false;
                }
            }
        }
    }
    return true;
};

// Check if the piece can move right
Piece.prototype.canMoveRight = function(grid) {
    for (var r = 0; r < this.cells.length; r++) {
        for (var c = 0; c < this.cells[r].length; c++) {
            var _r = this.row + r;
            var _c = this.column + c + 1;
            if (this.cells[r][c] != 0) {
                if (!(_c < grid.columns && _r >= 0 && _r < grid.rows && grid.cells[_r][_    return true;
};

// Check if the piece can move down
Piece.prototype.canMoveDown = function(grid) {
    for (var r = 0; r < this.cells.length; r++) {
        for (var c = 0; c < this.cells[r].length; c++) {
            var _r = this.row + r + 1;
            var _c = this.column + c;
            if (this.cells[r][c] != 0) {
                if (!(_r < grid.rows && _c >= 0 && _c < grid.columns && grid.cells[_r][_c] == 0)) {
                    return false;
                }
            }
        }
    }
    return true;
};

// Move the piece left if possible
Piece.prototype.moveLeft = function(grid) {
    if (!this.canMoveLeft(grid)) {
        return false;
    }
    this.column--;
    return true;
};

// Move the piece right if possible
Piece.prototype.moveRight = function(grid) {
    if (!this.canMoveRight(grid)) {
        return false;
    }
    this.column++;
    return true;
};

// Move the piece down if possible
Piece.prototype.moveDown = function(grid) {
    if (!this.canMoveDown(grid)) {
        return false;
    }
    this.row++;
    return true;
};

// Rotate the piece's cells (90 degrees clockwise)
Piece.prototype.rotateCells = function() {
    var _cells = new Array(this.dimension);
    for (var r = 0; r < this.dimension; r++) {
        _cells[r] = new Array(this.dimension);
    }

    // General rotation algorithm for a square matrix
    for (var r = 0; r < this.dimension; r++) {
        for (var c = 0; c < this.dimension; c++) {
            _cells[c][this.dimension - 1 - r] = this.cells[r][c];
        }
    }

    this.cells = _cells;
};

// Compute the offset needed after rotation to keep the piece in a valid position
Piece.prototype.computeRotateOffset = function(grid) {
    var _piece = this.clone();
    _piece.rotateCells();
    if (grid.valid(_piece)) {
        return { rowOffset: _piece.row - this.row, columnOffset: _piece.column - this.column };
    }

    // Wall kicking: Try shifting the piece to find a valid position
    var initialRow = _piece.row;
    var initialCol = _piece.column;

    // Try shifting right
    for (var i = 0; i < _piece.dimension - 1; i++) {
        _piece.column = initialCol + i;
        if (grid.valid(_piece)) {
            return { rowOffset: _piece.row - this.row, columnOffset: _piece.column - this.column };
        }

        // Try shifting up
        for (var j = 0; j < _piece.dimension - 1; j++) {
            _piece.row = initialRow - j;
            if (grid.valid(_piece)) {
                return { rowOffset: _piece.row - this.row, columnOffset: _piece.column - this.column };
            }
        }
        _piece.row = initialRow;
    }
    _piece.column = initialCol;

    // Try shifting left
    for (var i = 0; i < _piece.dimension - 1; i++) {
        _piece.column = initialCol - i;
        if (grid.valid(_piece)) {
            return { rowOffset: _piece.row - this.row, columnOffset: _piece.column - this.column };
        }

        // Try shifting up
        for (var j = 0; j < _piece.dimension - 1; j++) {
            _piece.row = initialRow - j;
            if (grid.valid(_piece)) {
                return { rowOffset: _piece.row - this.row, columnOffset: _piece.column - this.column };
            }
        }
        _piece.row = initialRow;
    }
    _piece.column = initialCol;

    return null;
};

// Rotate the piece if possible, applying the computed offset
Piece.prototype.rotate = function(grid) {
    var offset = this.computeRotateOffset(grid);
    if (offset != null) {
        this.rotateCells();
        this.row += offset.rowOffset;
        this.column += offset.columnOffset;
    }
};
