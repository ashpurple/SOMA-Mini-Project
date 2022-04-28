var ctx = document.getElementById('barChart').getContext('2d');

let yellow = 'rgba(255, 238, 74, 0.5)'
let blue = 'rgba(75, 192, 238, 0.5)'
let red = 'rgba(255, 99, 132, 0.5)'

var chart = new Chart(ctx,
    { // type : 'bar' = 막대차트를 의미합니다. 
        type: 'bar', // 
        data: {
            labels: ['최소', '평균', '최대'],
            datasets: [{
                label: '단위 : ms',
                backgroundColor: [yellow, blue, red],
                borderColor: 'rgb(255, 99, 132)',
                data: [60, 100, 120]
            }]
        },
        options: {
            responsive: false
        }
    });
