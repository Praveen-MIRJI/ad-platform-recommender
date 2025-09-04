import { useLocation } from "react-router-dom"

function IconBox({ children }) {
  return (
    <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-sm">
      {children}
    </div>
  )
}

function Results() {
  const location = useLocation()
  const { domain, content } = location.state || {}

  const items = [
    { name: "YouTube Ads", description: "Great for long-form and discovery.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.635 7.154a2.75 2.75 0 0 0-1.94-1.947C15.87 4.75 12 4.75 12 4.75s-3.87 0-5.695.457A2.75 2.75 0 0 0 4.365 7.154 28.68 28.68 0 0 0 3.9 12a28.68 28.68 0 0 0 .465 4.846 2.75 2.75 0 0 0 1.94 1.947C8.13 19.25 12 19.25 12 19.25s3.87 0 5.695-.457a2.75 2.75 0 0 0 1.94-1.947A28.68 28.68 0 0 0 20.1 12a28.68 28.68 0 0 0-.465-4.846ZM10.5 9.75l4.5 2.25-4.5 2.25V9.75Z" />
      </svg>
    ) },
    { name: "Instagram Reels", description: "High engagement short-form placements.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7.5 3.75h9A3.75 3.75 0 0 1 20.25 7.5v9A3.75 3.75 0 0 1 16.5 20.25h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.25-.375a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z" />
      </svg>
    ) },
    { name: "Google Search Ads", description: "Match active intent with keywords.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 4.75c-3.99 0-7.25 3.26-7.25 7.25s3.26 7.25 7.25 7.25c3.52 0 6.473-2.51 7.128-5.875H12v-2.5h11.25c.062.39.093.79.093 1.188 0 6.213-5.13 11.25-11.343 11.25S.656 18.276.656 12.062 5.786.812 12 .812c3 0 5.735 1.141 7.8 3.01l-1.95 2.025A8.462 8.462 0 0 0 12 4.75Z" />
      </svg>
    ) },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 w-full">
      <div className="w-full px-3 sm:px-4 py-8 md:py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 text-center">Recommendations</h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8">Based on your input, here are suggested platforms.</p>

        {domain ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <IconBox>{item.icon}</IconBox>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl w-full">
            <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 text-center">
              <p className="text-gray-600">No input provided. Go back and enter details.</p>
            </div>
          </div>
        )}

        {domain && (
          <div className="mx-auto max-w-3xl mt-8 w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-gray-500">Domain</span>
                  <span className="block font-medium text-gray-900">{domain}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Content</span>
                  <span className="block text-gray-800">{content || "No content provided"}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Results
