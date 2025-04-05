import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'symbol-angular';

  showAlert() {
    try {
      // グローバルなTextDecoderとTextEncoderを使用
      console.log('TextDecoder:', window.TextDecoder);
      console.log('TextEncoder:', window.TextEncoder);

      // 動作確認
      alert('設定の修正が完了しました');
    } catch (error: any) {
      console.error('エラーが発生しました:', error);
      alert('エラーが発生しました: ' + (error.message || 'Unknown error'));
    }
  }
}
