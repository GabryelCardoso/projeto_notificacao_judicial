import { useState, useEffect } from "react";
import { notificacaoService } from "../services/notificacaoService";
import { Notificacao } from "../types/notificacao";

export function useNotificacoes() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [creating, setCreating] = useState(false);

  const fetchNotificacoes = async () => {
    try {
      setLoading(true);
      const data = await notificacaoService.findAll();
      setNotificacoes(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar notificações");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotificacoes();
  }, []);

  const refetch = () => {
    fetchNotificacoes();
  };

  const createNotificacao = async (data: {
    titulo: string;
    descricao: string;
    data_audiencia: string;
    status?: string;
  }) => {
    try {
      setCreating(true);

      const novaNotificacao = await notificacaoService.create(data);

      return novaNotificacao;
    } catch (err: any) {
      setError(err.message || "Erro ao criar notificação");
    } finally {
      setCreating(false);
    }
  };

  return {
    notificacoes,
    loading,
    error,
    refetch,
    creating,

    createNotificacao,
  };
}
