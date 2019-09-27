import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

const data = [
  {
    subject: 'Ruby on Rails',
    A: 90,
    B: 100,
    fullMark: 100
  },
  {
    subject: 'Javascript',
    A: 70,
    B: 100,
    fullMark: 100
  },
  {
    subject: 'Java',
    A: 75,
    B: 100,
    fullMark: 100
  },
  {
    subject: 'HTML5/CSS3',
    A: 80,
    B: 100,
    fullMark: 100
  },
  {
    subject: 'React',
    A: 50,
    B: 100,
    fullMark: 100
  },
  {
    subject: 'Angular',
    A: 30,
    B: 85,
    fullMark: 100
  },
  {
    subject: 'SQL',
    A: 75,
    B: 85,
    fullMark: 100
  },
  {
    subject: 'Git',
    A: 85,
    B: 85,
    fullMark: 100
  }
];

export default class RdChart extends PureComponent {
  render() {
    return (
      <RadarChart
        cx={170}
        cy={250}
        outerRadius={120}
        width={400}
        height={400}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#f29202"
          fill="#f29202"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
