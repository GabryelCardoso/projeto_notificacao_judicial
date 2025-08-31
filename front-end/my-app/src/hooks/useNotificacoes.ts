import { useState, useEffect } from "react";
import { notificacaoService } from "../services/notificacaoService";
import { Notificacao } from "../types/notificacao";

export function useNotificacoes() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return {
    notificacoes,
    loading,
    error,
    refetch,
  };
}
