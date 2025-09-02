import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useForms } from "../hooks/useForms";
import { useNotificacaoActions } from "../hooks/useNotificacaoActions";
import toast from "react-hot-toast";
export default function Notificacao() {
  const { formNotificacao, loading, error } = useForms();
  const { createNotificacao } = useNotificacaoActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  if (loading) return <div className="text-white">Carregando...</div>;
  if (error) return <div className="text-red-400">Erro: {error}</div>;
  const onSubmit = async (data: any) => {
    const response = await createNotificacao(data);
    if (response.code === 201) {
      toast.success("Notificação criada com sucesso!");
      navigate(`/notificado/${response.data.id_notificacao}`);
    } else {
      toast.error("Erro ao criar notificação");
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 space-y-6">
          {formNotificacao?.map((campo: any) => (
            <div key={campo.chave}>
              <label
                htmlFor={campo.chave}
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                {campo.nome} {campo.obrigatorio ? "*" : ""}
              </label>
              {campo.tipo === "textarea" ? (
                <textarea
                  id={campo.chave}
                  placeholder={`Digite a ${campo.nome} da notificação`}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                  {...register(campo.chave, { required: campo.obrigatorio })}
                />
              ) : (
                <input
                  type={campo.tipo}
                  placeholder={`Digite o ${campo.nome} da notificação`}
                  id={campo.chave}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                  {...register(campo.chave, { required: campo.obrigatorio })}
                />
              )}
              {errors[campo.chave]?.type === "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo {campo.nome} é obrigatório
                </p>
              )}
            </div>
          ))}
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
              onClick={() => navigate(-1)}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
