const CACHE_NAME = 'sigac-cache-v1';

// Lista de arquivos para funcionar offline (Baseado no seu explorador do VS Code)
const assets = [
  './',
  './index.html',
  './dashboard.html',
  './listar-alunos.html',
  './cadastrar-aluno.html',
  './listar-cursos.html',
  './cadastrar-curso.html',
  './analise.html',
  './style.css',
  './dashboard.css',
  './main.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Instalação: Salva os arquivos no cache do navegador
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('SIGAC: Cache de ativos realizado com sucesso');
      return cache.addAll(assets);
    })
  );
});

// Ativação: Limpa caches antigos se você mudar o nome da versão (v1, v2...)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch: Serve os arquivos do cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Retorna o cache ou vai buscar na rede se não encontrar
      return cachedResponse || fetch(event.request);
    })
  );
});