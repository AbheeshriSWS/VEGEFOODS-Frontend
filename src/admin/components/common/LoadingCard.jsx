const LoadingCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
};

export default LoadingCard;