import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class Example extends PureComponent {
    render() {
        const data = this.props.dataTest
        return (
            <ResponsiveContainer width={'100%'} height={500}>
                <BarChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 10,
                    }}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="Passes" fill="#c1e2c2" />
                    <Bar dataKey="Failures" fill="#ff97a2" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
