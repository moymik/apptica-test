const DataStatus = ({loading, error}) => {
  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Cannot load data. Please try again later</div>;
  return null;
};

export default DataStatus;