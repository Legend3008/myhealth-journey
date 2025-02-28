
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '@/components/ui/card';

const data = [
  { date: 'Mon', heartRate: 72, bloodPressure: 120, temperature: 98.6 },
  { date: 'Tue', heartRate: 74, bloodPressure: 118, temperature: 98.7 },
  { date: 'Wed', heartRate: 73, bloodPressure: 122, temperature: 98.5 },
  { date: 'Thu', heartRate: 76, bloodPressure: 123, temperature: 98.9 },
  { date: 'Fri', heartRate: 75, bloodPressure: 119, temperature: 98.6 },
  { date: 'Sat', heartRate: 71, bloodPressure: 120, temperature: 98.4 },
  { date: 'Sun', heartRate: 72, bloodPressure: 117, temperature: 98.6 },
];

export function HealthMetricsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }} 
          tickLine={{ stroke: 'var(--border)' }} 
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          tickLine={{ stroke: 'var(--border)' }} 
          domain={['auto', 'auto']} 
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--border)',
            borderRadius: 'var(--radius)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
          itemStyle={{ padding: '2px 0' }}
        />
        <Legend wrapperStyle={{ paddingTop: 10 }} />
        <Line
          type="monotone"
          dataKey="heartRate"
          name="Heart Rate (bpm)"
          stroke="var(--destructive)"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="bloodPressure"
          name="Blood Pressure (systolic)"
          stroke="var(--primary)"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="temperature"
          name="Temperature (°F)"
          stroke="#FF9800"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
