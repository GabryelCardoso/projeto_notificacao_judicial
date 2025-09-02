import { useState, useEffect } from "react";
import { notificacaoService } from "../services/notificacaoService";

export function useForms() {
  const [formNotificacao, setFormNotificacao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const geFormtNotificacoes = async () => {
    try {
      setLoading(true);
      const data = await notificacaoService.findFormNotificacao();
      setFormNotificacao(data.data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar form de notificação");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    geFormtNotificacoes();
  }, []);

  return {
    formNotificacao,
    loading,
    error,
  };
}
