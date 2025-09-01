import { useParams, useNavigate } from "react-router-dom";
import { useNotificacoesList } from "../hooks/useNotificacaoList";
import { useNotificacaoActions } from "../hooks/useNotificacaoActions";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
export default function Validacao() {
  const { notificacaoId } = useParams();
  const { notificacao } = useNotificacoesList(Number(notificacaoId));
  const { updateStatusAndamento, updateStatusConcluido } =
    useNotificacaoActions();

  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (notificacao) {
      reset(notificacao);
    }
  }, [notificacao, reset]);

  return (
    <div className=" p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white mb-2">
            Cadastrar Notificado - Notifica
            <span className="text-blue-300">+</span>
          </h1>
          <p className="text-gray-300">
            Cadastre uma nova notificação judicial
          </p>
        </div>
        <form>
          <div className="bg-slate-800 rounded-lg shadow-xl p-8 space-y-6">
            <h1 className="block text-2xl text-start font-medium text-gray-200 mb-4">
              Dados da notificação
            </h1>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Título *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Ex: Digite o título da notificação"
                  {...register("titulo", { required: true })}
                />
                {errors.titulo?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo título é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Descrição *
                </label>
                <input
                  disabled
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite a descrição da notificação"
                  {...register("descricao", { required: true })}
                />
                {errors.descricao?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo título é obrigatório
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Data da Audiência *
                </label>
                <input
                  disabled
                  type="date"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  {...register("data_audiencia", { required: true })}
                />
                {errors.data_audiencia?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo data da audiência é obrigatório
                  </p>
                )}
              </div>
              <div className="flex-1"></div>
            </div>

            <h1 className="block text-2xl text-start font-medium text-gray-200 mb-4">
              Dados pessoais do notificado
            </h1>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Nome *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o nome completo do notificado"
                  {...register("notificado.nome", { required: true })}
                />
                {errors.nome?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo nome é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email *
                </label>
                <input
                  disabled
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o email do notificado"
                  {...register("notificado.email", { required: true })}
                />
                {errors.email?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo email é obrigatório
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Telefone *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o telefone do notificado"
                  {...register("notificado.telefone", { required: true })}
                />
                {errors.telefone?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo telefone é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1"></div>
            </div>
            <h1 className="block text-2xl text-start font-medium text-gray-200 mb-4">
              Dados de endereço do notificado
            </h1>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Logradouro *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o logradouro do notificado"
                  {...register("notificado.logradouro", { required: true })}
                />
                {errors.logradouro?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo logradouro é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Número *
                </label>
                <input
                  disabled
                  type="number"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o número da residência"
                  {...register("notificado.numero", { required: true })}
                />
                {errors.numero?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo número é obrigatório
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Cidade *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite a cidade do notificado"
                  {...register("notificado.cidade", { required: true })}
                />
                {errors.cidade?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo cidade é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Bairro *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o bairro do notificado"
                  readOnly
                  {...register("notificado.bairro", { required: true })}
                />
                {errors.bairro?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo bairro é obrigatório
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Estado *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o estado do notificado"
                  {...register("notificado.estado", { required: true })}
                />
                {errors.estado?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo estado é obrigatório
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  CEP *
                </label>
                <input
                  disabled
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 opacity-50 cursor-not-allowed"
                  placeholder="Digite o CEP do notificado"
                  {...register("notificado.CEP", { required: true })}
                />
                {errors.cep?.type == "required" && (
                  <p className="text-red-400 text-sm mt-1">
                    Campo CEP é obrigatório
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 bg-slate-800 rounded-lg shadow-xl p-8 flex flex-col items-center">
          <p className="text-lg text-gray-200 mb-4">
            Os dados da notificação estão corretos?
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-white text-slate-800 px-7 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
              onClick={async () => {
                await updateStatusConcluido(Number(notificacaoId));
                navigate("/dashboard");
              }}
            >
              Sim
            </button>
            <button
              className="bg-gray-900 text-white px-7 py-2 rounded-lg font-medium hover:bg-gray-950 transition-colors shadow-lg cursor-pointer"
              onClick={async () => {
                await updateStatusAndamento(Number(notificacaoId));
                navigate(`/notificado/${notificacaoId}`);
              }}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
