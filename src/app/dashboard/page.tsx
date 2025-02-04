"use client";
import { Grid, Box, Typography } from "@mui/material";
import PageContainer from "@/app/dashboard/components/container/PageContainer";
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

const Dashboard = () => {
  // Explicitly typed Bar Chart Options
  const barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Quarterly Sales Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales Amount (USD)'
        },
        ticks: {
          // Explicitly define ticks
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  };

  const pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  // More complex sales data with multiple datasets
  const salesData = {
    labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
    datasets: [
      {
        label: 'Electronics',
        data: [45000, 52000, 60000, 75000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Clothing',
        data: [35000, 40000, 48000, 55000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Home Goods',
        data: [25000, 30000, 35000, 42000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  // Updated revenue data with more segments
  const revenueData = {
    labels: [
      'Smartphone',
      'Laptop',
      'Tablet',
      'Smart Home',
      'Accessories'
    ],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 15000, 7000, 6000, 4000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ],
      },
    ],
  };

  return (
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Typography variant="h6" mb={2}>
                Quarterly Sales Breakdown
              </Typography>
              <Bar data={salesData} options={barChartOptions} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h6" mb={2}>
                Revenue by Product Category
              </Typography>
              <Pie data={revenueData} options={pieChartOptions} />
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
  );
};

export default Dashboard;