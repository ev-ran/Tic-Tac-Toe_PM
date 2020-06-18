function moveHandler(event) {
    let clickedCellElement = event.target;
    if (winnerDiv.textContent === "" && clickedCellElement.textContent === "") {
        startAnimation(clickedCellElement)
        if (currentPlayer === "X") {
            clickedCellElement.textContent = "X"
            turnDiv.textContent = "O's turn"
            playerXSelections.push(Number(clickedCellElement.id))
            if (checkForWin(winningCombinations, playerXSelections)) {
                xWinCount = handleWin(xWinCount)
            }
            currentPlayer = "O"
        } else {
            clickedCellElement.textContent = "O"
            turnDiv.textContent = "X's turn"
            playerOSelections.push(Number(clickedCellElement.id))
            if (checkForWin(winningCombinations, playerOSelections)) {
                oWinCount = handleWin(oWinCount)
            }
            currentPlayer = "X"
        }
        if (checkForDraw()) {
            winnerDiv.textContent = "draw"
            turnDiv.textContent = "game over:"
            drawCount = drawCount + 1
        }
    }
}

function handleWin(playerWinCount) {
    winnerDiv.textContent = currentPlayer + " wins!"
    turnDiv.textContent = "game over:"
    playerWinCount = playerWinCount + 1
    return playerWinCount
}


function checkForWin(winningCombinations, playerSelections) {
    for (let i = 0; i < winningCombinations.length; i = i + 1) {
        let currentCombination = winningCombinations[i]
        let matches = 0
        for (let j = 0; j < currentCombination.length; j = j + 1) {
            let currentNumber = currentCombination[j]
            if (playerSelections.includes(currentNumber)) {
                matches = matches + 1
            }
            if (matches === 3) {
                return true
            }
        }
    }
    return false
}

function resetBoard() {
    currentPlayer = "X"
    playerXSelections = []
    playerOSelections = []
    for (let i = 0; i < cellElementArray.length; i = i + 1) {
        let currentElement = cellElementArray[i]
        currentElement.textContent = ""
    }
    winnerDiv.textContent = ""
    turnDiv.textContent = "X's turn"
}

function checkForDraw() {
    if (playerXSelections.length >= 5 && winnerDiv.textContent === "") {
        return true
    } else {
        return false
    }
}

function startAnimation(element) {
    return element.animate([
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(0.5)' },
        { transform: 'scale(1)' },
    ], {
        // timing options
        duration: 500
    });
}

// helper function to add things to DOM
function myDOMHelper(elementType, targetElement, textStr, idStr, classStr) {
    let newElement = document.createElement(elementType)
    if (textStr !== "" && textStr !== undefined) {
        newElement.append(textStr)
    }
    if (idStr !== "" && idStr !== undefined) {
        newElement.id = idStr
    }
    if (classStr !== "" && classStr !== undefined) {
        newElement.className = classStr
    }
    targetElement.append(newElement)
    return newElement
}