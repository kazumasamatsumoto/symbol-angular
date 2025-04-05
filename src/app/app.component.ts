import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateKey } from 'symbol-sdk';
import { SymbolFacade, descriptors, models, KeyPair } from 'symbol-sdk/symbol';

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
      // Symbol SDKを使ったコードを実行
      const facade = new SymbolFacade('testnet');
      console.log(facade);

    } catch (error: any) {
      console.error('エラーが発生しました:', error);
      alert('エラーが発生しました: ' + (error.message || 'Unknown error'));
    }
  }
}
