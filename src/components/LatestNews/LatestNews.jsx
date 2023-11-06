const LatestNews = () => {
  // You can fetch your latest news data from an API or use mock data for demonstration purposes
  const newsData = [
    {
      title: "New Local Tours Available",
      date: "November 6, 2023",
      content: "Discover our latest local tours and book your adventure today!",
    },
    {
      title: "New Local Tours Available",
      date: "November 6, 2023",
      content: "Discover our latest local tours and book your adventure today!",
    },
    {
      title: "Upcoming Events",
      date: "November 10, 2023",
      content: "Don't miss out on our upcoming events in your area.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
          Latest News
        </h2>
        <div className="grid grid-cols-1 px-4 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4">{news.date}</p>
              <p className="text-gray-700">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
