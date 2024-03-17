document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/embouteillages');
    const embouteillages = await response.json();
  
    const labels = embouteillages.map(embouteillage => embouteillage.heure);
    const data = embouteillages.map(embouteillage => embouteillage.nombre);
  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Embouteillages par heure',
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
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
  });
  