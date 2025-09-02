import { useState } from "react";
import { notificacaoService } from "../services/notificacaoService";

export function useNotificacaoActions() {
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const createNotificacao = async (data: {
    titulo: string;
    descricao: string;
    data_audiencia: string;
    status?: string;
  }) => {
    try {
      setCreating(true);
      const novaNotificacao = await notificacaoService.create(data);
      setError(null);
      return novaNotificacao;
    } catch (err: any) {
      setError(err.message || "Erro ao carregar notificação");
      console.error(err.message || "Erro ao criar notificação");
    } finally {
      setCreating(false);
    }
  };

  const createNotificado = async (data: {
    nome: string;
    email: string;
    telefone: string;
    notificacaoid: number;
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    CEP: string;
  }) => {
    try {
      setCreating(true);
      const novoNotificado = await notificacaoService.createNotificado(data);
      setError(null);
      return novoNotificado;
    } catch (err: any) {
      console.error(err.message || "Erro ao criar notificado");
    } finally {
      setCreating(false);
    }
  };

  const updateStatusConcluido = async (id_notificacao: number) => {
    try {
      setCreating(true);
      const response = await notificacaoService.updateStatusConcluido(
        id_notificacao
      );
      setError(null);
      return response;
    } catch (err: any) {
      console.error(err.message || "Erro ao atualizar status da notificação");
    } finally {
      setCreating(false);
    }
  };

  const updateNotificado = async (id_notificado: number, data: any) => {
    try {
      setCreating(true);

      const response = await notificacaoService.updateNotificado(
        id_notificado,
        data
      );
      setError(null);
      return response;
    } catch (err: any) {
      console.error(err.message || "Erro ao atualizar notificado");
    } finally {
      setCreating(false);
    }
  };

  const updateNotificacao = async (id_notificacao: number, data: any) => {
    try {
      setCreating(true);
      const response = await notificacaoService.updateNotificacao(
        id_notificacao,
        data
      );
      setError(null);
      return response;
    } catch (err: any) {
      console.error(err.message || "Erro ao atualizar notificação");
    } finally {
      setCreating(false);
    }
  };

  const updateStatusAndamento = async (id_notificacao: number) => {
    try {
      setCreating(true);
      const response = await notificacaoService.updateStatusAndamento(
        id_notificacao
      );
      setError(null);
      return response;
    } catch (err: any) {
      console.error(err.message || "Erro ao atualizar status da notificação");
    } finally {
      setCreating(false);
    }
  };

  return {
    error,
    creating,
    createNotificacao,
    createNotificado,
    updateStatusConcluido,
    updateStatusAndamento,
    updateNotificacao,
    updateNotificado,
  };
}
