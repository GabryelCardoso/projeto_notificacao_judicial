import { useNotificacoesList } from "../hooks/useNotificacaoList";
import { Notificacao, Status } from "../types/notificacao";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const { notificacoes, loading, error } = useNotificacoesList();
  const navigate = useNavigate();

  if (loading) return <div className="text-white">Carregando...</div>;
  if (error) return <div className="text-red-400">Erro: {error}</div>;

  return (
    <div className="p-6">
      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white mb-2">
            Dashboard - Notifica<span className="text-blue-300">+</span>
          </h1>
          <p className="text-gray-300">Gerencie suas notificações judiciais</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              {notificacoes.length}
            </h3>
            <p className="text-gray-300">Total de Notificações</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              {
                notificacoes.filter(
                  (n: Notificacao) => n.status === Status.CONCLUIDO
                ).length
              }
            </h3>
            <p className="text-gray-300">Concluídas</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              {
                notificacoes.filter(
                  (n: Notificacao) => n.status === Status.EM_ANDAMENTO
                ).length
              }
            </h3>
            <p className="text-gray-300">Em Andamento</p>
          </div>
          <div className="bg-cyan-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              {
                notificacoes.filter(
                  (n: Notificacao) => n.status === Status.VALIDACAO
                ).length
              }
            </h3>
            <p className="text-gray-300">Validação</p>
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
                      {notificacao.notificado?.nome || "Sem notificado"}
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 text-white rounded-full text-sm font-medium ">
                        {notificacao.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      <button
                        disabled={notificacao.status === Status.CONCLUIDO}
                        onClick={async () => {
                          if (notificacao.status === Status.VALIDACAO)
                            navigate(
                              `/validacao/${notificacao.id_notificacao}`
                            );

                          if (notificacao.status === Status.EM_ANDAMENTO)
                            navigate(
                              `/notificado/${notificacao.id_notificacao}`
                            );
                        }}
                        className={
                          notificacao.status === Status.CONCLUIDO
                            ? " bg-white text-slate-800 px-3 py-1 opacity-50 rounded-lg font-medium cursor-not-allowed"
                            : "bg-white text-slate-800 px-3 py-1 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
                        }
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/notificacao")}
            className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
          >
            Nova Notificação
          </button>
        </div>
      </div>
    </div>
  );
}
