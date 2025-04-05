// polyfill.js
if (typeof window !== "undefined") {
  // Node.jsのrequire関数をエミュレート
  window.require = function (module) {
    if (module === "util") {
      return {
        TextDecoder: class BrowserTextDecoder extends window.TextDecoder {
          constructor(encoding, options = {}) {
            // ブラウザのTextDecoderはfatalオプションを受け付けないことがあるので、
            // オプションをフィルタリングする
            super(encoding);
          }
        },
        TextEncoder: window.TextEncoder,
      };
    }

    // 他のrequireが呼ばれた場合のフォールバック
    console.warn(`Module ${module} was required but is not mocked.`);
    return {};
  };

  // Nodeのfsモジュールをモック
  window.fs = {
    readFileSync: function () {
      throw new Error("fs.readFileSync is not available in browser");
    },
  };

  // Nodeのpathモジュールをモック
  window.path = {
    join: function () {
      return Array.from(arguments).join("/");
    },
  };

  window.global = window;
  window.process = window.process || { env: {} };

  console.log("Enhanced polyfill loaded for Node.js compatibility");
}

export {};
