const CACHE_NAME = 'aeron-v1.0.0';
const OFFLINE_URL = '/';

// Arquivos essenciais para cache
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/AERON.png',
  '/AERON%20GENESIS.png',
  '/GENESIS.png',
  // Capas das faixas
  '/Spark_the_Fire.png',
  '/Spark_the_Change.png',
  '/Breaking_the_Sky.png',
  '/Flow_State.png',
  '/Eternal_Pulse.png',
  '/Hunting_Shadows.png',
  '/Rise_Like_the_Sun.png',
  '/Eternal_Ascent.png',
  '/Unbreakable.png',
  '/Echoes_of_the_Sky.png',
  '/Unbreakable_Steel.png'
];

// Instalação - cachear arquivos essenciais
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching essential files');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativação - limpar caches antigos
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - estratégia Network First com fallback para Cache
self.addEventListener('fetch', (event) => {
  // Ignorar requisições não-GET
  if (event.request.method !== 'GET') return;
  
  // Ignorar requisições para APIs externas (Google Analytics, Spotify, etc)
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    // Tentar buscar da rede primeiro
    fetch(event.request)
      .then((response) => {
        // Se sucesso, clonar e atualizar cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Se falhar (offline), buscar do cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Se não tiver no cache, retornar página offline
            return caches.match(OFFLINE_URL);
          });
      })
  );
});

console.log('[Service Worker] Loaded successfully');
