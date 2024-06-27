import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';

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

function groupByWeek(data) {
  return data.reduce((acc, item) => {
    const timestamp = moment(item.timestamp);
    if (timestamp.isValid()) { // Check for valid timestamp
      const week = timestamp.startOf('week').week();
      
      if (!acc[week]) {
        acc[week] = { week, value: 0 };
      }
      acc[week].value += Number(item.value); // Ensure numeric value
    }
    console.log(Object.values(acc)); // Optional for debugging
    
    return acc; 
  }, {});
}

function groupByMonth(data) {
  return data.reduce((acc, item) => {
    let month;

    // Handle invalid timestamps gracefully:
    try {
      month = new Date(item.timestamp).getMonth() +1; // Month starts from 1 (Jan)
    } catch (error) {
      console.error("Invalid timestamp:", item.timestamp, error);
      // Choose your handling strategy (replace with your preferred approach):
      // - Skip the object (continue;)
      // - Assign a default month value (month = 1;)
      // - Log and ignore (don't modify month)
    }

    
    if ( month!=="NaN" && !acc[month]) {
      acc[month] = { month, value: 0 };
    }

 
    acc[month].value += Number(item.value) || 0;
    
    return acc;
  }, {});
}

const App = () => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');
 

  useEffect(() => {
    const fetchData = async () => {
      if (timeframe === 'weekly') {
        setData( groupByWeek(jsonData));
      } else if (timeframe === 'monthly') {
        setData( groupByMonth(jsonData));
      } else {
        setData(jsonData)
      }

      
    };
    fetchData();
  }, [timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };
  console.log(data)

  return (
    <div className="App">
      <h1>Timeframe Chart</h1>
      <TimeframeSelector onSelect={handleTimeframeChange} />
      <Chart data={data} timeframe={timeframe} />
    </div>
  );
};

export default App;