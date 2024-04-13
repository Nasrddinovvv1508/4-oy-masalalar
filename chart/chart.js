const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Apple', 'Google', 'Amazon', 'Microsoft', 'Samsung', 'Huawei'],
    datasets: [{
      label: '# of Votes',
      data: [111, 212, 98, 103, 67, 34],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});