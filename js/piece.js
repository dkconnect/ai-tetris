// Piece constructor: Represents a Tetris piece with its shape, position, and color
function Piece(cells) {
    this.cells = cells; // 2D array representing the piece's shape
    this.dimension = this.cells.length; // Size of the piece (e.g., 2 for O, 3 for J, 4 for I)
    this.row = 0; // Current row position on the grid
    this.column = 0; // Current column position on the grid
}

// Static method to create a piece based on an index (0 to 6 for O, J, L, Z, S, T, I)
Piece.fromIndex = function(index) {
    var piece;
    // Updated colors to match the modern aesthetic of the site
    const COLORS = {
        O: 0xFFEB3B, // Yellow (matches the site's text color)
        J: 0x00D4FF, // Cyan (matches the site's link color)
        L: 0xAA00AA, // Magenta (same as before, fits the theme)
        Z: 0xFF6F61, // Coral (matches the button gradient)
        S: 0x00AA00, // Green (brighter green than before)
        T: 0xFF3D00, // Orange (matches the button gradient)
        I: 0xFFFFFF  // White (for a clean, bright look)
    };

    switch (index) {
        case 0: // O piece (2x2 square)
            piece = new Piece([
                [COLORS.O, COLORS.O],
                [COLORS.O, COLORS.O]
            ]);
            break;
        case 1: // J piece (3x3)
            piece = new Piece([
                [COLORS.J, 0x000000, 0x000000],
                [COLORS.J, COLORS.J, COLORS.J],
                [0x000000, 0x000000, 0x000000]
            ]);
            break;
        case 2: // L piece (3x3)
            piece = new Piece([
                [0x000000, 0x000000, COLORS.L],
                [COLORS.L, COLORS.L, COLORS.L],
                [0x000000, 0x000000, 0x000000]
            ]);
            break;
        case 3: // Z piece (3x3)
            piece = new Piece([
                [COLORS.Z, COLORS.Z, 0x000000],
                [0x000000, COLORS.Z, COLORS.Z],
                [0x000000, 0x000000, 0x000000]
            ]);
            break;
        case 4: // S piece (3x3)
            piece = new Piece([
                [0x000000, COLORS.S, COLORS.S],
                [COLORS.S, COLORS.S, 0x000000],
                [0x000000, 0x000000, 0x000000]
            ]);
            break;
        case 5: // T piece (3x3)
            piece = new Piece([
                [0x000000, COLORS.T, 0x000000],
                [COLORS.T, COLORS.T, COLORS.T],
                [0x000000, 0x000000, 0x000000]
            ]);
            break;
        case 6: // I piece (4x4)
            piece = new Piece([
                [0x000000, 0x000000, 0x000000, 0x000000],
                [COLORS.I, COLORS.I, COLORS.I, COLORS.I],
                [0x000000, 0x000000, 0x000000, 0x000000],
                [0x000000, 0x000000, 0x000000, 0x000000]
            ]);
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

    var piece = new Piece(_cells);
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
                // Check if the new position is within bounds and not occupied
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
                // Check if the new position is within bounds and not occupied
                if (!(_c < grid.columns && _r >= 0 && _r < grid.rows && grid.cells[_r][_c] == 0)) {
                    return false;
                }
            }
        }
    }
    return true;
};

// Check if the piece can move down
Piece.prototype.canMoveDown = function(grid) {
    for (var r = 0; r < this.cells.length; r++) {
        for (var c = 0; c < this.cells[r].length; c++) {
            var _r = this.row + r + 1;
            var _c = this.column + c;
            if (this.cells[r][c] != 0) {
                // Check if the new position is within bounds and not occupied
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

// Get the color of the piece (returns the first non-zero color value)
Piece.prototype.getColor = function() {
    for (var r = 0; r < this.dimension; r++) {
        for (var c = 0; c < this.dimension; c++) {
            if (this.cells[r][c] != 0) {
                return this.cells[r][c];
            }
        }
    }
    return 0; // Fallback (shouldn't happen)
};
