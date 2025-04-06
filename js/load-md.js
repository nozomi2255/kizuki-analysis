const files = [
    "kizuki_analysis-data/1on1_tools_analysis.md",
    "kizuki_analysis-data/360_feedback_tools_analysis.md",
    "kizuki_analysis-data/call-reverie-details.md",
    "kizuki_analysis-data/errc_grid.md",
    "kizuki_analysis-data/gamba_analysis.md",
    "kizuki_analysis-data/kizuki_features_analysis.md",
    "kizuki_analysis-data/kizuki_market_strategy_analysis_report.md",
    "kizuki_analysis-data/nanoty_analysis.md",
    "kizuki_analysis-data/nippoukun_analysis.md",
    "kizuki_analysis-data/pigeon_cloud_analysis.md",
    "kizuki_analysis-data/slack_bots_daily_reports_analysis.md",
    "kizuki_analysis-data/strategic_canvas_factors.md",
    "kizuki_analysis-data/strategic_canvas_scores.md",
    "kizuki_analysis-data/talent_management_systems_analysis.md"
  ];
  
  const container = document.getElementById('reports');
  
  files.forEach((file) => {
    fetch(file)
      .then(res => res.text())
      .then(md => {
        const section = document.createElement('section');
        const id = file.split('/').pop().replace('.md', '').replace(/_/g, '-');
        section.id = id;
        section.className = 'card markdown-body';
        section.innerHTML = marked.parse(md);
        container.appendChild(section);
      })
      .catch(err => {
        console.error('読み込み失敗:', file, err);
      });
  });