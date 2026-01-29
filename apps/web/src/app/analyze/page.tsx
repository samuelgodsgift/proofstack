export default function AnalyzePage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Analyze GitHub Repository
      </h1>

      <p className="text-gray-600 mb-6">
        ProofStack analyzes real repositories to generate verifiable engineering signals.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="GitHub repo URL (e.g. https://github.com/user/repo)"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded"
        >
          Analyze Repository
        </button>
      </form>
    </main>
  );
}
