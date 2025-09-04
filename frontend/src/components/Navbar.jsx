function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200 w-full">
      <nav className="w-full px-3 sm:px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-sm" />
          <h1 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-gray-900 truncate">
            Ad Platform Recommender
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          <a
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden xs:inline"
          >
            Home
          </a>
          <button
            className="text-sm font-medium rounded-xl px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm hover:shadow md:active:scale-[.98] transition-all w-full sm:w-auto"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
  