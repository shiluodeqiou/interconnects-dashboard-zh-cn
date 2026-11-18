// ==UserScript==
// @name         Interconnects AI Dashboard 中文化
// @namespace    https://github.com/shiluodeqiou/interconnects-dashboard-zh-cn
// @version      1.0.0
// @description  将 Interconnects Open Models Dashboard 的界面、图表标签、提示与方法说明翻译为简体中文。
// @author       shiluodeqiou
// @match        https://dashboard.interconnects.ai/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const exact = new Map(Object.entries({
    'Interconnects Open Models Dashboard': 'Interconnects 开放模型仪表盘',
    'Open Models Dashboard': '开放模型仪表盘',
    'Newsletter': '订阅通讯',
    'Artifacts Hub': 'Artifacts Hub',
    'ATOM Project': 'ATOM 项目',
    'updated daily': '每日更新',
    'Downloads': '下载量',
    'Derivative models': '衍生模型',
    'Research mentions': '研究提及',
    'to date': '截至目前',
    'Snapshot': '数据快照',
    'Total downloads': '总下载量',
    'Tracked core LLMs': '追踪的核心大语言模型',
    'Tracked local LLMs': '追踪的本地大语言模型',
    'Papers mentioning LLMs': '提及大语言模型的论文',
    'Tracking start': '追踪开始时间',
    'Sections': '章节',
    'Trending Models': '热门模型',
    'Size': '规模',
    'Released': '发布时间',
    'Core LLMs released in the last 90 days, ranked by RAM (relative adoption metric): downloads since release ÷ the 10th-best model in the same size class at the same age, so 1× is top-10 pace. Each model is scored at the latest of 7, 14, 30 or 60 days it has reached. Downloads are since release.': '过去 90 天发布的核心大语言模型，按 RAM（相对采用度指标）排序：发布后的下载量 ÷ 同规模、同模型年龄下排名第 10 的模型下载量，因此 1× 表示达到前十名的速度。每个模型取其已达到的 7、14、30 或 60 天中最新时间点的得分。下载量从模型发布时开始计算。',
    'At Interconnects, this has been one of our go-to adoption measures. Not all models that are breakthroughs have high RAM, but almost all models with a high RAM score are one of the most important open models of that quarter.': '在 Interconnects，我们长期使用这一指标衡量模型采用度。并非所有突破性模型都有很高的 RAM，但 RAM 得分高的模型几乎都是该季度最重要的开放模型之一。',
    'Region': '地区',
    'Organization': '组织',
    'Monthly': '按月',
    'Cumulative': '累计',
    'Group by': '分组依据',
    'Mode': '模式',
    'Visible date range': '可见日期范围',
    'Chart series': '图表序列',
    'Share this chart': '分享此图表',
    'Copy image': '复制图片',
    'Download PNG': '下载 PNG',
    'Copy link': '复制链接',
    'Share': '占比',
    'Share %': '占比 %',
    'Count': '数量',
    'New derivatives released each month, grouped by tracked base-model region.': '每月发布的新衍生模型，按所追踪基础模型的地区分组。',
    'Research Adoption': '研究采用度',
    "Monthly mentions of various LLMs across arXiv's most popular AI categories.": 'arXiv 最热门 AI 分类中各大语言模型的月度提及情况。',
    'Family': '模型系列',
    'Paper count': '论文数量',
    'Paper rate': '论文占比',
    'Rate (LLM papers)': '占比（大语言模型论文）',
    'Defaults': '默认',
    'All': '全部',
    'None': '无',
    'Done': '完成',
    'Methodology': '方法说明',
    'expand': '展开',
    'Inference Volume & Share': '推理用量与占比',
    'OpenRouter Open vs. Closed Token Volume': 'OpenRouter 开放与闭源模型 Token 用量',
    'Share of token volume from its daily top 50 models.': '每日排名前 50 的模型所占 Token 用量。',
    'Volume': '用量',
    'All time': '全部时间',
    'Open Weights': '开放权重',
    'Closed Weights': '闭源权重',
    'Share of tokens': 'Token 占比',
    'OpenRouter Open Model Token Volume by Region': 'OpenRouter 各地区开放模型 Token 用量',
    'Token volume of daily top 50 models categorized by region.': '按地区统计每日排名前 50 模型的 Token 用量。',
    'Share of open-model tokens': '开放模型 Token 占比',
    'Open Model Inference Growth': '开放模型推理增长',
    'Company-reported token volumes and OpenRouter weekly averages, in tokens per day.': '公司披露的 Token 用量与 OpenRouter 周均值，单位为每日 Token 数。',
    'Log': '对数',
    'Linear': '线性',
    'Sources & methodology': '来源与方法说明',
    'OpenCode Open-Model Usage': 'OpenCode 开放模型用量',
    'Share of weekly observed token volume among open-weight models on OpenCode Go / Go + Free, by region.': 'OpenCode Go / Go + Free 中开放权重模型每周观测 Token 用量的地区占比。',
    'Regions': '地区',
    'Organizations': '组织',
    'Daily': '每日',
    'Weekly': '每周',
    'Token share (%)': 'Token 占比（%）',
    'Unknown': '未知',
    'Vercel AI Gateway Token Usage': 'Vercel AI Gateway Token 用量',
    'Weekly mean of daily open-weight and closed-weight token shares across all AI Gateway models.': '所有 AI Gateway 模型每日开放权重与闭源权重 Token 占比的周均值。',
    'Open vs. Closed Share': '开放与闭源占比',
    'Open Model Share': '开放模型占比',
    'Open models': '开放模型',
    'Mean token share (%)': '平均 Token 占比（%）',
    'Downloads Analysis': '下载量分析',
    'Downloads for Models Over 100B': '参数量超过 100B 的模型下载量',
    'Local Model Downloads': '本地模型下载量',
    'LocalLLaMA discussion': 'LocalLLaMA 讨论',
    'Monthly share · posts + comments': '月度占比 · 帖子 + 评论',
    'Absolute': '绝对数量',
    'Open-Closed Gap By Region': '各地区开放与闭源模型差距',
    'Western open models regularly lag behind Chinese counterparts.': '西方开放模型的能力通常落后于中国同类模型。',
    "China's Abundant, Leading Open Models": '中国数量众多且领先的开放模型',
    'More resources': '更多资源',
    'Built by': '构建者',
    'Thanks to': '特别感谢',
    'projected': '预计',
    'projected month-end': '预计月末',
    'in progress (month to date)': '进行中（截至本月）',
    'month to date': '截至本月',
    'partial month · no projection': '部分月份 · 不作预测',
    'local models': '本地模型',
    'primary': '主模型',
    'Other': '其他',
    'Other regions': '其他地区',
    'United States': '美国',
    'Europe': '欧洲',
    'USA': '美国',
    'China': '中国',
    'US': '美国',
    'EU': '欧洲',
    'Open': '开放',
    'Closed': '闭源',
    'Other': '其他',
    'Copy image': '复制图片',
    'Download source data (CSV)': '下载源数据（CSV）',
    'Hover or tap to explore': '悬停或点击查看详情',
    'Best American Open-Weight Model': '美国最佳开放权重模型',
    'Rank': '排名',
    'Artificial Analysis Intelligence Index (AAII)': 'Artificial Analysis 智能指数（AAII）',
    'More resources': '更多资源',
    'Get in touch': '联系我们',
    'Data through': '数据截至',
    'data through': '数据截至',
    'Core': '核心模型',
    'RAM at': 'RAM 位于',
    'Ignore local models': '忽略本地模型',
    'New derivatives released each month, grouped by tracked base-model': '每月发布的新衍生模型，按所追踪基础模型的',
    'region.': '地区。',
    'Copy link to': '复制',
    'chart': '图表',
    'Dashboard overview': '仪表盘概览',
    'Select model families': '选择模型系列',
    'Model family selection': '模型系列选择',
    'OpenRouter open versus closed token volume chart': 'OpenRouter 开放与闭源模型 Token 用量图表',
    'OpenRouter US, China, and Other open-model token volume chart': 'OpenRouter 美国、中国及其他地区开放模型 Token 用量图表',
    'Inference token volume timeline': '推理 Token 用量时间线',
    'OpenCode open-model token usage chart': 'OpenCode 开放模型 Token 用量图表',
    'Vercel AI Gateway token usage chart': 'Vercel AI Gateway Token 用量图表',
    'Local model downloads by region': '各地区本地模型下载量',
    'Downloads for models over 100B parameters': '参数量超过 100B 的模型下载量',
    'LocalLLaMA discussion chart': 'LocalLLaMA 讨论图表',
    'Chinese open-weight models above the top three US models on Artificial Analysis': 'Artificial Analysis 上超过美国前三模型的中国开放权重模型',
    'Frontier date range': '前沿模型日期范围',
    'updated weekly': '每周更新',
    'open model share': '开放模型占比',
  }));

  // 常见短语会出现在带有日期、数值或模型名的动态文本中，因此单独按片段替换。
  const fragments = [
    ['Open Models Dashboard', '开放模型仪表盘'],
    ['Downloads', '下载量'],
    ['downloads', '下载量'],
    ['Derivative models', '衍生模型'],
    ['derivative models', '衍生模型'],
    ['Research mentions', '研究提及'],
    ['Research Adoption', '研究采用度'],
    ['Snapshot', '数据快照'],
    ['snapshot', '数据快照'],
    ['Share', '占比'],
    ['Copy', '复制'],
    ['copy', '复制'],
    ['link', '链接'],
    ['Hide', '隐藏'],
    ['Date range', '日期范围'],
    ['Selected date range', '已选日期范围'],
    ['Families', '模型系列'],
    ['Use the same date range for all three plots. Shared history starts in November 2023.', '三个图表使用相同日期范围。共享历史从 2023 年 11 月开始。'],
    ['Start date handle', '开始日期控制柄'],
    ['End date handle', '结束日期控制柄'],
    ['Closed', '闭源'],
    ['daily', '每日'],
    ['weekly', '每周'],
    ['region', '地区'],
    ['Data through', '数据截至'],
    ['data through', '数据截至'],
    ['Tracking start', '追踪开始时间'],
    ['Monthly Hugging Face Downloads', 'Hugging Face 月度下载量'],
    ['RAM at', 'RAM 位于'],
    ['Ignore local models', '忽略本地模型'],
    ['Downloads are since release.', '下载量从模型发布时开始计算。'],
    ['New derivatives released each month, grouped by tracked base-model', '每月发布的新衍生模型，按所追踪基础模型的'],
    ['New derivatives released each month, grouped by tracked base-model region.', '每月发布的新衍生模型，按所追踪基础模型的地区分组。'],
    ['Core LLMs', '核心大语言模型'],
    ['released in the last 90 days', '过去 90 天发布的'],
    [', ranked by RAM (relative adoption metric):', '，按 RAM（相对采用度指标）排序：'],
    ['downloads since release', '发布后的下载量'],
    ['the 10th-best model in the same size class at the same age', '同规模、同模型年龄下排名第 10 的模型'],
    ['so 1× is top-10 pace', '因此 1× 表示达到前十名的速度'],
    ['Each model is scored at the latest of 7, 14, 30 or 60 days it has reached', '每个模型取其已达到的 7、14、30 或 60 天中最新时间点的得分'],
    [' region.', ' 地区。'],
    ['Copy link to', '复制'],
    ['chart', '图表'],
    ['Dashboard overview', '仪表盘概览'],
    ['Select model families', '选择模型系列'],
    ['Model family selection', '模型系列选择'],
    ['Share of new derivatives on Hugging Face', 'Hugging Face 新衍生模型占比'],
    ['% of LLM papers', '大语言模型论文占比'],
    ['Open-weight model families', '开放权重模型系列'],
    ['Proprietary / API model families', '专有 / API 模型系列'],
    ['OpenRouter (open model share)', 'OpenRouter（开放模型占比）'],
    ['OpenRouter rankings', 'OpenRouter 排名'],
    ['Company disclosures are dated by publication or public presentation and normalized to tokens per day.', '公司披露数据按发布或公开演示日期记录，并统一换算为每日 Token 数。'],
    ['Monthly rates divide by 30.4375; ranges use their lower endpoint. Company totals may include closed models.', '月度速率除以 30.4375；区间取下限。公司总量可能包含闭源模型。'],
    ['Weekly bars sum Monday–Sunday UTC totals; shares use the summed tokens.', '每周柱状图汇总 UTC 时间的周一至周日；占比使用汇总后的 Token 数。'],
    ['Weekly bars sum Monday-Sunday UTC totals; shares use the summed tokens.', '每周柱状图汇总 UTC 时间的周一至周日；占比使用汇总后的 Token 数。'],
    ['Only models in OpenRouter’s published daily top 50 are included; usage below that cutoff is unknown, not zero.', '仅统计 OpenRouter 发布的每日前 50 名模型；低于该门槛的用量未知，不代表为零。'],
    ['Only models in OpenRouter’s published daily top 50 are included; usage below that cutoff is unknown, not zero.', '仅统计 OpenRouter 发布的每日前 50 名模型；低于该门槛的用量未知，不代表为零。'],
    ['Providers may use different tokenizers, so token counts across providers are not strictly comparable.', '不同服务商可能使用不同的分词器，因此各服务商之间的 Token 数不能严格比较。'],
    ['OpenRouter model-weight categories', 'OpenRouter 模型权重类别'],
    ['OpenRouter model developer countries', 'OpenRouter 模型开发者所在国家或地区'],
    ['Timeline scale', '时间线刻度'],
    ['Timeline companies', '时间线公司'],
    ['Sources by company', '按公司查看来源'],
    ['Interval', '间隔'],
    ['Vercel view', 'Vercel 视图'],
    ['Vercel weight classes', 'Vercel 权重类别'],
    ['Local models are conversion-only copies of tracked models in GGUF, MLX, AWQ, GPTQ, ONNX, ModelOpt (NVFP4) and similar formats.', '本地模型是追踪模型的格式转换副本，格式包括 GGUF、MLX、AWQ、GPTQ、ONNX、ModelOpt（NVFP4）等。'],
    ['Downloads are credited to the original model maker’s region; fine-tuned, pruned and merged descendants are excluded.', '下载量归入原始模型开发者所在地区；排除微调、剪枝和合并后的衍生模型。'],
    ['Monthly share · posts + comments', '月度占比 · 帖子 + 评论'],
    ['Share of mentions', '提及占比'],
    ['Uses soft string regex.', '使用宽松字符串正则表达式。'],
    ['Each post/comment counts once per mentioned organization;', '每条帖子或评论中每个被提及的组织计数一次；'],
    ['regions sum those counts.', '各地区的计数由此汇总。'],
    ['Y-axis share is of total mentions across all tracked organizations, not just the selected organizations.', '纵轴占比基于所有被追踪组织的总提及数，而不只是当前选中的组织。'],
    ['Shaded bars mark partial months.', '阴影柱表示部分月份。'],
    ['Capability index', '能力指数'],
    ['Frontier date range', '前沿模型日期范围'],
    ['Frontier groups', '前沿模型分组'],
    ['Model details', '模型详情'],
    ['Artificial Analysis · AAII v5.0.1', 'Artificial Analysis · AAII v5.0.1'],
    ['· higher is better', '· 数值越高越好'],
    ['AA’s displayed whole-number scores.', 'AA 显示的整数分数。'],
    ['Each release appears once at its highest evaluated open-weight reasoning setting.', '每个版本只在其评测过的最高开放权重推理设置下出现一次。'],
    ['Includes superseded releases.', '包含已被替代的版本。'],
    ['Share of weekly observed', '每周观测'],
    ['token volume among open-weight models on OpenCode', 'OpenCode 开放权重模型的 Token 用量'],
    ['Archived data has partial model coverage.', '归档数据的模型覆盖不完整。'],
    ['Go-only before Jul 21, 2026; Go + Free thereafter.', '2026 年 7 月 21 日之前仅包含 Go；此后包含 Go + Free。'],
    ['Only confirmed open-weight models are included; closed models are excluded.', '仅包含已确认的开放权重模型；排除闭源模型。'],
    ['Regions describe where model developers are based, not where OpenCode users are located.', '地区表示模型开发者所在位置，而不是 OpenCode 用户所在位置。'],
    ['Organizations combine all of their included models.', '组织统计合并其包含的全部模型。'],
    ['Counts include input, output, cache-read, and cache-write tokens.', '计数包含输入、输出、缓存读取和缓存写入 Token。'],
    ['Only completed UTC days are included.', '仅包含已完成的 UTC 日期。'],
    ['Weekly mean of daily open-weight and closed-weight token shares across all AI Gateway models.', '所有 AI Gateway 模型每日开放权重与闭源权重 Token 占比的周均值。'],
    ['Weekly bars average observed daily token shares for Monday–Sunday UTC.', '每周柱状图取 UTC 周一至周日每日 Token 占比的平均值。'],
    ['Absolute token counts are unavailable, so the mean cannot be weighted by token volume.', '由于没有绝对 Token 数，均值无法按 Token 用量加权。'],
    ['Missing days are excluded from the mean; weeks with no observations remain gaps.', '缺失日期不计入均值；没有观测值的周保持为空缺。'],
    ['Vercel supplies the open/closed classification across all models.', 'Vercel 提供所有模型的开放 / 闭源分类。'],
    ['Adoption of open-weight language models', '开放权重语言模型的采用情况'],
    ['More resources', '更多资源'],
  ];

  const fragmentMap = new Map(fragments);
  // 精确词只在整个文本节点匹配时替换，避免把 “Core LLMs” 误拆成 “核心模型 LLMs”。
  const allTerms = [...fragmentMap.keys()].sort((a, b) => b.length - a.length);

  function translate(value) {
    if (!value || !/[A-Za-z]/.test(value)) return value;
    const trimmed = value.trim();
    const translated = exact.get(trimmed);
    if (translated) return value.replace(trimmed, translated);
    let result = value;
    for (const term of allTerms) {
      if (result.includes(term)) result = result.split(term).join(exact.get(term) || fragmentMap.get(term));
    }
    return result;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    for (const attr of ['aria-label', 'title', 'placeholder', 'alt']) {
      if (node.hasAttribute(attr)) {
        const old = node.getAttribute(attr);
        const next = translate(old);
        if (next !== old) node.setAttribute(attr, next);
      }
    }
    // React 图表包含 SVG 文本，遍历 textContent 会误改模型名，因此只处理叶子文本节点。
    for (const child of node.childNodes) translateNode(child);
  }

  function translatePage() {
    if (!document.documentElement) return;
    document.documentElement.lang = 'zh-CN';
    document.title = 'Interconnects 开放模型仪表盘';
    translateNode(document.documentElement);
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') translateNode(mutation.target);
      for (const node of mutation.addedNodes) translateNode(node);
    }
  });

  function start() {
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true });
    translatePage();
    // React 首屏和异步数据会分批挂载；额外执行几轮可以覆盖初始化期间的文本。
    [50, 200, 600, 1500, 3000].forEach((delay) => setTimeout(translatePage, delay));
  }

  if (document.documentElement) start();
  else document.addEventListener('DOMContentLoaded', start, { once: true });
})();
