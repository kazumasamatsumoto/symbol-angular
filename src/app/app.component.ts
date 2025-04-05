import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SymbolService } from './services/symbol.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'symbol-angular';
  sdkInitialized = false;
  address = '';
  errorMessage = '';

  constructor(private symbolService: SymbolService) {}

  async ngOnInit() {
    try {
      // アプリケーション起動時にSymbol SDKを初期化
      this.sdkInitialized = await this.symbolService.initialize();
      console.log('Symbol SDK初期化状態:', this.sdkInitialized);

      if (this.sdkInitialized) {
        // 初期化成功時にアドレスを生成してみる
        this.address = this.symbolService.generateAddress();
      }
    } catch (error) {
      console.error('初期化エラー:', error);
      this.errorMessage = error instanceof Error ? error.message : '不明なエラーが発生しました';
    }
  }

  showAlert() {
    try {
      // グローバルなTextDecoderとTextEncoderを使用
      console.log('TextDecoder:', window.TextDecoder);
      console.log('TextEncoder:', window.TextEncoder);
      
      if (this.sdkInitialized) {
        // ハッシュ生成のテスト
        const hash = this.symbolService.generateHash('test-data');
        console.log('生成されたハッシュ:', hash);
        alert(`SDKが正常に動作しています！\nアドレス: ${this.address}\nハッシュ: ${hash}`);
      } else {
        alert('Symbol SDKが初期化されていません。エラーメッセージ: ' + this.errorMessage);
      }
    } catch (error: any) {
      console.error('エラーが発生しました:', error);
      alert('エラーが発生しました: ' + (error.message || 'Unknown error'));
    }
  }
}
