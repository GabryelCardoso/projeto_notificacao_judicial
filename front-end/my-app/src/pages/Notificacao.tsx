import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNotificacaoActions } from "../hooks/useNotificacaoActions";
export default function Notificacao() {
  const { createNotificacao } = useNotificacaoActions();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const idNotificacao = await createNotificacao(data);
    console.log(idNotificacao);
    navigate(`/notificado/${idNotificacao}`);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className=" p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white mb-2">
            Nova Notificação - Notifica<span className="text-blue-300">+</span>
          </h1>
          <p className="text-gray-300">
            Cadastre uma nova notificação judicial
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg shadow-xl p-8 space-y-6">
          <div>
            <label
              htmlFor="titulo"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Título *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
              placeholder="Ex: Citação para audiência de conciliação"
              required
              {...register("titulo", { required: true })}
            />
            {errors.titulo?.type == "required" && (
              <p className="text-red-400 text-sm mt-1">
                Campo título é obrigatório
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="descricao"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Descrição *
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 "
              placeholder="Descreva os detalhes da notificação..."
              {...register("descricao", { required: true })}
            />
            {errors.descricao?.type == "required" && (
              <p className="text-red-400 text-sm mt-1">
                Campo descrição é obrigatório
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="data_audiencia"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
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
