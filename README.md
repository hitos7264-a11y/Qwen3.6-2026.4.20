# Qwen3.6 2026年4月19日 ― 実世界エージェントモデル徹底解剖

アリババが2026年3月末〜4月16日に投下した「Qwen 3.6」シリーズの全貌を、**スマホ表示に完全特化したモダンUI**で届ける特設サイトです。

## 🎯 サイトの目的

- **原稿（徹底解剖・補遺篇）の内容**と、**ファクトチェック訂正レポート**の2系統の情報を完全に読み込み、
- **訂正レポートの情報を最も信頼できる一次ソース**として優先し、
- **原稿中の26点の事実誤認を全訂正**した上で、
- 2026年4月19日時点の最新情報として読み物化する。

## ✅ 完了している機能

### デザイン
- **ライト／ダークモード切替**（右上の🌙ボタン、localStorageに保存、OSのprefers-color-schemeを初期値に使用）
- **モバイルファースト**の流体レイアウト（720pxコンテナ、15pxベースフォント）
- **スマホUI特化**：上部スティッキーナビ・右からスライドするドロワー目次・トップに戻るボタン
- 進捗バーは**導入していません**（ユーザー要件）
- **画像は一切挿入していません**（ユーザー要件）

### 構成ページ（全11ページ）
| ファイル | 役割 |
| --- | --- |
| `index.html` | トップ：3分要点／章別ナビ／タイムライン／最重要訂正／用語辞典 |
| `overview.html` | ① 概要：三位一体リリースと Plus / 35B-A3B の設計思想（第1-2章） |
| `specs.html` | ② スペック：1Mコンテキスト／MoE／ハード要件（第3-4章） |
| `benchmarks.html` | ③ 競争優位性：公式比較表準拠のベンチ比較と経済学（第5-6章） |
| `meaning.html` | ④ 意味：戦略転換と地政学的再編（第7-8章） |
| `architecture.html` | ⑤ アーキテクチャ：Hybrid Linear Attention／Gated DeltaNet／12:1（第9-10章） |
| `realworld.html` | ⑥ 実世界スコア：独自ベンチ群／視覚コーディング／1.4兆トークン（第11-13章） |
| `enterprise.html` | ⑦ Wukong（3/17先行発表）とハードウェア包囲網（第14-15章） |
| `pros-cons.html` | ⑧ メリット10選／デメリット5選＋追加論点（第16-17章） |
| `future.html` | ⑨ $53B投資／累計10億DL／次世代モデル／エピローグ（第18章+） |
| `corrections.html` | ⚠ **ファクトチェック全26件訂正一覧**（本サイトの最重要資料） |

### 訂正済み事実（特に重要）
- 比較対象モデルは **Opus 4.5 / GPT-5.2 / Gemini-3 Pro / Kimi-K2.5**（Opus 4.6 / GPT-5.4 ではない）
- SWE-bench Pro で Opus 4.5 は **59.3 / 57.1**（45.9 ではない）、Qwen は**やや下回る**
- SWE-bench Verified の比較対象は **Opus 4.5 の 80.9**（80.8 ではない）
- 価格は **$0.276 / $1.651**、さらに**256K–1M帯は $1.101 / $6.602 の段階課金**
- Claude比は**約18倍**（17倍ではない）
- **AIME25**（AIME 2026ではない）、HMMT は **HMMT25** 表記に統一
- RealWorldQA の 70.3 は **Gemma4-31B**（Sonnet 4.5 ではない）、Plus 側 85.4
- 35B-A3B は **262K native / 最大1M拡張可**
- **思考モードは完全廃止されていない**（preserve_thinking 等で制御可）
- **Qwen3.5 に 35B-A3B は存在しない**（3.6世代で初登場）
- アーキテクチャは **40層 × 3:1**（48層ではない ― それはQwen3-Next）
- **Wukong は 2026年3月17日 発表**（4月2日ではない）
- OpenRouter 記録は **約1.4兆トークン**（1兆ではない）／Wikipedia 約140回（6000回ではない）
- **Hugging Face 累計10億DL／派生30万超**（4億／14万は古い値）
- 量子化バリアントは **20種類以上**（10種類以上は過少）
- **Qwen Code OAuth 無料枠は 2026/4/15 に廃止済み**
- 100万トークンは日本語で**6〜9冊分**（10冊は英語換算）

## 🔗 主要URI（全ページ一覧）

| URI | 内容 |
| --- | --- |
| `/index.html` | トップページ |
| `/overview.html` | トピック1 概要 |
| `/specs.html` | トピック2 スペック |
| `/benchmarks.html` | トピック3 競争優位性 |
| `/meaning.html` | トピック4 意味 |
| `/architecture.html` | トピック5 アーキテクチャ |
| `/realworld.html` | トピック6 実世界スコア |
| `/enterprise.html` | トピック7 Wukong/ハード |
| `/pros-cons.html` | トピック8 メリデメ |
| `/future.html` | トピック9 未来 |
| `/corrections.html` | ⚠ 訂正一覧 |

## 🛠 技術スタック

- **純粋な HTML / CSS / JavaScript**（フレームワーク・CDN依存なし）
- CSS Variables による完全な**ライト／ダーク2テーマ**切替
- ビューポート対応、safe-area-insets考慮済み
- localStorage に `qwen36-theme` キーで保存
- ベンチバーは `IntersectionObserver` でスクロール連動アニメ

## 📂 ファイル構成

```
index.html
overview.html
specs.html
benchmarks.html
meaning.html
architecture.html
realworld.html
enterprise.html
pros-cons.html
future.html
corrections.html
css/
  └─ style.css     (共通CSS／ライト・ダーク両対応)
js/
  └─ main.js       (テーマ切替・ドロワー・ベンチアニメ等)
source/
  ├─ errors.txt    (ファクトチェック訂正レポート原本)
  ├─ analysis1.txt (原稿 第1部)
  └─ analysis2.txt (原稿 第2部／補遺篇)
README.md
```

## 🚧 未実装／今後の拡張アイディア

- 各ベンチの外部ソースへのディープリンク化
- 章横断の検索機能（単一HTMLページ内ミニ検索）
- 英語版／簡体字版の追加
- 読了時間インジケーター（進捗バーではなく分数表示として）

## 🚀 デプロイ方法

公開するには **Publish タブ** からワンクリックで公開できます。

## 📄 データモデル

本サイトは静的HTMLのみで構成されており、RESTful Table API は使用していません（クライアントサイド完結）。

---

© 2026 Qwen3.6 徹底解剖 特設サイト ― 2026年4月19日版
