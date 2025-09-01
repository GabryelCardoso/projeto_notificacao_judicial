import api from "./api";

import { Notificacao } from "../types/notificacao";

export const notificacaoService = {
  findAll: async (): Promise<Notificacao[]> => {
    const response = await api.get("/notificacao");
    return response.data.map((n: any) => new Notificacao(n));
  },

  findOne: async (idNotificacao: number): Promise<Notificacao> => {
    const response = await api.get(`/notificacao/${idNotificacao}`);
    return new Notificacao(response.data);
  },

  create: async (data: {
    titulo: string;
    descricao: string;
    data_audiencia: string;
  }) => {
    const response = await api.post("/notificacao", data);
    return response;
  },

  createNotificado: async (data: {
    nome: string;
    email: string;
    telefone: string;
    enderecos: Array<{
      logradouro: string;
      numero: number;
      bairro: string;
      cidade: string;
      estado: string;
      CEP: string;
    }>;
  }) => {
    const response = await api.post("/notificado", data);
    return response;
  },
};
