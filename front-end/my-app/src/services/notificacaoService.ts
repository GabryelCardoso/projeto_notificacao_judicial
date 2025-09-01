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
    return response.data;
  },

  createNotificado: async (data: {
    nome: string;
    email: string;
    telefone: string;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    CEP: string;
    notificacaoid: number;
  }) => {
    const response = await api.post("/notificado", data);
    return response;
  },

  updateStatusConcluido: async (idNotificacao: number) => {
    const response = await api.put(`/notificacao/concluir/${idNotificacao}`);
    return response.data;
  },

  updateStatusAndamento: async (idNotificacao: number) => {
    const response = await api.put(`/notificacao/andamento/${idNotificacao}`);
    return response.data;
  },
};
