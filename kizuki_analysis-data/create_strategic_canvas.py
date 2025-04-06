import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# 競争要因
factors = [
    '基本機能の充実度', 
    '使いやすさ', 
    '内省支援', 
    'フィードバック機能', 
    'ジョブクラフティング支援', 
    '組織貢献の可視化', 
    '他システムとの連携性', 
    'コストパフォーマンス', 
    'モバイル対応', 
    'データ分析・活用'
]

# 各製品のスコア
products = {
    'kizuki': [7, 9, 10, 9, 10, 8, 7, 7, 9, 8],
    'gamba!': [9, 8, 4, 6, 2, 5, 7, 7, 8, 7],
    'PigeonCloud': [8, 7, 3, 5, 2, 6, 8, 8, 7, 6],
    '日報くん': [7, 8, 3, 4, 1, 4, 6, 9, 6, 5],
    'ナノティ': [8, 7, 2, 5, 1, 5, 7, 8, 7, 6],
    'ワンオンワンツール': [5, 7, 8, 9, 6, 5, 6, 6, 7, 7],
    '360度フィードバック': [4, 6, 7, 10, 5, 7, 5, 5, 6, 8],
    'タレントマネジメント': [6, 5, 6, 8, 7, 9, 8, 4, 7, 9],
    'Slackボット': [6, 9, 4, 7, 2, 4, 9, 8, 9, 5]
}

# 色の設定
colors = {
    'kizuki': '#FF5733',  # 目立つ赤オレンジ
    'gamba!': '#3498DB',
    'PigeonCloud': '#2ECC71',
    '日報くん': '#9B59B6',
    'ナノティ': '#F1C40F',
    'ワンオンワンツール': '#1ABC9C',
    '360度フィードバック': '#E74C3C',
    'タレントマネジメント': '#34495E',
    'Slackボット': '#27AE60'
}

# 図のサイズを設定
plt.figure(figsize=(14, 10))

# X軸の位置を設定
x = np.arange(len(factors))

# 各製品のプロット
for i, (product, scores) in enumerate(products.items()):
    plt.plot(x, scores, marker='o', linewidth=2, label=product, color=colors[product])
    
    # kizukiの場合は線を太くして目立たせる
    if product == 'kizuki':
        plt.plot(x, scores, marker='o', linewidth=4, label='_nolegend_', color=colors[product])

# グラフの設定
plt.xticks(x, factors, rotation=45, ha='right')
plt.yticks(np.arange(0, 11, 1))
plt.ylim(0, 10.5)
plt.grid(True, linestyle='--', alpha=0.7)
plt.title('kizukiと競合製品の戦略キャンバス', fontsize=16)
plt.ylabel('評価スコア（10点満点）', fontsize=12)
plt.legend(loc='upper center', bbox_to_anchor=(0.5, -0.15), ncol=3)

# レイアウトの調整
plt.tight_layout()

# 保存
plt.savefig('/home/ubuntu/kizuki_analysis/strategic_canvas.png', dpi=300, bbox_inches='tight')
print("戦略キャンバスの図表を保存しました。")

# 主要な競合カテゴリごとの平均値を計算
traditional_systems = ['gamba!', 'PigeonCloud', '日報くん', 'ナノティ']
growth_tools = ['ワンオンワンツール', '360度フィードバック', 'タレントマネジメント', 'Slackボット']

traditional_avg = [np.mean([products[p][i] for p in traditional_systems]) for i in range(len(factors))]
growth_avg = [np.mean([products[p][i] for p in growth_tools]) for i in range(len(factors))]

# 新しい図を作成
plt.figure(figsize=(14, 10))

# カテゴリ別の平均値と kizuki をプロット
plt.plot(x, products['kizuki'], marker='o', linewidth=4, label='kizuki', color='#FF5733')
plt.plot(x, traditional_avg, marker='s', linewidth=3, label='従来の日報・勤怠システム（平均）', color='#3498DB')
plt.plot(x, growth_avg, marker='^', linewidth=3, label='自己成長支援ツール（平均）', color='#2ECC71')

# グラフの設定
plt.xticks(x, factors, rotation=45, ha='right')
plt.yticks(np.arange(0, 11, 1))
plt.ylim(0, 10.5)
plt.grid(True, linestyle='--', alpha=0.7)
plt.title('kizukiと競合カテゴリの戦略キャンバス比較', fontsize=16)
plt.ylabel('評価スコア（10点満点）', fontsize=12)
plt.legend(loc='upper center', bbox_to_anchor=(0.5, -0.15), ncol=3)

# レイアウトの調整
plt.tight_layout()

# 保存
plt.savefig('/home/ubuntu/kizuki_analysis/strategic_canvas_category.png', dpi=300, bbox_inches='tight')
print("カテゴリ別の戦略キャンバス比較図を保存しました。")
