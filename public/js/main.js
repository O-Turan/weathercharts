console.log('Main loaded');

const backgroundColours = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const chartExample = document.querySelector('.chart-example');

createChart(chartExample);

function createChart(canvasElement) {
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: ['B1H', 'B1J', 'B1K', 'B1P', 'B1M'],
            datasets: [{
                backgroundColor: backgroundColours,
                label: '# Aantal studenten per klas',
                data: [22, 25, 23, 21, 22],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
//Werk hieronder opdracht 1 en opdracht 2 uit.

const assignment1Url = '/assignment1';
const assignment2Url = '/assignment2';
const assignment3Url = '/assignment3';

const chartAssignment1 = document.querySelector('.chart-assignment-1');
const chartAssignment2 = document.querySelector('.chart-assignment-2');
const chartAssignment3 = document.querySelector('.chart-assignment-3');

fetch(assignment1Url)
.then(data => data.json())
.then(jsonData => showChart1(jsonData));

function showChart1(jsonData){
console.log(jsonData);
createChart1(chartAssignment1, jsonData.years, jsonData.JavaScript);
}

function createChart1(canvasElement, labels, data) {
    new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: backgroundColours[0],
                label: '# Aantal studenten per klas',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



fetch(assignment2Url)
.then(data => data.json())
.then(jsonData => showChart2(jsonData));

function showChart2(jsonData){
console.log(jsonData);
createChart2(chartAssignment2, jsonData.years, jsonData.Java, jsonData.Python, jsonData.JavaScript, jsonData.PHP, jsonData.C, jsonData.C++);
}

function createChart2(canvasElement, labels, data) {
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: backgroundColours,
                label: '# Aantal studenten per klas',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


