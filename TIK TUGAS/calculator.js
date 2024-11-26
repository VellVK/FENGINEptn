let chartInstance; // Variabel untuk menyimpan instance grafik

document.getElementById('calculate').addEventListener('click', () => {
    const s1 = parseFloat(document.getElementById('semester1').value);
    const s2 = parseFloat(document.getElementById('semester2').value);
    const s3 = parseFloat(document.getElementById('semester3').value);
    const s4 = parseFloat(document.getElementById('semester4').value);
    const s5 = parseFloat(document.getElementById('semester5').value);
    const average = ((s1 + s2 + s3 + s4 + s5) / 5).toFixed(2);

    document.getElementById('average').textContent = average;

    const ctx = document.getElementById('chart').getContext('2d');

    // Hapus grafik sebelumnya jika ada
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Buat grafik baru
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'],
            datasets: [{
                label: 'Nilai Semester',
                data: [s1, s2, s3, s4, s5],
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Area di bawah garis
                borderColor: '#007bff', // Warna garis
                borderWidth: 3, // Ketebalan garis
                pointBackgroundColor: '#ff4500', // Warna titik
                pointBorderColor: '#ffffff', // Border putih untuk titik
                pointRadius: 8, // Ukuran titik default
                pointHoverRadius: 12, // Ukuran titik saat di-hover
                pointBorderWidth: 3 // Ketebalan border titik
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true,
                    labels: {
                        color: '#333', // Warna teks label
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#333', // Warna label sumbu X
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        display: false // Hilangkan garis grid vertikal
                    }
                },
                y: {
                    ticks: {
                        color: '#333', // Warna label sumbu Y
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.3)' // Warna garis grid horizontal
                    }
                }
            }
        }
    });
});
