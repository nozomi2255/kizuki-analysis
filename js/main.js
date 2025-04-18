// ERRCグリッドの内容をHTMLに変換
document.addEventListener('DOMContentLoaded', function () {
    // ERRCグリッドの内容
    const errcGridContent = `
        <div class="errc-grid">
            <div class="errc-quadrant eliminate">
                <h3>Eliminate（排除）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>排除すべき要素</th>
                            <th>説明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>強制的な日報提出</td>
                            <td>従来の日報システムでは、日報の提出が義務として強制されることが多く、形骸化しやすい。kizukiでは強制ではなく自発的な記録を促進し、内発的動機づけを重視する。</td>
                        </tr>
                        <tr>
                            <td>固定化されたテンプレート</td>
                            <td>多くの日報システムでは、固定化されたテンプレートを使用しており、柔軟性に欠ける。kizukiではオープンクエスチョン方式を採用し、状況に応じた柔軟な内省を促進する。</td>
                        </tr>
                        <tr>
                            <td>単なる業務報告としての位置づけ</td>
                            <td>従来の日報は単なる業務報告として位置づけられることが多い。kizukiでは自己成長のためのツールとして再定義する。</td>
                        </tr>
                        <tr>
                            <td>管理者視点の一方的な評価</td>
                            <td>多くのシステムでは管理者からの一方的な評価が中心。kizukiでは相互的なフィードバックと自己評価を重視する。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="errc-quadrant reduce">
                <h3>Reduce（削減）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>削減すべき要素</th>
                            <th>説明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>テキスト入力の手間</td>
                            <td>従来のシステムではテキスト入力が中心で、継続的な利用の障壁となっていた。kizukiでは音声ジャーナリング機能により入力の手間を大幅に削減する。</td>
                        </tr>
                        <tr>
                            <td>形式的なフィードバック</td>
                            <td>多くのフィードバックツールでは形式的なフィードバックに終始しがち。kizukiでは質の高いフィードバックに焦点を当て、形式的なやりとりを削減する。</td>
                        </tr>
                        <tr>
                            <td>複雑な操作性</td>
                            <td>特にタレントマネジメントシステムなどは機能が多く複雑。kizukiではシンプルで直感的なUIを提供し、複雑さを削減する。</td>
                        </tr>
                        <tr>
                            <td>数値的な評価への依存</td>
                            <td>多くのシステムでは数値的な評価に依存しがち。kizukiでは質的な成長や内省の深さを重視し、数値評価への依存を削減する。</td>
                        </tr>
                        <tr>
                            <td>短期的な成果主義</td>
                            <td>従来のシステムでは短期的な成果に焦点が当たりがち。kizukiでは長期的な成長と持続可能なキャリア形成を重視する。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="errc-quadrant raise">
                <h3>Raise（向上）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>向上させる要素</th>
                            <th>説明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>内省の質と深さ</td>
                            <td>心理学的アプローチに基づいた質の高い問いかけにより、内省の質と深さを大幅に向上させる。</td>
                        </tr>
                        <tr>
                            <td>フィードバックの質</td>
                            <td>単なる評価ではなく、成長を促進する建設的なフィードバックの質を向上させる。</td>
                        </tr>
                        <tr>
                            <td>自己成長の可視化</td>
                            <td>日々の内省とフィードバックを通じた自己成長のプロセスを可視化し、モチベーション維持に貢献する。</td>
                        </tr>
                        <tr>
                            <td>ユーザー体験の快適さ</td>
                            <td>音声ジャーナリング機能やシンプルなUIにより、ユーザー体験の快適さを向上させる。</td>
                        </tr>
                        <tr>
                            <td>組織貢献との連携</td>
                            <td>個人の成長と組織への貢献の関連性を明確にし、両者の連携を向上させる。</td>
                        </tr>
                        <tr>
                            <td>モバイル対応の利便性</td>
                            <td>音声入力を活かした高度なモバイル対応により、場所や時間を選ばない利便性を向上させる。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="errc-quadrant create">
                <h3>Create（創造）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>創造する要素</th>
                            <th>説明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Call Reverie型音声ジャーナリング機能</td>
                            <td>音声入力や音声によるフィードバックを活用した新しいジャーナリング体験を創造する。</td>
                        </tr>
                        <tr>
                            <td>心理学に基づくオープンクエスチョン方式</td>
                            <td>リチャード・ワイズマン教授の研究に基づいた、固定化されないオープンクエスチョン方式を導入する。</td>
                        </tr>
                        <tr>
                            <td>ジョブクラフティング支援機能</td>
                            <td>自分の強みや価値観に合わせて仕事を再構築するためのジョブクラフティング支援機能を創造する。</td>
                        </tr>
                        <tr>
                            <td>自己成長と組織貢献の統合的可視化</td>
                            <td>個人の自己成長と組織への貢献を統合的に可視化する新しい指標とダッシュボードを創造する。</td>
                        </tr>
                        <tr>
                            <td>サステイナブルキャリア形成支援</td>
                            <td>長期的な視点での持続可能なキャリア形成をサポートする新しい機能を創造する。</td>
                        </tr>
                        <tr>
                            <td>AIを活用した内省支援</td>
                            <td>AIを活用して、より深い内省を促進する質問や洞察を提供する機能を創造する。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card">
            <h3 class="card-title">ERRCグリッドの戦略的意義</h3>
            <p>このERRCグリッドは、kizukiが従来の日報・勤怠管理システムと自己成長支援ツールの両方と差別化するための明確な戦略を示しています。特に以下の点が重要です：</p>
            <ul>
                <li><strong>新しい市場空間の創造</strong>: 従来の日報システムの枠を超え、自己成長と組織貢献を統合した新しい市場空間を創造します。</li>
                <li><strong>コスト削減と価値向上の両立</strong>: テキスト入力の手間や複雑な操作性を削減しながら、内省の質やユーザー体験を向上させることで、コスト削減と価値向上を両立します。</li>
                <li><strong>非顧客の取り込み</strong>: 従来の日報システムに抵抗感を持っていた「非顧客」を、自発的な記録と自己成長という新しい価値提案で取り込みます。</li>
                <li><strong>持続可能な差別化</strong>: 心理学的アプローチやジョブクラフティング支援など、模倣が困難な要素を創造することで、持続可能な差別化を実現します。</li>
            </ul>
        </div>
    `;

    // 市場分析の内容
    const marketAnalysisContent = `
        <h3>市場環境分析</h3>
        <div class="card">
            <h4 class="card-title">日報・勤怠管理システム市場の現状</h4>
            <p>日報・勤怠管理システム市場は成熟期に入っており、多くの企業が基本的な機能を提供しています。主要プレイヤーとしては、gamba!、PigeonCloud、日報くん、ナノティなどが挙げられます。これらのシステムは主に業務報告や工数管理に特化しており、基本機能の充実度や使いやすさを競争要因としています。</p>
            <p>しかし、これらのシステムは社員の自己成長や内省、フィードバック機能については限定的であり、日報が形骸化しやすいという課題を抱えています。多くの場合、日報は「書かされるもの」として認識され、その本来の価値が十分に活かされていない状況です。</p>
        </div>

        <div class="card">
            <h4 class="card-title">自己成長支援ツール市場の動向</h4>
            <p>一方、ワンオンワンミーティング支援ツール、360度フィードバックツール、タレントマネジメントシステム、Slack連携ボットなど、社員の内省、フィードバック、自己成長、組織貢献の向上を目的としたツールも増加しています。これらのツールは、従来の日報システムとは異なるアプローチで、社員の成長と組織の発展を支援しています。</p>
            <p>しかし、これらのツールは日々の業務報告や振り返りという日報の基本的な価値を十分に活用できていない場合が多く、また導入・運用のハードルが高いという課題もあります。</p>
        </div>

        <div class="card">
            <h4 class="card-title">市場の機会とギャップ</h4>
            <p>現在の市場には、「日々の業務報告」と「社員の自己成長支援」を効果的に統合したソリューションが不足しています。この市場ギャップは、kizukiにとって大きな機会となります。日報という日常的なツールを通じて自己成長を促進するアプローチは、既存の両市場の良い点を取り入れつつ、新たな価値を創造する可能性を秘めています。</p>
        </div>

        <h3>導入企業の傾向分析</h3>
        <div class="card">
            <h4 class="card-title">業種別傾向</h4>
            <p>kizukiのような次世代型日報プラットフォームは、以下の業種での導入が特に期待されます：</p>
            <ul>
                <li><strong>IT・テクノロジー企業</strong>: 従業員の自律性と成長を重視する文化を持つ企業が多く、kizukiの自発的な日報記録と自己成長支援の価値を理解しやすい。</li>
                <li><strong>クリエイティブ産業</strong>: デザイン、広告、メディアなどの創造性を重視する業界では、内省とフィードバックを通じた成長が特に重要。</li>
                <li><strong>コンサルティング・専門サービス</strong>: 知識労働者が多く、個人の成長が組織の価値に直結する業界では、kizukiの価値が高い。</li>
                <li><strong>教育・研修機関</strong>: 人材育成を本業とする組織では、kizukiの自己成長支援機能が直接的な価値を持つ。</li>
                <li><strong>医療・ヘルスケア</strong>: 継続的な学習と内省が重要な医療分野では、日々の振り返りとフィードバックの価値が高い。</li>
            </ul>
        </div>

        <div class="card">
            <h4 class="card-title">規模別傾向</h4>
            <p>企業規模別の導入傾向としては、以下のような特徴が予想されます：</p>
            <ul>
                <li><strong>中小企業（50-300名程度）</strong>: 
                    <ul>
                        <li>導入決定が比較的迅速</li>
                        <li>全社的な展開がしやすい</li>
                        <li>コスト面での懸念が大きい</li>
                    </ul>
                </li>
                <li><strong>中堅企業（300-1000名程度）</strong>:
                    <ul>
                        <li>人材育成への投資余力がある</li>
                        <li>部門単位での試験導入から始まることが多い</li>
                        <li>最も導入可能性が高いセグメント</li>
                    </ul>
                </li>
                <li><strong>大企業（1000名以上）</strong>:
                    <ul>
                        <li>既存システムとの統合が課題</li>
                        <li>部門単位での導入が現実的</li>
                        <li>導入決定プロセスが長期化する傾向</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="card">
            <h4 class="card-title">組織文化別傾向</h4>
            <p>組織文化の観点からは、以下のような企業がkizukiの導入に積極的と考えられます：</p>
            <ul>
                <li><strong>学習する組織文化</strong>: 継続的な学習と成長を重視する組織</li>
                <li><strong>フィードバック文化</strong>: オープンなフィードバックを奨励する組織</li>
                <li><strong>自律性を重視する文化</strong>: 従業員の自律性と主体性を尊重する組織</li>
                <li><strong>イノベーション志向の文化</strong>: 新しいアイデアや方法を積極的に取り入れる組織</li>
            </ul>
        </div>
    `;

    // 戦略提言の内容
    const strategyRecommendationsContent = `
        <h3>ターゲット市場の明確化</h3>
        <div class="card">
            <h4 class="card-title">プライマリーターゲット</h4>
            <ul>
                <li>中堅規模（300-1000名）のIT・テクノロジー企業</li>
                <li>学習する組織文化を持つコンサルティング・専門サービス企業</li>
            </ul>
            <h4 class="card-title mt-3">セカンダリーターゲット</h4>
            <ul>
                <li>人材育成に投資する中小企業（50-300名）</li>
                <li>クリエイティブ産業の企業</li>
                <li>教育・研修機関</li>
            </ul>
        </div>

        <h3>差別化戦略の強化</h3>
        <div class="card">
            <h4 class="card-title">「日報」の再定義</h4>
            <ul>
                <li>単なる業務報告ではなく、自己成長のためのツールとしての日報の価値を訴求</li>
                <li>「書かされる日報」から「書きたくなる日報」へのパラダイムシフトを促進</li>
            </ul>
            <h4 class="card-title mt-3">音声ジャーナリングの独自性</h4>
            <ul>
                <li>Call Reverie型音声ジャーナリング機能の使いやすさと効果を強調</li>
                <li>場所や時間を選ばない利便性をアピール</li>
            </ul>
            <h4 class="card-title mt-3">科学的アプローチの信頼性</h4>
            <ul>
                <li>リチャード・ワイズマン教授の研究に基づく心理学的アプローチの信頼性を訴求</li>
                <li>内省の質と深さを高める科学的根拠を提示</li>
            </ul>
            <h4 class="card-title mt-3">3つの柱の統合的価値</h4>
            <ul>
                <li>「内省」「フィードバック」「ジョブクラフティング」の3つの柱の統合的価値を強調</li>
                <li>個別ツールでは実現できない包括的な自己成長体験を訴求</li>
            </ul>
        </div>

        <h3>製品改善提案</h3>
        <div class="card">
            <h4 class="card-title">基本機能の強化</h4>
            <ul>
                <li>勤怠管理機能の拡充（ただし、従来のシステムとの差別化を維持）</li>
                <li>業務報告の基本機能の使いやすさ向上</li>
            </ul>
            <h4 class="card-title mt-3">他システムとの連携強化</h4>
            <ul>
                <li>主要なビジネスツール（Slack、Microsoft Teams、Google Workspace等）との連携強化</li>
                <li>API公開によるエコシステムの構築</li>
            </ul>
            <h4 class="card-title mt-3">コストパフォーマンスの向上</h4>
            <ul>
                <li>段階的な料金プランの導入（基本機能と高度な自己成長支援機能の分離）</li>
                <li>中小企業向けの特別プランの検討</li>
            </ul>
            <h4 class="card-title mt-3">データ分析・活用機能の強化</h4>
            <ul>
                <li>内省データの分析機能の拡充</li>
                <li>組織全体の成長傾向を可視化するダッシュボードの強化</li>
            </ul>
        </div>

        <h3>今後の展望</h3>
        <div class="card">
            <p>今後の市場環境の変化を踏まえると、以下のような展望が考えられます：</p>
            <ul>
                <li><strong>リモート・ハイブリッドワークの定着</strong>:
                    <ul>
                        <li>場所や時間を選ばないkizukiの音声ジャーナリング機能の価値が高まる</li>
                        <li>チームの一体感や組織文化の維持にkizukiが貢献できる可能性</li>
                    </ul>
                </li>
                <li><strong>人材育成・リテンションの重要性の高まり</strong>:
                    <ul>
                        <li>人材獲得競争の激化により、自己成長支援の価値が増大</li>
                        <li>kizukiの自己成長支援機能が企業の人材戦略の重要な要素になり得る</li>
                    </ul>
                </li>
                <li><strong>AIとの共創</strong>:
                    <ul>
                        <li>AIを活用した内省支援やフィードバック機能の発展</li>
                        <li>蓄積されたデータを活用した個人化された成長支援の可能性</li>
                    </ul>
                </li>
                <li><strong>ウェルビーイングへの注目</strong>:
                    <ul>
                        <li>従業員のメンタルヘルスやウェルビーイングへの関心の高まり</li>
                        <li>kizukiの内省支援機能がメンタルヘルスケアにも貢献できる可能性</li>
                    </ul>
                </li>
            </ul>
            <p class="mt-3">kizukiが「日報」という日常的なツールを通じて自己成長と組織貢献を促進するという独自のアプローチは、今後の働き方や人材育成の変化に対応する上で大きな可能性を秘めています。戦略的な差別化と継続的な改善により、kizukiは次世代の人材育成プラットフォームとして確固たる地位を築くことができるでしょう。</p>
        </div>
    `;

    // 内容をHTMLに挿入
    document.getElementById('errc-grid-content').innerHTML = errcGridContent;
    document.getElementById('market-analysis-content').innerHTML = marketAnalysisContent;
    document.getElementById('strategy-recommendations-content').innerHTML = strategyRecommendationsContent;
    
    // グラフ描画領域にChart.jsを描画
    const canvasElement = document.getElementById('strategyCanvas');
    const ctx = canvasElement.getContext('2d');

    const labels = [
        '基本機能の充実度', '使いやすさ', '内省支援', 'フィードバック機能',
        'ジョブクラフティング支援', '組織貢献の可視化', '他システムとの連携性',
        'コストパフォーマンス', 'モバイル対応', 'データ分析・活用'
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'kizuki',
                data: [7, 9, 10, 9, 10, 8, 7, 7, 9, 8],
                borderColor: '#FF5733',
                fill: false,
            },
            {
                label: '従来の日報・勤怠システム（平均）',
                data: [8, 7.5, 3, 5, 1.5, 5.5, 7, 8, 7, 6],
                borderColor: '#3498DB',
                fill: false,
            },
            {
                label: '自己成長支援ツール（平均）',
                data: [5, 6.8, 6.3, 8.5, 5, 6.5, 7, 5.7, 7.2, 7.3],
                borderColor: '#2ECC71',
                fill: false,
            }
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'kizukiと競合カテゴリの戦略キャンバス比較',
                    font: { size: 18 }
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 10,
                    title: {
                        display: true,
                        text: '評価スコア（10点満点）'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });

    // 全製品の戦略キャンバスグラフ（比較用）
    const allProductsData = {
      kizuki: [7, 9, 10, 9, 10, 8, 7, 7, 9, 8],
      'gamba!': [9, 8, 4, 6, 2, 5, 7, 7, 8, 7],
      PigeonCloud: [8, 7, 3, 5, 2, 6, 8, 8, 7, 6],
      '日報くん': [7, 8, 3, 4, 1, 4, 6, 9, 6, 5],
      ナノティ: [8, 7, 2, 5, 1, 5, 7, 8, 7, 6],
      ワンオンワンツール: [5, 7, 8, 9, 6, 5, 6, 6, 7, 7],
      '360度フィードバック': [4, 6, 7, 10, 5, 7, 5, 5, 6, 8],
      タレントマネジメント: [6, 5, 6, 8, 7, 9, 8, 4, 7, 9],
      Slackボット: [6, 9, 4, 7, 2, 4, 9, 8, 9, 5]
    };

    const colors = {
      kizuki: '#FF5733',
      'gamba!': '#3498DB',
      PigeonCloud: '#2ECC71',
      '日報くん': '#9B59B6',
      ナノティ: '#F1C40F',
      ワンオンワンツール: '#1ABC9C',
      '360度フィードバック': '#E74C3C',
      タレントマネジメント: '#34495E',
      Slackボット: '#27AE60'
    };

    const allProductCanvas = document.getElementById('allProductsCanvas');
    const allCtx = allProductCanvas.getContext('2d');

    const allProductDatasets = Object.entries(allProductsData).map(([name, data]) => ({
      label: name,
      data: data,
      borderColor: colors[name],
      fill: false
    }));

    new Chart(allCtx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: allProductDatasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'kizukiと競合製品の戦略キャンバス',
            font: { size: 18 }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 10,
            title: {
              display: true,
              text: '評価スコア（10点満点）'
            }
          },
          x: {
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        }
      }
    });
});
