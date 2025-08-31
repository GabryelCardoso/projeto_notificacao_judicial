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
};
