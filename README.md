## environment

https://github.com/TGVRock/quick_learning_symbol_v3/blob/main/03_account.md#31-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E7%94%9F%E6%88%90

import {utils, BaseValue, Bip32, ByteArray, Hash256, PrivateKey, PublicKey, SharedKey256, Signature, NetworkLocator} from "symbol-sdk"
import {SymbolFacade, SymbolPublicAccount, SymbolAccount, SymbolTransactionFactory, NetworkTimestamp, Address, Network, MessageEncoder, KeyPair, Verifier, generateMosaicId, generateNamespaceId, isValidNamespaceName, generateNamespacePath, generateMosaicAliasId, proveMerkle, deserializePatriciaTreeNodes, provePatriciaMerkle, metadataGenerateKey, metadataUpdateValu

index.js:13 Uncaught ReferenceError: global is not defined
at node_modules/bitcore-lib/index.js (index.js:13:22)
at **require (chunk-4MWRP73S.js:37:50)
at node_modules/bitcore-mnemonic/lib/mnemonic.js (mnemonic.js:3:17)
at **require (chunk-4MWRP73S.js:37:50)
at node_modules/bitcore-mnemonic/index.js (index.js:1:18)
at \*\*require (chunk-4MWRP73S.js:37:50)
at Bip32.js:2:22

browser-external:util:9 Module "util" has been externalized for browser compatibility. Cannot access "util.TextDecoder" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
overrideMethod @ hook.js:608
get @ browser-external:util:9
node_modules/symbol-crypto-wasm-node/symbol_crypto_wasm.js @ symbol_crypto_wasm.js:5
\*\*require @ chunk-4MWRP73S.js:37
(anonymous) @ ed25519_wasm.js:4

browser-external:util:9 Module "util" has

## symbol facade

index.js:13 Uncaught ReferenceError: global is not defined
at node_modules/bitcore-lib/index.js (index.js:13:22)
at **require (chunk-4MWRP73S.js:37:50)
at node_modules/bitcore-mnemonic/lib/mnemonic.js (mnemonic.js:3:17)
at **require (chunk-4MWRP73S.js:37:50)
at node_modules/bitcore-mnemonic/index.js (index.js:1:18)
at \_\_require (chunk-4MWRP73S.js:37:50)
at Bip32.js:2:22
