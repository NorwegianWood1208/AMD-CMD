const { WS_RPC } = require('@vite/vitejs-ws');
const { ViteAPI } = require('@vite/vitejs');

let WS_service = new WS_RPC("ws://example.com");
let provider = new ViteAPI(WS_service, () => {
    console.log("Connected");
});

provider.request('ledger_getSnapshotChainHeight').then((result) => {
    console.log(result);
}).catch((err) => {
    console.warn(err);
}); 