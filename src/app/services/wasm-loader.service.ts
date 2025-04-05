import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WasmLoaderService {
  constructor(private http: HttpClient) {}

  /**
   * WebAssemblyファイルを読み込み、インスタンス化します
   * @param path WebAssemblyファイルへのパス
   * @returns WebAssembly.WebAssemblyInstantiatedSource
   */
  async loadWasm(path: string): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
    try {
      const response = await fetch(path);
      const bytes = await response.arrayBuffer();
      const module = await WebAssembly.compile(bytes);
      const instance = await WebAssembly.instantiate(module, {
        // 必要に応じてここにインポートを追加
        env: {
          // 環境変数やグローバル関数をここでマッピング
        }
      });
      return { module, instance };
    } catch (error) {
      console.error('WebAssemblyの読み込みに失敗しました:', error);
      throw error;
    }
  }

  /**
   * WebAssemblyモジュールを事前に読み込みます
   * @param path WebAssemblyファイルへのパス
   */
  preloadWasm(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // WebAssemblyファイルを事前にキャッシュする
      fetch(path)
        .then(() => {
          console.log(`WebAssemblyファイルがプリロードされました: ${path}`);
          resolve();
        })
        .catch(error => {
          console.error(`WebAssemblyファイルのプリロードに失敗: ${path}`, error);
          reject(error);
        });
    });
  }
}
