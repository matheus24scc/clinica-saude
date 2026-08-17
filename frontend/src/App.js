import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-teal-600 text-white p-6 shadow">
        <h1 className="text-2xl font-bold">Clínica Saúde</h1>
        <p className="text-sm">Plataforma de agendamento de consultas</p>
      </header>
      <main className="max-w-3xl mx-auto p-6">
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Bem-vindo</h2>
          <p className="text-slate-600">
            Agende consultas, acompanhe exames e gerencie seus atendimentos em um só lugar.
          </p>
          <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Agendar consulta
          </button>
        </section>
      </main>
      <footer className="text-center text-slate-400 text-xs p-4">
        Clínica Saúde &middot; MVP
      </footer>
    </div>
  );
}

export default App;
