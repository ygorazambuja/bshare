"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _torrentsearchapi = require('torrent-search-api'); var _torrentsearchapi2 = _interopRequireDefault(_torrentsearchapi);

// torrent.enableProvider('ExtraTorrent')
// torrent.enableProvider('1337x')
// torrent.enablePublicProviders()
// torrent.enableProvider('Torrentz2')

 async function TorrentSearch(request, response) {
  _torrentsearchapi2.default.enableProvider("ThePirateBay")

  const { query } = request.params
  const resultQuery = await _torrentsearchapi2.default.search(query, "All", 10)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  response.send(array)
} exports.TorrentSearch = TorrentSearch;
 async function Status(request, response) {
  const ThePirateBay = await _torrentsearchapi2.default.isProviderActive("ThePirateBay")
  const ExtraTorrent = await _torrentsearchapi2.default.isProviderActive("ExtraTorrent")
  const Torrentz2 = await _torrentsearchapi2.default.isProviderActive("Torrentz2")
  const t1337x = await _torrentsearchapi2.default.isProviderActive("1337x")

  const Providers = {
    ThePirateBay,
    ExtraTorrent,
    Torrentz2,
    t1337x
  }

  response.send(Providers)
} exports.Status = Status;
 async function TorrentCustomSearch(request, response) {
  // await torrent.enablePublicProviders()

  let { query, category, items, providers } = request.body

  console.log(request.body)

  if (!query) return response.send({ err: "error, query null" })
  if (!category) category = "All"
  if (!items) items = 10
  if (!providers) providers = ["thepiratebay"]

  await _torrentsearchapi2.default.enableProvider(...providers)
  const resultQuery = await _torrentsearchapi2.default.search(query, category, items)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  response.send(array)
} exports.TorrentCustomSearch = TorrentCustomSearch;

 async function GetProviders(request, response) {
  const providersInformation = await _torrentsearchapi2.default.getProviders()
  response.send(providersInformation)
} exports.GetProviders = GetProviders;

 async function searchTorrent(request, response) {
  _torrentsearchapi2.default.enableProvider("ThePirateBay")

  let { query, items } = request.params

  if (!query) response.send({ error: "Query cannot be null" })
  if (!items) items = "20"
  const resultQuery = await _torrentsearchapi2.default.search(query, "All", items)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  response.send(array)
} exports.searchTorrent = searchTorrent;
