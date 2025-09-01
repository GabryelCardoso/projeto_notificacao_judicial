import { useState, useEffect } from "react";
import { notificacaoService } from "../services/notificacaoService";
import { Notificacao } from "../types/notificacao";

export function useNotificacoesList(id?: number) {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [notificacao, setNotificacao] = useState<Notificacao>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getNotificacoes = async () => {
    try {
      setLoading(true);
      const data = await notificacaoService.findAll();
      setNotificacoes(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar notificação");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const findNotificacao = async (id: number) => {
    try {
      setLoading(true);
      const notificacao = await notificacaoService.findOne(id);
      setNotificacao(notificacao);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Erro ao buscar notificação");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      findNotificacao(id);
    } else {
      getNotificacoes();
    }
  }, []);

  return {
    notificacoes,
    notificacao,
    loading,
    error,
    findNotificacao,
  };
}
