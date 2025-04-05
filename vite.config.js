export default {
  build: {
    rollupOptions: {
      // Node.jsモジュールを外部化から除外
      external: []
    }
  },
  resolve: {
    alias: {
      // Node.jsのutilモジュールをブラウザ互換の実装に置き換え
      util: 'util/'
    }
  },
  optimizeDeps: {
    // Symbol SDKの依存関係を事前バンドル
    include: ['symbol-sdk']
  }
};
