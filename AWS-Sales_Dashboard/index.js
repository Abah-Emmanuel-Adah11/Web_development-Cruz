 // Set current date
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);
        
// Initialize data
        let salesData = {
            totalQuantity: 1850,
            averageQuantity: 24.3,
            transactions: 76,
            quarter: 'Q2',
            year: '2018',
            region: 'United States'
        };
        
 // Chart instances
        let categoryChart, monthlyChart, regionalChart;
        
// Initialize charts
        function initializeCharts() {
            // Sales by Category Chart
            const categoryCtx = document.getElementById('categoryChart').getContext('2d');
            categoryChart = new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Electronics', 'Clothing', 'Home Goods', 'Books', 'Sports'],
                    datasets: [{
                        data: [35, 25, 20, 12, 8],
                        backgroundColor: [
                            '#4361ee',
                            '#3a0ca3',
                            '#7209b7',
                            '#f72585',
                            '#4cc9f0'
                        ],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 20,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
            
            // Monthly Sales Trend Chart
            const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
            monthlyChart = new Chart(monthlyCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Sales Quantity',
                        data: [65, 78, 66, 72, 85, 92, 88, 76, 95, 102, 115, 125],
                        borderColor: '#38b000',
                        backgroundColor: 'rgba(56, 176, 0, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // Regional Performance Chart
            const regionalCtx = document.getElementById('regionalChart').getContext('2d');
            regionalChart = new Chart(regionalCtx, {
                type: 'bar',
                data: {
                    labels: ['United States', 'Canada', 'Germany', 'UK', 'France', 'Australia'],
                    datasets: [{
                        label: 'Sales Volume',
                        data: [1850, 1240, 980, 1560, 1120, 760],
                        backgroundColor: [
                            '#4361ee',
                            '#3a0ca3',
                            '#7209b7',
                            '#f72585',
                            '#4cc9f0',
                            '#4895ef'
                        ],
                        borderWidth: 0,
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
        
        // Update dashboard data based on filters
        function updateDashboard() {
            // Get selected values
            const quarter = document.getElementById('quarter').value;
            const year = document.getElementById('year').value;
            const region = document.getElementById('region').value;
            
            // Update sales data based on filters (simulated data)
            // In a real application, this would fetch from an API
            let baseQuantity = 1500;
            
            // Adjust based on quarter
            if (quarter === 'Q1') baseQuantity = 1420;
            else if (quarter === 'Q2') baseQuantity = 1850;
            else if (quarter === 'Q3') baseQuantity = 1650;
            else if (quarter === 'Q4') baseQuantity = 2100;
            
            // Adjust based on year
            const yearFactor = parseInt(year) - 2014; // 0 to 4
            baseQuantity = baseQuantity * (1 + yearFactor * 0.15);
            
            // Adjust based on region
            if (region === 'United States') baseQuantity = baseQuantity * 1.0;
            else if (region === 'Canada') baseQuantity = baseQuantity * 0.65;
            else if (region === 'Germany') baseQuantity = baseQuantity * 0.5;
            
            // Calculate derived values
            const totalQuantity = Math.round(baseQuantity);
            const transactions = Math.round(totalQuantity / 24.3);
            const averageQuantity = (totalQuantity / transactions).toFixed(1);
            
            // Update displayed values
            document.getElementById('total-quantity').textContent = totalQuantity.toLocaleString();
            document.getElementById('average-quantity').textContent = averageQuantity;
            document.getElementById('total-transactions').textContent = transactions;
            
            // Update filter info in footer
            document.getElementById('filter-info').textContent = `${quarter} ${year}, ${region}`;
            
            // Update refresh date
            const now = new Date();
            const refreshTime = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            document.getElementById('refresh-date').textContent = `Today at ${refreshTime}`;
            
            // Update charts with new data
            updateCharts(quarter, year, region);
            
            // Show a brief notification
            showNotification(`Dashboard updated for ${quarter} ${year}, ${region}`);
        }
        
        // Update charts with simulated data based on filters
        function updateCharts(quarter, year, region) {
            // Generate some variation based on filters
            const quarterIndex = ['Q1', 'Q2', 'Q3', 'Q4'].indexOf(quarter);
            const yearOffset = parseInt(year) - 2014;
            
            // Update category chart
            const categoryVariation = 0.8 + (quarterIndex * 0.1) + (yearOffset * 0.05);
            categoryChart.data.datasets[0].data = [
                Math.round(35 * categoryVariation),
                Math.round(25 * categoryVariation),
                Math.round(20 * categoryVariation),
                Math.round(12 * categoryVariation),
                Math.round(8 * categoryVariation)
            ];
            categoryChart.update();
            
            // Update monthly chart - emphasize selected quarter
            const monthlyData = [65, 78, 66, 72, 85, 92, 88, 76, 95, 102, 115, 125];
            
            // Boost the months in the selected quarter
            const quarterStart = quarterIndex * 3;
            for (let i = quarterStart; i < quarterStart + 3; i++) {
                monthlyData[i] = Math.round(monthlyData[i] * (1.2 + yearOffset * 0.1));
            }
            
            // Adjust based on region
            let regionFactor = 1.0;
            if (region === 'Canada') regionFactor = 0.8;
            else if (region === 'Germany') regionFactor = 0.7;
            
            monthlyChart.data.datasets[0].data = monthlyData.map(value => Math.round(value * regionFactor));
            monthlyChart.update();
            
            // Update regional chart - highlight selected region
            const regionalData = [1850, 1240, 980, 1560, 1120, 760];
            const regionIndex = ['United States', 'Canada', 'Germany', 'UK', 'France', 'Australia'].indexOf(region);
            
            // Boost the selected region
            if (regionIndex !== -1) {
                regionalData[regionIndex] = Math.round(regionalData[regionIndex] * (1.3 + yearOffset * 0.1));
            }
            
            regionalChart.data.datasets[0].data = regionalData;
            regionalChart.update();
        }
        
        // Show a temporary notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #4361ee;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                font-weight: 500;
                transform: translateX(150%);
                transition: transform 0.3s ease-out;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(150%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }
        
        // Initialize dashboard when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeCharts();
            updateDashboard();
            
            // Set up event listeners
            document.getElementById('update-btn').addEventListener('click', updateDashboard);
            
            // Update dashboard when filter changes
            document.getElementById('quarter').addEventListener('change', updateDashboard);
            document.getElementById('year').addEventListener('change', updateDashboard);
            document.getElementById('region').addEventListener('change', updateDashboard);
        });