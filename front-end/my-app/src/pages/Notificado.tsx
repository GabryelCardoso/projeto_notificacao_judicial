import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useNotificacoesList } from "../hooks/useNotificacaoList";
import { useNotificacaoActions } from "../hooks/useNotificacaoActions";
import { Notificacao } from "../types/notificacao";

export default function Notificado() {
  const { notificacaoId, flag } = useParams();
  const navigate = useNavigate();

  const { createNotificado, updateNotificado, updateNotificacao } =
    useNotificacaoActions();

  const { notificacao, error, loading } = useNotificacoesList(
    Number(notificacaoId)
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Notificacao>();

  useEffect(() => {
    if (notificacao) {
      reset(notificacao);
    }
  }, [notificacao, reset]);

  if (loading) return <div className="text-white">Carregando...</div>;
  if (error) return <div className="text-red-400">Erro: {error}</div>;

  const onSubmit = async (data: any) => {
    const { notificado, ...notificacao } = data;
    const responseNotificacao = await updateNotificacao(
      Number(notificacaoId),
      notificacao
    );
    if (!flag) {
      console.log("SEM FLAG");
      notificado.notificacaoId = Number(notificacaoId);
      notificado.numero = Number(notificado.numero);
      console.log(notificado);
      const responseNotificado = await createNotificado(notificado);
      //navigate(`/validacao/${notificacaoId}`);
    } else {
      const response = await updateNotificado(
        Number(notificado.id_notificado),
        notificado
      );
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
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
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
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
                type="date"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o nome completo do notificado"
                {...register("notificado.nome", { required: true })}
              />
              {errors.notificado?.nome?.type == "required" && (
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
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o email do notificado"
                {...register("notificado.email", { required: true })}
              />
              {errors.notificado?.email?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o telefone do notificado"
                {...register("notificado.telefone", { required: true })}
              />
              {errors.notificado?.telefone?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o logradouro do notificado"
                {...register("notificado.logradouro", { required: true })}
              />
              {errors.notificado?.logradouro?.type == "required" && (
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
                type="number"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o número da residência"
                {...register("notificado.numero", { required: true })}
              />
              {errors.notificado?.numero?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite a cidade do notificado"
                {...register("notificado.cidade", { required: true })}
              />
              {errors.notificado?.cidade?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o bairro do notificado"
                {...register("notificado.bairro", { required: true })}
              />
              {errors.notificado?.bairro?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o estado do notificado"
                {...register("notificado.estado", { required: true })}
              />
              {errors.notificado?.estado?.type == "required" && (
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
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Digite o CEP do notificado"
                {...register("notificado.CEP", { required: true })}
              />
              {errors.notificado?.CEP?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo CEP é obrigatório
                </p>
              )}
            </div>
          </div>
          <div className="flex space-x-4 pt-6">
            <button
              className="flex-1 bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
              onClick={() => handleSubmit(onSubmit)()}
            >
              Salvar Notificação
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-slate-700 text-gray-300 rounded-lg font-medium hover:bg-slate-600 transition-colors border border-slate-600 cursor-pointer"
              onClick={() => handleCancel()}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
