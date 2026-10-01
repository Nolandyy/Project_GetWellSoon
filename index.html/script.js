//kindly skip past this v 

    let healthPoints = 1;
    let pointGainedRecently = 0;

    console.log(healthPoints);

    let actionItem = document.getElementById('answer').value;

    function updateDisplay() {
        document.getElementById("healthPoints").innerHTML = Number(healthPoints);
    }

    function addRow() {
        actionItem = document.getElementById('answer').value;
        console.log(actionItem);
        const table = document.getElementById('actionList');
        const newRow = document.createElement('tr')
        const newItem = document.createElement('td');
        const newItemPoint = document.createElement('td')
        newItem.textContent = document.getElementById('answer').value;
        newItemPoint.textContent = Number(pointGainedRecently);
        table.appendChild(newRow);
        newRow.appendChild(newItem);
        newRow.appendChild(newItemPoint);
    }

    function addRowS(x) {
        const tableS = document.getElementById('actionList');
        const newRowS = document.createElement('tr')
        const newItemS = document.createElement('td');
        const newItemPointS = document.createElement('td')
        newItemS.textContent = x;
        newItemPointS.textContent = Number(pointGainedRecently);
        tableS.appendChild(newRowS);
        newRowS.appendChild(newItemS);
        newRowS.appendChild(newItemPointS);
    }
    
    // Get the text element
    const textElementOne = document.getElementById('one');
    const textElementTwo = document.getElementById('two');
    const textElementThree = document.getElementById('three');

    // Toggle clicked state on click
    textElementOne.addEventListener('click', function () {
        this.classList.toggle('clicked');

        // Optional: Change text content when clicked
        if (this.classList.contains('clicked')) {
            this.textContent = "Task Completed!";
            healthPoints += 0.25;
            pointGainedRecently = 0.25;
            console.log(healthPoints);
            updateDisplay()
            addRowS("Went on a walk")
        } else {
            this.textContent = "Go On a Walk";
        }
    });

    textElementTwo.addEventListener('click', function () {
        this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            this.textContent = "Task Completed!";
            healthPoints += 0.25;
            pointGainedRecently = 0.25;
            console.log(healthPoints);
            updateDisplay()
            addRowS("Meditated")
        } else {
            this.textContent = "Meditate";
        }
    });

    textElementThree.addEventListener('click', function () {
        this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            this.textContent = "Task Completed!";
            healthPoints += 0.25;
            pointGainedRecently = 0.25;
            console.log(healthPoints);
            updateDisplay()
            addRowS("Worked on a project")
        } else {
            this.textContent = "Work On A Project";
        }
    });

document.getElementById("submitOwn").addEventListener("click", () => {
    if (document.getElementById('answer').value != "") {
        console.log(healthPoints += 1)
        pointGainedRecently = 1;
        updateDisplay()
        addRow()
}});

//skip past this ^

function pickRandom() {
    const paraItems = document.querySelectorAll("#factGraphList li");
    const result = document.getElementById("result");

    if (!paraItems.length || !result) {
        return;
    }

    const factRandomizer = Math.floor(Math.random() * paraItems.length);
    result.textContent = paraItems[factRandomizer].textContent;
}

window.addEventListener("load", pickRandom);

function endDayF() {
    localStorage.setItem("finalHealthP", healthPoints);
    console.log(JSON.parse(localStorage.getItem('finalHealthP')));
    if (localStorage.getItem('prevHealthP') === null) {
        localStorage.setItem('prevHealthP', 0)
    }
};

function newDay() {
    localStorage.setItem('prevHealthP', localStorage.getItem('finalHealthP'));
    localStorage.removeItem('finalHealthP');
}
