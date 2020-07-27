import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChoicesComponent } from './choices/choices.component';

// AngularのNgModuleはJavaScript（ES2015）のモジュールとは異なり、それを補完します。 NgModuleは、アプリケーションドメイン、ワークフロー、あるいは一連の機能と密接に関連するコンポーネントセットのコンパイルコンテキストを宣言します。 NgModuleは、そのコンポーネントをサービスなどの関連コードとまとめて、機能単位を形成できます。すべてのAngularアプリケーションには、通常はAppModuleという名前の ルートモジュール があり、アプリケーションを起動するブートストラップメカニズムを提供します。アプリには、通常、多くの機能モジュールが含まれています。JavaScriptモジュールと同様に、NgModuleは他のNgModuleから機能をインポートし、独自の機能をエクスポートして他のNgModuleから使用できるようにします。たとえば、アプリでルーターのサービスを使用するには、RouterのNgModuleをインポートします。コードを個別の機能モジュールに整理することで、複雑なアプリケーションの開発を管理したり、再利用性を考慮した設計を行うのに役立ちます。さらに、この技術を使用すると、起動時にロードする必要のあるコードの量を最小限に抑えるために、 遅延ロード 、—つまり要求に応じてモジュールをロードする—ことができます。

// Q: Componentとの違いは？
// -> 複数のcomponent, moduleまとめれるからDI的役割を持つ？

@NgModule({
  declarations: [AppComponent, ChoicesComponent],
  // このNgModuleで宣言されたコンポーネントテンプレートで必要とされる他のモジュール
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}