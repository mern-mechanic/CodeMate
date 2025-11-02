import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart = () => {
    const option = {
        title: { text: 'Website Visitors' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Desktop', 'Mobile'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'Desktop', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] },
            { name: 'Mobile', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] },
        ],
    };

    return (
        <ReactECharts
            style={{ height: '600px', width: '100%' }}
            opts={{ renderer: 'svg' }}
            notMerge={true}
            option={option}
        />
    );
};

export default Chart;
