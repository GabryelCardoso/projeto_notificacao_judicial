import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-12 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-7xl font-light text-white mb-4">
              Notifica<span className="text-blue-300">+</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Sistema de notificação judicial moderno e eficiente. Gerencie
              notificações, cadastre notificados e acompanhe o status de entrega
              de forma simplificada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="text-center space-y-3 rounded-sm bg-cyan-900 p-4 shadow-lg">
              <h3 className="text-lg font-medium text-white  ">Notificações</h3>
              <p className="text-gray-400 text-sm">
                Crie e gerencie documentos judiciais
              </p>
            </div>

            <div className="text-center space-y-3 rounded-sm  bg-cyan-900 p-4 shadow-lg">
              <h3 className="text-lg font-medium text-white">Notificados</h3>
              <p className="text-gray-400 text-sm">
                Cadastre e organize destinatários
              </p>
            </div>

            <div className="text-center space-y-3 rounded-sm  bg-cyan-900 p-4 shadow-lg">
              <h3 className="text-lg font-medium text-white">Validação</h3>
              <p className="text-gray-400 text-sm">Valide a notificação</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-4 justify-center items-center">
              <button
                className="bg-white text-slate-800 w-75 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
                onClick={() => navigate("/notificacao")}
              >
                Criar notificação
              </button>
              <button
                className="bg-gray-900 text-white w-50 py-3 rounded-lg font-medium hover:bg-gray-950 transition-colors shadow-lg cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Comece a gerenciar suas notificações agora
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
