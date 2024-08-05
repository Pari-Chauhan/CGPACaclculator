const branchCredits = {
    'CSE-AI': [23, 22, 23, 22, 22, 22, 25, 21],
    'CSE': [22, 22, 23, 22, 22, 22, 25, 21],
    'ECE': [22, 22, 23, 22, 22, 22, 21, 22],
    'ECE-AI': [23, 22, 23, 22, 22, 22, 25, 22],
    'IT': [22, 22, 23, 22, 22, 22, 21, 22],
    'AIML': [23, 22, 23, 22, 22, 22, 25, 21]
};

let numSemesters = 0;
let credits = [];

document.getElementById('startButton').addEventListener('click', startInputProcess);
document.getElementById('calculateButton').addEventListener('click', calculateCGPA);

function startInputProcess() {
    const branch = document.getElementById('branch').value;
    credits = branchCredits[branch];
    
    numSemesters = parseInt(document.getElementById('numSemesters').value);
    
    if (numSemesters > 0 && numSemesters <= 8) {
        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Clear previous inputs

        let displayScreen = document.getElementById('displayScreen');
        displayScreen.innerHTML = 'Enter the SGPA for each Semester (scale: 10.0)';
        
        for (let i = 0; i < numSemesters; i++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `SGPA for semester ${i + 1}`;
            input.min = 0;
            input.max = 10;
            input.step = 0.01;
            input.required = true;
            inputContainer.appendChild(input);
        }

        document.getElementById('calculateButton').style.display = 'block';
    } else {
        displayScreen.innerHTML = 'Enter a valid number of Semesters!!';
    }
}

function calculateCGPA() {
    let totalSGPA = 0;
    let totalCredits = 0;
    const inputContainer = document.getElementById('inputContainer');
    const inputs = inputContainer.getElementsByTagName('input');

    for (let i = 0; i < numSemesters; i++) {
        const sgpa = parseFloat(inputs[i].value);
        if(sgpa > 10 || sgpa < 0){
            resultContainer.innerHTML = 'Invalid SGPA';
            return;
        }
        totalSGPA += sgpa * credits[i];
        totalCredits += credits[i];
    }

    const cgpa = totalSGPA / totalCredits;
    displayResult(cgpa);
}

function displayResult(cgpa) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<h2>Your CGPA is: ${cgpa.toFixed(2)}</h2>`;
}
