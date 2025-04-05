// ブラウザのglobal TextDecoderとTextEncoderをutilで使用できるようにするポリフィル
if (typeof window !== 'undefined') {
  // utilモジュールが外部化されたときの代替ポリフィルを提供
  window.util = window.util || {};

  // ブラウザが提供するTextDecoderとTextEncoderを使用
  window.util.TextDecoder = window.TextDecoder;
  window.util.TextEncoder = window.TextEncoder;

  console.log('Polyfill loaded for util.TextDecoder and util.TextEncoder');
}

export {};
