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
      return novaNotificacao.data.id_notificacao;
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
    enderecos: Array<{
      logradouro: string;
      numero: number;
      bairro: string;
      cidade: string;
      estado: string;
      CEP: string;
    }>;
  }) => {
    try {
      setCreating(true);
      const novaNotificacao = await notificacaoService.createNotificado(data);
      setError(null);
      return novaNotificacao;
    } catch (err: any) {
      console.error(err.message || "Erro ao criar notificado");
    } finally {
      setCreating(false);
    }
  };

  return {
    error,
    creating,
    createNotificacao,
    createNotificado,
  };
}
