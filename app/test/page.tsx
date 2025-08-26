export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Test Strony - Studio Tańca</h1>
        <p className="text-gray-600 mb-8">Jeśli widzisz tę stronę, deployment działa poprawnie!</p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-green-600 font-semibold">✅ Strona działa</p>
          <p className="text-sm text-gray-500 mt-2">Możesz teraz wrócić do głównej strony</p>
        </div>
      </div>
    </div>
  )
}
