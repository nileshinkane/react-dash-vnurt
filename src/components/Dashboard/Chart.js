import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: '4-5 AM', pv: 2400, amt: 2400,
  },
  {
    name: '5-5.30 AM', pv: 1398, amt: 2210,
  },
  {
    name: '6-7 AM', pv: 9800, amt: 2290,
  },
  {
    name: '7-8 AM', pv: 3908, amt: 2000,
  },
  {
    name: '8-9 AM', pv: 4800, amt: 2181,
  },
  {
    name: '9-10 AM',  pv: 3800, amt: 2500,
  },
  {
    name: '11- 12 AM', pv: 4300, amt: 2100,
  },
  {
    name: '12- 1 PM', pv: 4300, amt: 2100,
  },
  {
    name: '1-2 PM', pv: 4300, amt: 2100,
  },
  {
    name: '2- 3 PM', pv: 4300, amt: 2100,
  },
];

export default class Chart extends PureComponent {
 
  render() {
    return (
      
      <BarChart
        height={200}
        width={600}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#1f1a5e" />
      </BarChart>
      
    );
  }
}
