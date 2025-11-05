// Configuração de URLs para o projeto
// Detecta automaticamente se está em desenvolvimento ou produção

const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? '' : '/tcc-bcc-2025';

// Função para gerar URL completa dos arquivos
export function getFileURL(path) {
  return `${baseURL}${path}`;
}

// URLs base para diferentes tipos de arquivo
export const paths = {
  monografias: '/files/monografias/',
  apresentacoes: '/files/apresentacoes/',
  logos: '/'
};

// Função específica para TCCs
export function getTccFileURL(tipo, nomeArquivo) {
  const basePath = tipo === 'monografia' ? paths.monografias : paths.apresentacoes;
  return getFileURL(`${basePath}${nomeArquivo}`);
}

export { baseURL };