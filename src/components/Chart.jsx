import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const jsonData=[
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-04T00:00:00Z", "value": 8 },
  { "timestamp": "2023-01-05T00:00:00Z", "value": 16 },
  { "timestamp": "2023-01-06T00:00:00Z", "value": 4},
  { "timestamp": "2023-01-07T00:00:00Z", "value": 2 },
  { "timestamp": "2023-01-08T00:00:00Z", "value": 6 },
  { "timestamp": "2023-01-09T00:00:00Z", "value": 7 },
  { "timestamp": "2023-01-10T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-11T00:00:00Z", "value": 1 },
  { "timestamp": "2023-01-12T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-13T00:00:00Z", "value": 8 },
  { "timestamp": "2023-01-14T00:00:00Z", "value": 9 },
  { "timestamp": "2023-01-15T00:00:00Z", "value": 14 },
  { "timestamp": "2023-01-6T00:00:00Z", "value": 1 },
  { "timestamp": "2023-01-17T00:00:00Z", "value": 11 },
  { "timestamp": "2023-01-18T00:00:00Z", "value": 2 },
  { "timestamp": "2023-01-19T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-20T00:00:00Z", "value": 7 },
  { "timestamp": "2023-01-21T00:00:00Z", "value": 9 },
  { "timestamp": "2023-01-22T00:00:00Z", "value": 2 },
  { "timestamp": "2023-01-23T00:00:00Z", "value": 16 },
  { "timestamp": "2023-01-242T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-25T00:00:00Z", "value": 11 },
  { "timestamp": "2023-01-26T00:00:00Z", "value": 18 },
  { "timestamp": "2023-01-27T00:00:00Z", "value": 6 },
  { "timestamp": "2023-01-28T00:00:00Z", "value": 2 },
  { "timestamp": "2023-01-29T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-30T00:00:00Z", "value": 14 },
  { "timestamp": "2023-01-31T00:00:00Z", "value": 18 },
  { "timestamp": "2023-02-01T00:00:00Z", "value": 11 },
  { "timestamp": "2023-02-02T00:00:00Z", "value": 16 },
  { "timestamp": "2023-02-03T00:00:00Z", "value": 9 },
  { "timestamp": "2023-02-04T00:00:00Z", "value": 7 },
  { "timestamp": "2023-02-05T00:00:00Z", "value": 8 },
  { "timestamp": "2023-02-06T00:00:00Z", "value": 2 },
  { "timestamp": "2023-02-07T00:00:00Z", "value": 7 },
  { "timestamp": "2023-02-08T00:00:00Z", "value": 2 },
  { "timestamp": "2023-02-09T00:00:00Z", "value": 7 },
  { "timestamp": "2023-02-10T00:00:00Z", "value": 10 },
  { "timestamp": "2023-02-11T00:00:00Z", "value": 18 },
  { "timestamp": "2023-02-12T00:00:00Z", "value": 7 },
  { "timestamp": "2023-02-13T00:00:00Z", "value": 18 },
  { "timestamp": "2023-02-14T00:00:00Z", "value": 12 },
  { "timestamp": "2023-02-15T00:00:00Z", "value": 5},
  { "timestamp": "2023-02-6T00:00:00Z", "value": 13 },
  { "timestamp": "2023-02-17T00:00:00Z", "value": 11 },
  { "timestamp": "2023-02-18T00:00:00Z", "value": 9 },
  { "timestamp": "2023-02-19T00:00:00Z", "value": 3 },
  { "timestamp": "2023-02-20T00:00:00Z", "value": 2 },
  { "timestamp": "2023-02-21T00:00:00Z", "value": 5 },
  { "timestamp": "2023-02-22T00:00:00Z", "value": 11 },
  { "timestamp": "2023-02-23T00:00:00Z", "value": 4 },
  { "timestamp": "2023-02-242T00:00:00Z", "value": 2 },
  { "timestamp": "2023-02-25T00:00:00Z", "value": 9 },
  { "timestamp": "2023-02-26T00:00:00Z", "value": 2 },
  { "timestamp": "2023-02-27T00:00:00Z", "value": 9 },
  { "timestamp": "2023-02-28T00:00:00Z", "value": 18 },
  { "timestamp": "2023-03-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-03-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-03-03T00:00:00Z", "value": 6 },
  { "timestamp": "2023-03-04T00:00:00Z", "value": 16 },
  { "timestamp": "2023-03-05T00:00:00Z", "value": 12 },
  { "timestamp": "2023-03-06T00:00:00Z", "value": 6 },
  { "timestamp": "2023-03-07T00:00:00Z", "value": 16 },
  { "timestamp": "2023-03-08T00:00:00Z", "value": 12 },
  { "timestamp": "2023-03-09T00:00:00Z", "value": 2 },
  { "timestamp": "2023-03-10T00:00:00Z", "value": 1 },
  { "timestamp": "2023-03-11T00:00:00Z", "value": 18 },
  { "timestamp": "2023-03-12T00:00:00Z", "value": 9 },
  { "timestamp": "2023-03-13T00:00:00Z", "value": 19 },
  { "timestamp": "2023-03-14T00:00:00Z", "value": 12 },
  { "timestamp": "2023-03-15T00:00:00Z", "value": 5 },
  { "timestamp": "2023-03-6T00:00:00Z", "value": 10 },
  { "timestamp": "2023-03-17T00:00:00Z", "value": 11 },
  { "timestamp": "2023-03-18T00:00:00Z", "value": 13 },
  { "timestamp": "2023-03-19T00:00:00Z", "value": 10 },
  { "timestamp": "2023-03-20T00:00:00Z", "value": 11 },
  { "timestamp": "2023-03-21T00:00:00Z", "value": 8 },
  { "timestamp": "2023-03-22T00:00:00Z", "value": 13 },
  { "timestamp": "2023-03-23T00:00:00Z", "value": 2 },
  { "timestamp": "2023-03-242T00:00:00Z", "value": 14 },
  { "timestamp": "2023-03-25T00:00:00Z", "value": 3 },
  { "timestamp": "2023-03-26T00:00:00Z", "value": 8 },
  { "timestamp": "2023-03-27T00:00:00Z", "value": 2 },
  { "timestamp": "2023-03-28T00:00:00Z", "value": 5 },
  { "timestamp": "2023-03-29T00:00:00Z", "value": 2 },
  { "timestamp": "2023-03-30T00:00:00Z", "value": 16 },
  { "timestamp": "2023-03-31T00:00:00Z", "value": 7 },
  { "timestamp": "2023-04-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-04-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-04-03T00:00:00Z", "value": 11 },
  { "timestamp": "2023-04-04T00:00:00Z", "value": 17 },
  { "timestamp": "2023-04-05T00:00:00Z", "value": 14 },
  { "timestamp": "2023-04-06T00:00:00Z", "value": 9},
  { "timestamp": "2023-04-07T00:00:00Z", "value": 10 },
  { "timestamp": "2023-04-08T00:00:00Z", "value": 15 },
  { "timestamp": "2023-04-09T00:00:00Z", "value": 8 },
  { "timestamp": "2023-04-10T00:00:00Z", "value": 13 },
  { "timestamp": "2023-04-11T00:00:00Z", "value": 11 },
  { "timestamp": "2023-04-12T00:00:00Z", "value": 14 },
  { "timestamp": "2023-04-13T00:00:00Z", "value": 17 },
  { "timestamp": "2023-04-14T00:00:00Z", "value": 18 },
  { "timestamp": "2023-04-15T00:00:00Z", "value": 8 },
  { "timestamp": "2023-04-6T00:00:00Z", "value": 15 },
  { "timestamp": "2023-04-17T00:00:00Z", "value": 14 },
  { "timestamp": "2023-04-18T00:00:00Z", "value": 8 },
  { "timestamp": "2023-04-19T00:00:00Z", "value": 6 },
  { "timestamp": "2023-04-20T00:00:00Z", "value": 12 },
  { "timestamp": "2023-04-21T00:00:00Z", "value": 5 },
  { "timestamp": "2023-04-22T00:00:00Z", "value": 12 },
  { "timestamp": "2023-04-23T00:00:00Z", "value": 1 },
  { "timestamp": "2023-04-242T00:00:00Z", "value": 3 },
  { "timestamp": "2023-04-25T00:00:00Z", "value": 5 },
  { "timestamp": "2023-04-26T00:00:00Z", "value": 12 },
  { "timestamp": "2023-04-27T00:00:00Z", "value": 6 },
  { "timestamp": "2023-04-28T00:00:00Z", "value": 2 },
  { "timestamp": "2023-04-29T00:00:00Z", "value": 5 },
  { "timestamp": "2023-04-30T00:00:00Z", "value": 12 },
  
  
  ]

