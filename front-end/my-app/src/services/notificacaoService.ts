import api from "./api";

import { Notificacao } from "../types/notificacao";

export const notificacaoService = {
  findAll: async (): Promise<Notificacao[]> => {
    try {
      const response = await api.get("/notificacao");
      return response.data.map((n: any) => new Notificacao(n));
    } catch (e: any) {
      console.error(e);
      throw e;
    }
  },

  create: async (data: {
    titulo: string;
    descricao: string;
    data_audiencia: string;
  }) => {
    try {
      const response = await api.post("/notificacao", data);
      return response;
    } catch (e: any) {
      console.error("Erro ao criar notificação:", e);
      throw e;
    }
  },
};
