const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Deutsch-Französische Einheit</h3>
              <p className="text-sm">Gemeinsam für die Zukunft</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Impressum</a>
              <a href="#" className="hover:text-blue-400">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  