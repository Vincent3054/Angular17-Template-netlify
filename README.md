
### 情境
本地測試部屬至netlify後，根目錄路由正常。(https://ntua-rebloom.netlify.app/)
切換路由至order分頁 (https://ntua-rebloom.netlify.app/order)，顯示404錯誤。

已確定本地環境能夠順利切換。

### 原因
問題出在Angular路由的設定上，特別是在部署到Netlify這類靜態網站主機時。
當你在本機開發時，Angular 的開發伺服器能夠正確處理應用的路由。
但是當你部署到Netlify時，只有首頁（`index.html`）是直接被訪問的，其他由Angular路由處理的頁面（例如 `/order`）可能不會直接指向一個實際存在的檔案，這會導致404錯誤。

## 解決辦法

為了解決這個問題，你需要確保所有的導航請求都重定向到`index.html`，讓Angular能夠接手並處理任何路由。在Netlify上實現這一點，你可以通過添加一個`_redirects`檔案到你的專案中的`/public`或`/dist`目錄（視你的建置配置而定）來完成。這個檔案應該包含以下內容：

```
/*    /index.html   200`
```
這行配置指示Netlify，任何路由都應該導向到`index.html`，然後由Angular的路由器接管並渲染正確的組件。

#### 步驟

1. 在你的Angular專案根目錄下，找到或創建`src`資料夾。
2. 在`src`資料夾內創建一個名為`_redirects`的檔案（無檔案副檔名）。
3. 在該`_redirects`檔案中寫入上述的重定向規則。
4. 在 `angular.json` 文件中正确配置了该文件的复制过程。下面是正确的配置示例，它会将 `_redirects` 从 `src/` 目录复制到构建输出目录的根目录：
```
"assets": [
  "src/favicon.ico",
  "src/assets",
  { "glob": "_redirects", "input": "src", "output": "./" }  // 确保 _redirects 文件复制到 dist/项目名 根目录
]
```
1. 本地端build `ng build --configuration production`，確保在建置過程中，這個`_redirects`檔案被複製到部署目錄中（通常是`dist/專案名`）。
2. 重新建置並部署你的專案到Netlify。

