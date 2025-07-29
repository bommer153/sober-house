function Stats() {
  const stats = [
    { number: '95%', label: 'Success Rate', color: 'text-blue-400' },
    { number: '500+', label: 'Lives Changed', color: 'text-green-400' },
    { number: '24/7', label: 'Support Available', color: 'text-purple-400' },
    { number: '5+', label: 'Years Experience', color: 'text-indigo-400' }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-800 bg-opacity-30 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making a Real Difference
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Join hundreds of individuals who have successfully rebuilt their lives through our program
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 text-center border border-white border-opacity-10">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
