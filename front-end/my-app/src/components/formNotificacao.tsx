export default function FormNotificado(
  edit: boolean,
  register?: any,
  errors?: any
) {
  return (
    <div className=" p-6">
      <div className="max-w-4xl mx-auto">
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

            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Descrição *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("descricao", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
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
            <div className="flex-1"></div>
          </div>

          <h1 className="block text-2xl text-start font-medium text-gray-200 mb-4">
            Dados do notificado
          </h1>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("Nome", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("email", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Telefone *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("telefone", { required: true })}
              />
              {errors.telefone?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo telefone é obrigatório
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Logradouro *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("logradouro", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo logradouro é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Número *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("Nome", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Bairro *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("email", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Cidade *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("Nome", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Estado *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("email", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="titulo"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                CEP *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                placeholder="Ex: Citação para audiência de conciliação"
                required
                {...register("Nome", { required: true })}
              />
              {errors.titulo?.type == "required" && (
                <p className="text-red-400 text-sm mt-1">
                  Campo título é obrigatório
                </p>
              )}
            </div>

            <div className="flex-1"></div>
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
