import { useNotificacoes } from "../hooks/useNotificacoes";
export default function Dashboard() {
  const { notificacoes, loading, error, refetch } = useNotificacoes();

  const handleRefresh = () => {
    refetch();
  };

  if (loading) return <div className="text-white">Carregando...</div>;
  if (error) return <div className="text-red-400">Erro: {error}</div>;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white mb-2">
            Dashboard - Notifica<span className="text-blue-300">+</span>
          </h1>
          <p className="text-gray-300">Gerencie suas notificações judiciais</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">12</h3>
            <p className="text-gray-300">Total de Notificações</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">8</h3>
            <p className="text-gray-300">Concluídas</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">3</h3>
            <p className="text-gray-300">Em Andamento</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">1</h3>
            <p className="text-gray-300">Pendentes</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Título
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Descrição
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Data da Audiência
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Notificado
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-200">
                    Ação
                  </th>
                </tr>
              </thead>

              <tbody>
                {notificacoes.map((notificacao, index) => (
                  <tr
                    key={notificacao.id_notificacao}
                    className={`border-b border-slate-600 hover:bg-slate-700 transition-colors ${
                      index % 2 === 0 ? "bg-slate-800" : "bg-slate-750"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-white">
                      {notificacao.titulo}
                    </td>
                    <td className="py-4 px-6 text-gray-300 max-w-xs truncate">
                      {notificacao.descricao}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {new Date(notificacao.data_audiencia).toLocaleDateString(
                        "pt-BR"
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      {notificacao.notificado
                        ? notificacao.notificado.nome
                        : "-"}
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 text-white rounded-full text-sm font-medium ">
                        {notificacao.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      <button>Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex  justify-end items-center text-sm text-gray-300">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded hover:bg-slate-600 transition-colors">
              Anterior
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-950 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-slate-700 text-gray-300 rounded hover:bg-slate-600 transition-colors">
              Próximo
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
            Nova Notificação
          </button>
        </div>
      </div>
    </div>
  );
}