const dateString = "2023-01-01T00:00:00Z"; 
const dateObject = new Date(dateString);
const timestamp = dateObject.getTime();
function formatTimestamp(timestamp, timeframe = 'daily') {
  
  

  if (!timestamp || typeof timestamp !== 'number') {
    console.error('Invalid timestamp:', timestamp);
    return ''; // Handle invalid timestamp gracefully (return empty string)
  }

  try {
    const date = new Date(timestamp * 1000); // Convert to milliseconds if needed

    if (timeframe === 'daily') {
      return date.toLocaleDateString();
    } else if (timeframe === 'weekly') {
      const options = { week: 'numeric' }; // Week number only
      return `Week ${date.toLocaleDateString('en-US', options)}`; // US locale for consistent formatting
    } else if (timeframe === 'monthly') {
      return date.toLocaleDateString('en-US', { month: 'long' }); // US locale for consistent month names
    }  else {
      console.warn('Unsupported timeframe:', timeframe);
      return ''; // Handle unsupported timeframe gracefully (return empty string)
    }
  } catch (error) {
    console.error('Error formatting timestamp:', error);
    return ''; // Handle parsing errors gracefully (return empty string)
  }
}



const Chart = (data, timeframe ) => {
  const [dataL, setDataL] = useState([data]);
  

  useEffect(() => {
    const fetchData = async () => {
      const chartData = data
      setDataL(chartData.data);
      
    };
    fetchData();
  }, [timeframe]);
  if(jsonData!==dataL){
    console.log(jsonData)
    console.log(dataL)

    console.log(data)
  }
  
  

  return (
    <div className="chart-container">
      <LineChart width={600} height={300} data={jsonData}>
        <Line type="monotone" dataKey="value" stroke="#555" />
        <XAxis dataKey="timestamp" tickFormatter={formatTimestamp(timestamp)} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;