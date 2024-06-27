
const  formatTimestamp=(timestamp)=> {
    // Function to format timestamp for X-axis labels (e.g., day, week, month)
    const date = new Date(timestamp);
    if (timeframe === 'daily') {
      return date.toLocaleDateString();
    }
}
export default formatTimestamp;