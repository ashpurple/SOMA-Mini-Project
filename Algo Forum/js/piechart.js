window.addEventListener('load', function () {
    pieChartDraw();
})

let color_cpp_red = 'rgba(255, 99, 132, 0.5)'
let color_python_blue = 'rgba(75, 192, 238, 0.5)'
let color_js_yellow = 'rgba(255, 238, 74, 0.5)'//rgba(255, 205, 86, 0.6)'
let color_java_brown = 'rgba(198, 116, 11, 0.5)'
let color_kotlin_purple = 'rgba(153, 102, 255, 0.5)'
let color_swift_orange = 'rgba(255, 148, 54, 0.5)'

let pieChartData = {
    labels: ['C++', 'Python', 'JavaScript', 'Java', 'Kotlin', 'Swift'],
    datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [color_cpp_red, color_python_blue, color_js_yellow, color_java_brown, color_kotlin_purple, color_swift_orange]
    }]
};

let pieChartDraw = function () {
    let ctx = document.getElementById('pieChart').getContext('2d');

    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            responsive: false
        },
    });
};
