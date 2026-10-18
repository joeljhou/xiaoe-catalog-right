// ==UserScript==
// @name         小鹅通课程目录搬到视频右侧
// @namespace    https://github.com/joeljhou/xiaoe-catalog-right
// @version      1.13.2
// @description  小鹅通视频旁内嵌彩色课程目录，可选左侧或右侧并记忆，支持全屏搜索、左右调宽、同侧收起标签，并记忆清晰度与倍速
// @homepageURL  https://github.com/joeljhou/xiaoe-catalog-right
// @supportURL   https://github.com/joeljhou/xiaoe-catalog-right/issues
// @author       joeljhou
// @license      MIT
// @icon         data:image/png;base64,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
// @match        https://*.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 1. 可调参数：默认宽度、尺寸上下限和无锚点时的贴顶偏移
  const CONF = { dockWidth: 360, gap: 16, minWidth: 260, maxWidth: 640, maxHeight: 800,
    viewportTop: 72 };

  // 2. 关键选择器（取自小鹅通 pc_course_detail 前端源码，稳定）
  const SEL = {
    player: '.course-player-box',                        // 播放器外层容器
    video: 'video',                                      // 真实视频元素
    videoRoot: '.video-player'                           // 播放器根节点（用于收缩宽度）
  };
  let dock = null, dockBody = null, dockFixed = false, syncTimer = 0, followTimer = 0;
  let followedHref = '';
  // 运行状态：是否已接管、折叠状态（仅当前页面有效，默认展开）、目录原位
  let active = false, dockCollapsed = false, started = false, guardLogged = false;
  let catOriginParent = null, catOriginNext = null;
  // 全屏时接管视频元素尺寸的属性列表（逐属性记住原内联值，退出全屏时原样恢复）
  const FS_PROPS = ['position', 'left', 'top', 'width', 'height', 'transform', 'object-fit', 'max-width', 'max-height'];
  let fsVideoEl = null, fsVideoOld = null;
  let fullPlayer = null, fullPlayerOld = null, fullBackdrop = null;
  let fullSession = '', nativeFullOwned = false, episodeTransitionUntil = 0;
  let fullHref = '', fullVideo = null;
  let webFullRoot = null, webFullAdded = false;
  // 面板自定义宽度（0 = 自动宽度）与拖拽状态，仅当前页面有效
  let customDockW = 0, resizeState = null;
  let embeddedHost = null, embeddedOld = null, embeddedVideoHeight = 550;
  let embeddedFallback = null;
  let catalogEntry = null, collapsedScroll = [];
  const WEB_FULL_SEL = '.xgplayer-is-css-fullscreen,.xgplayer-is-cssfullscreen,.xgplayer-is-fullscreen';
  const searchValues = new WeakMap();
  let searchTimer = 0;
  const pick = (sel) => document.querySelector(sel);
  const log = (msg) => console.log('[目录右移] ' + msg);
  // 目录节点候选（按优先级）：课程页 course_content_catalog、训练营/会员/专栏/大专栏、商品页 goods-catalog、最后兜底
  const CAT_SEL = ['.course_content_catalog', '.camp_pro_content_catalog', '.camp_catalog', '.member_catalog',
    '.column_catalog', '.big_column_catalog', '.content_switch_tab .catalog_box', '.goods-catalog .catalog_box', '.catalog_box'];
  const catNode = () => CAT_SEL.map((sel) => pick(sel)).find(Boolean) || null;
  // 页面类型与关键选择器命中情况，便于在不同课程页类型上排查
  const pageType = () => (pick('#tab-catalog') ? 'goods/camp_pro' : (location.pathname.indexOf('/camp_pro/') > -1 ? 'camp_pro' : 'video'));
  const diag = () => ' | 命中：player=' + !!pick(SEL.player) + ' video=' + !!pick(SEL.video)
    + ' videoRoot=' + !!pick(SEL.videoRoot) + ' catalog=' + !!catNode() + ' tab=' + !!pick('.content_switch_tab')
    + ' tabCatalog=' + !!pick('#tab-catalog') + ' loopNav=' + !!pick('.loop_nav');
  // 是否处于「课时学习界面」：只有这里才接管目录，其余页面（课程详情/商品详情等）保持原样展示
  const isLessonPage = () => !!pick(SEL.player) || !!pick(SEL.videoRoot) || !!pick(SEL.video)   // 1) 有视频播放器：视频课时
    || !!pick('.loop_nav')                                                                       // 2) 有上一章/下一章：图文、音频、文档课时
    || !!pick('#tab-catalog');                                                                  // 3) 训练营/商品页：目录 Tab 即学习入口
  // 收纳 localStorage，隐私模式等场景下读写可能抛错
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* 忽略 */ } }
  };
  const SIDE_KEY = 'xe_pref_catalog_side';
  let catalogSide = store.get(SIDE_KEY) === 'left' ? 'left' : 'right';
  const collapsed = () => dockCollapsed;                                        // 折叠状态只记在当前页面内，刷新后默认展开
  const panelW = () => Math.min(customDockW || CONF.dockWidth, maxPanelWidth());
  const maxPanelWidth = () => Math.max(1, Math.min(CONF.maxWidth, window.innerWidth - 16,
    fullSession ? Math.max(120, Math.min(window.innerWidth * .7, window.innerWidth - 260)) : Infinity));
  // 全屏侧栏以视口为高度上限；网页内继续使用配置上限。
  const maxPanelHeight = () => fullSession ? window.innerHeight
    : (embeddedHost || embeddedFallback) ? CONF.maxHeight
    : Math.max(1, Math.min(CONF.maxHeight, window.innerHeight - 16));
  const clamp = (n, low, high) => Math.max(low, Math.min(n, high));
  const rectInViewport = (r) => {
    const w = Math.min(r.w, maxPanelWidth(), window.innerWidth);
    const h = Math.min(r.h, maxPanelHeight(), window.innerHeight);
    return { left: clamp(r.left, 0, window.innerWidth - w), top: clamp(r.top, 0, window.innerHeight - h), w, h };
  };
  function setDockRect(r) {
    leaveEmbedded();
    if (dock.parentElement !== (document.fullscreenElement || document.body)) (document.fullscreenElement || document.body).appendChild(dock);
    dock.style.cssText = `position:fixed;z-index:9999;display:flex;left:${Math.round(r.left)}px;top:${Math.round(r.top)}px;width:${Math.round(r.w)}px;height:${Math.round(r.h)}px;`;
    dockFixed = true;
    dock.querySelectorAll('.xe-cat-resizer').forEach((el) => {
      el.setAttribute('aria-valuenow', Math.round(r.w));
      el.setAttribute('aria-valuemin', Math.min(CONF.minWidth, maxPanelWidth()));
      el.setAttribute('aria-valuemax', Math.round(maxPanelWidth()));
    });
  }

  // 章节颜色沿用首次出现的顺序；搜索、排序和 Vue 重建后，同一章节保留底色。
  const chapterPalette = ['#f8ead0', '#ccf7eb', '#d0defa', '#e8cef5', '#f7cedf', '#cdf2f8',
    '#f8dacf', '#cff7ce', '#d6cff8', '#f7cef1', '#f1facb', '#cdf7f2'];
  const chapterColors = new Map();
  function colorChapterHeaders() {
    if (!dockBody) return;
    dockBody.querySelectorAll('.el-collapse-item__header').forEach((header) => {
      const title = header.querySelector('.chapter_title,.catalog_title,.title_slot');
      const key = (title || header).textContent.replace(/[（(]\s*\d+\s*小节\s*[）)]/g, '').replace(/\s+/g, ' ').trim();
      if (!key) return;
      if (!chapterColors.has(key)) chapterColors.set(key, chapterPalette[chapterColors.size % chapterPalette.length]);
      const color = chapterColors.get(key);
      [header, header.closest('.el-collapse-item')].filter(Boolean).forEach((target) => {
        if (target.style.getPropertyValue('--xe-chapter-color') !== color) target.style.setProperty('--xe-chapter-color', color);
      });
    });
  }

  // 3. 注入面板样式
  function injectStyle() {
    if (document.getElementById('xe-cat-style')) return;
    const css = `
      #xe-cat-dock{box-sizing:border-box;display:flex;flex-direction:column;background:#fff;border-radius:8px;overflow:hidden;}
      #xe-cat-dock{box-shadow:0 2px 12px rgba(0,0,0,.14);}
      .xe-cat-embedded-player{display:grid!important;grid-template-columns:minmax(0,1fr) var(--xe-catalog-width)!important;gap:16px!important;align-items:start!important;height:auto!important;background:transparent!important;}
      .xe-cat-embedded-player>*:not(#xe-cat-dock){grid-column:1;min-width:0!important;width:100%!important;}
      .xe-cat-embedded-player>.video-player{height:var(--xe-video-height)!important;}
      .xe-cat-embedded-player .video-player{width:100%!important;min-width:0!important;max-width:none!important;margin:0!important;}
      .xe-cat-embedded-player .xgplayer:not(.xgplayer-is-css-fullscreen):not(.xgplayer-is-cssfullscreen):not(.xgplayer-is-fullscreen){width:100%!important;}
      .xe-cat-embedded-player>#xe-cat-dock{grid-column:2;grid-row:1 / span var(--xe-catalog-rows,1);position:relative!important;inset:auto!important;width:100%!important;min-width:0;min-height:0;contain:size;max-height:800px;z-index:auto!important;border:1px solid #e5e7eb;border-radius:6px;box-shadow:none;}
      .xe-cat-embedded-player.xe-cat-left{grid-template-columns:var(--xe-catalog-width) minmax(0,1fr)!important;}
      .xe-cat-embedded-player.xe-cat-left>*:not(#xe-cat-dock){grid-column:2;}
      .xe-cat-embedded-player.xe-cat-left>#xe-cat-dock{grid-column:1;}
      .xe-cat-embedded-player.xe-cat-stacked{grid-template-columns:minmax(0,1fr)!important;}
      .xe-cat-embedded-player.xe-cat-stacked>*:not(#xe-cat-dock){grid-column:1;}
      .xe-cat-embedded-player.xe-cat-stacked>#xe-cat-dock{grid-column:1;grid-row:auto;height:var(--xe-catalog-stack-height,550px)!important;}
      #xe-cat-inline-slot{width:min(100%,640px);margin:16px 0 16px auto;}
      #xe-cat-inline-slot>#xe-cat-dock{position:relative!important;inset:auto!important;width:100%!important;z-index:auto!important;box-shadow:none;border:1px solid #e5e7eb;}
      #xe-cat-head{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 12px;}
      #xe-cat-head{height:40px;border-bottom:1px solid #eee;font-size:14px;color:#333;cursor:default;user-select:none;}
      .xe-cat-tools{display:flex;align-items:center;gap:8px;}
      #xe-cat-side{display:inline-flex;flex:none;gap:2px;padding:2px;border:1px solid #e5e7eb;border-radius:6px;background:#f3f4f6;}
      #xe-cat-side button{appearance:none;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;width:28px;height:26px;margin:0;padding:0;border:0;border-radius:4px;background:transparent;color:#4b5563;cursor:pointer;}
      #xe-cat-side button:hover{background:#e5e7eb;}
      #xe-cat-side button[aria-pressed=true]{background:#fff;color:#2563eb;box-shadow:0 1px 3px #0002;}
      #xe-cat-side button:focus-visible{outline:2px solid #2563eb;outline-offset:1px;}
      #xe-cat-head button svg{display:block;width:18px;height:18px;pointer-events:none;}
      #xe-cat-toggle{appearance:none;display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;width:28px;height:28px;margin:0;padding:0;border:0;border-radius:4px;background:transparent;cursor:pointer;color:#4b5563;}
      #xe-cat-toggle:hover{background:#f3f4f6;color:#2563eb;}
      #xe-cat-toggle:focus-visible{outline:2px solid #2563eb;outline-offset:1px;}
      #xe-cat-dock[data-side=left] #xe-cat-head{position:relative;padding-left:48px;}
      #xe-cat-dock[data-side=left] #xe-cat-toggle{position:absolute;left:8px;top:6px;}
      #xe-cat-dock[data-side=left] #xe-cat-toggle svg{transform:scaleX(-1);}
      #xe-cat-body{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;}
      #xe-cat-body{padding-bottom:24px;scroll-padding-block:24px;box-sizing:border-box;overscroll-behavior:contain;}
      #xe-cat-body>*{width:100% !important;max-width:none !important;box-sizing:border-box !important;}
      #xe-cat-body .course_content_catalog,
      #xe-cat-body .camp_pro_content_catalog,
      #xe-cat-body .camp_catalog,
      #xe-cat-body .member_catalog,
      #xe-cat-body .column_catalog,
      #xe-cat-body .big_column_catalog{width:100% !important;height:auto !important;max-width:none !important;max-height:none !important;padding:0 !important;box-sizing:border-box !important;}
      #xe-cat-body .catalog_search_bar{display:flex !important;align-items:center !important;width:100% !important;box-sizing:border-box !important;}
      #xe-cat-body .catalog_search_bar{height:52px !important;padding:10px 12px !important;}
      #xe-cat-body .catalog_search_bar{position:sticky !important;top:0 !important;z-index:3;background:#fff !important;}
      #xe-cat-body .catalog_search_bar .search_title{display:none !important;}
      #xe-cat-body .catalog_search_bar .search_bar_right{display:flex !important;align-items:center !important;width:100% !important;}
      #xe-cat-body .catalog_search_bar .search_bar_right{min-width:0 !important;}
      #xe-cat-body .catalog_search_bar .search_box{flex:1 1 auto !important;width:auto !important;min-width:0 !important;}
      #xe-cat-body .catalog_search_bar .search_box{height:32px !important;margin-right:8px !important;}
      #xe-cat-body .catalog_search_bar .inline-input,#xe-cat-body .catalog_search_bar .el-input{width:100% !important;}
      #xe-cat-body .catalog_search_bar .el-input__inner{height:32px !important;font-size:13px !important;}
      #xe-cat-body .catalog_search_bar .el-input__inner{padding-left:12px !important;padding-right:34px !important;}
      #xe-cat-body .catalog_search_bar .sort_box{display:inline-flex !important;align-items:center !important;flex:0 0 auto !important;gap:4px;}
      #xe-cat-body .catalog_search_bar .sort_box{min-width:48px;white-space:nowrap !important;line-height:32px !important;font-size:14px !important;}
      #xe-cat-body .catalog_search_bar .sort_box{visibility:visible !important;opacity:1 !important;position:static !important;}
      #xe-cat-body .catalog_search_bar .sort_text{font-size:14px !important;white-space:nowrap !important;}
      #xe-cat-body .catalog_search_bar .down_icon{position:static !important;flex:0 0 16px;margin:0 !important;}
      #xe-cat-body .catalog_box{width:100% !important;height:auto !important;max-width:none !important;max-height:none !important;overflow:visible !important;}
      #xe-cat-body .catalog_box{padding:0 12px 16px !important;box-sizing:border-box !important;}
      #xe-cat-body #catalog_box,#xe-cat-body #infinite_list_location{height:auto !important;max-height:none !important;overflow:visible !important;}
      #xe-cat-body .camp_pro_content_catalog .catalog_box{padding:0 !important;}
      /* 统一章节间距，避免原站容器 padding 与标题 margin 叠加。 */
      #xe-cat-body .chapter_item_box{padding:6px 0 !important;}
      #xe-cat-body .catalog_list_collapse{border:0 !important;}
      #xe-cat-body .el-collapse-item{margin:0 !important;}
      #xe-cat-body .el-collapse-item__header{min-height:46px !important;height:auto !important;width:auto !important;box-sizing:border-box !important;padding:10px 12px !important;margin:0 12px !important;border:0 !important;border-radius:10px !important;background:var(--xe-chapter-color,#f8ead0) !important;color:#333 !important;line-height:21px !important;}
      #xe-cat-body .el-collapse-item__header:hover{filter:brightness(.98);}
      #xe-cat-body .el-collapse-item__header:focus-visible{outline:2px solid #4f6fa5 !important;outline-offset:2px;}
      #xe-cat-body .chapter_title_wrapper{display:flex !important;align-items:center !important;gap:8px;flex:1;min-width:0;}
      #xe-cat-body .el-collapse-item__header .chapter_title,#xe-cat-body .el-collapse-item__header .catalog_title,#xe-cat-body .el-collapse-item__header .title_slot{min-width:0;font-weight:600 !important;color:#333 !important;background:transparent !important;white-space:normal !important;overflow-wrap:anywhere;}
      #xe-cat-body .el-collapse-item__header .chapter_selection_num{font-weight:400 !important;color:#737b85 !important;background:transparent !important;white-space:nowrap;}
      #xe-cat-body .el-collapse-item__header .chapter-status{flex-shrink:0;font-size:11px !important;line-height:18px !important;color:#626a73 !important;background:transparent !important;border:1px solid #9299a580 !important;border-radius:3px;padding:0 4px;white-space:nowrap;}
      #xe-cat-body .el-collapse-item__arrow{flex-shrink:0;color:#626a73 !important;margin-left:8px !important;}
      #xe-cat-body .catalog_title,#xe-cat-body .title_slot,#xe-cat-body .chapter_title{font-size:14px !important;line-height:21px !important;}
      /* 展开课时使用章节同色的淡底与细分隔线，保留当前学习的蓝色高亮。 */
      #xe-cat-body .el-collapse-item__wrap{margin-top:8px !important;border-bottom:0 !important;background:transparent !important;}
      #xe-cat-body .el-collapse-item__content{padding-bottom:0 !important;}
      #xe-cat-body .infinite_list_chapter_children{margin:0 !important;}
      #xe-cat-body .el-collapse-item .section_item_box,#xe-cat-body .catalog_list.sectionBox .section_item_box{position:relative;margin:0 12px !important;width:calc(100% - 24px) !important;border:0 !important;border-radius:8px !important;}
      #xe-cat-body .el-collapse-item .section_item_box:not(.last_study_bg){background:#faf8f4 !important;background:color-mix(in srgb,var(--xe-chapter-color,#f8ead0) 22%,white) !important;}
      #xe-cat-body .el-collapse-item .section_item_box::after{content:"";position:absolute;left:12px;right:12px;bottom:0;height:1px;background:color-mix(in srgb,var(--xe-chapter-color,#f8ead0) 65%,#cbd5e1);pointer-events:none;}
      #xe-cat-body .catalog_list.sectionBox{border:0 !important;}
      #xe-cat-body .catalog_list.sectionBox .section_item_box::after{content:"";position:absolute;left:12px;right:12px;bottom:0;height:1px;background:#e5e7eb;pointer-events:none;}
      /* 课时条目：真实类名取自 CourseContentCatalog 源码（注意 setions/secitons 是原站拼写） */
      #xe-cat-body .section_item_box{padding:10px 12px !important;height:auto !important;min-height:70px !important;box-sizing:border-box !important;flex-shrink:0 !important;overflow:visible !important;}
      #xe-cat-body .cata_box_right{flex:1 1 auto !important;min-width:0 !important;}
      #xe-cat-body .sections_title_info{margin:0 0 4px !important;}
      #xe-cat-body .sections_title_info,#xe-cat-body .secitons_type,#xe-cat-body .cata_box_right{height:auto !important;max-height:none !important;overflow:visible !important;}
      #xe-cat-body .sections_title,#xe-cat-body .setions_text{font-size:14px !important;line-height:21px !important;}
      #xe-cat-body .secitons_type{padding:0 !important;margin:0 !important;}
      #xe-cat-body .secitons_type_left{display:flex !important;flex-wrap:wrap !important;align-items:center !important;gap:6px !important;}
      #xe-cat-body .secitons_type .textNode{font-size:12px !important;line-height:18px !important;color:#999 !important;}
      #xe-cat-body .secitons_type .textNode.title{color:#666 !important;}
      #xe-cat-body .last_study{height:18px !important;box-sizing:border-box !important;font-size:11px !important;line-height:18px !important;padding:0 6px !important;border-radius:8px !important;}
      #xe-cat-body .last_study{white-space:nowrap !important;}
      .xe-sort-popover-layer{z-index:10050 !important;pointer-events:auto !important;}
      body .selector-wrapper{gap:12px !important;font-size:14px !important;}
      body .selector-wrapper .select-item{min-height:24px;align-items:center;cursor:pointer;}
      #xe-cat-dock.xe-collapsed{display:none!important;}
      #xe-cat-full-backdrop{position:fixed;inset:0;background:#000;z-index:9997;}
      #xe-cat-entry{box-sizing:border-box!important;z-index:10001!important;display:inline-flex!important;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:36px;min-height:112px;margin:0!important;padding:10px 6px!important;border:1px solid #ffffff50!important;border-radius:0 8px 8px 0;background:#2563eb!important;color:#fff!important;font:13px/18px sans-serif!important;box-shadow:0 2px 8px #0002;cursor:pointer;transition:background .15s ease;}
      #xe-cat-entry[data-side=right]{border-radius:8px 0 0 8px;}
      #xe-cat-entry:hover{background:#1d4ed8!important;}
      #xe-cat-entry:focus-visible{outline:2px solid #93c5fd;outline-offset:2px;}
      #xe-cat-entry svg{width:18px;height:18px;flex:none;}
      #xe-cat-entry span{writing-mode:vertical-rl;letter-spacing:2px;white-space:nowrap;}
      @media(prefers-reduced-motion:reduce){#xe-cat-entry{transition:none;}}
      .xe-cat-full-player{box-sizing:border-box !important;margin:0 !important;padding:0 !important;min-width:0 !important;min-height:0 !important;right:auto !important;bottom:auto !important;z-index:9998 !important;background:#000 !important;}
      /* 真实课程页在播放器外还有固定 688px 高的包装层。一起铺满，避免视频只占全屏上半部。 */
      .xe-cat-full-player .video-content-header{position:relative !important;width:100% !important;height:100% !important;max-width:none !important;padding:0 !important;margin:0 !important;background:#000 !important;}
      .xe-cat-full-player .video-title{display:none !important;}
      .xe-cat-full-player .video-player,.xe-cat-full-player .xgplayer{position:relative !important;inset:auto !important;width:100% !important;height:100% !important;max-width:none !important;max-height:none !important;margin:0 !important;}
      #xe-cat-dock.xe-full-dock #xe-cat-head{cursor:default;}
      #xe-cat-dock.xe-full-dock{border-radius:0;box-shadow:none;}
      /* 原站当前使用 ss-input；宽度必须一路传到真实 input。 */
      #xe-cat-body .catalog_search_bar .ss-input{width:100% !important;min-width:0 !important;}
      #xe-cat-body .catalog_search_bar input{box-sizing:border-box !important;width:100% !important;min-width:0 !important;max-width:100% !important;height:32px !important;padding:0 32px 0 10px !important;font-size:13px !important;}
      #xe-cat-body .catalog_search_bar .search_box{position:relative !important;}
      #xe-cat-body .catalog_search_bar .el-input__icon{position:absolute !important;right:10px !important;top:8px !important;width:16px !important;height:16px !important;cursor:pointer;}
      #xe-cat-head{touch-action:none;}
      .xe-cat-resizer{position:absolute;z-index:5;touch-action:none;}
      .xe-cat-resizer:hover,.xe-cat-resizer:focus-visible{background:rgba(59,130,246,.3);outline:none;}
      .xe-cat-resizer[data-edge=w]{left:0;top:12px;bottom:12px;width:7px;cursor:ew-resize;}
      .xe-cat-resizer[data-edge=e]{right:0;top:12px;bottom:12px;width:7px;cursor:ew-resize;}
    `;
    const style = document.createElement('style');
    style.id = 'xe-cat-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // 4. 创建目录面板（幂等）
  function ensureDock() {
    injectStyle();
    if (dock && !dock.isConnected && (embeddedHost || embeddedFallback)) {
      document.body.appendChild(dock); leaveEmbedded();
    }
    if (dock && dock.isConnected) return dock;
    dock = document.createElement('div');
    dock.id = 'xe-cat-dock';
    dock.innerHTML = '<div id="xe-cat-head"><span class="xe-cat-title">课程目录</span>'
      + '<span class="xe-cat-tools"><span id="xe-cat-side" role="group" aria-label="课程目录位置">'
      + '<button type="button" data-side="left" aria-label="目录显示在视频左侧" title="目录显示在视频左侧">'
      + '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="2"/><path d="M7.5 4v12"/><path d="M4 5h2v10H4z" fill="currentColor" stroke="none"/></svg></button>'
      + '<button type="button" data-side="right" aria-label="目录显示在视频右侧" title="目录显示在视频右侧">'
      + '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="2"/><path d="M12.5 4v12"/><path d="M14 5h2v10h-2z" fill="currentColor" stroke="none"/></svg></button>'
      + '</span><button id="xe-cat-toggle" type="button" aria-label="收起课程目录" title="收起课程目录">'
      + '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4v12M3 10h9M8 6l4 4-4 4"/></svg>'
      + '</button></span></div><div id="xe-cat-body"></div>';
    const edges = { w: '左', e: '右' };
    Object.entries(edges).forEach(([edge, name]) => {
      const el = document.createElement('div');
      el.className = 'xe-cat-resizer'; el.dataset.edge = edge;
      if (edge === 'w') el.id = 'xe-cat-resizer';
      el.setAttribute('role', 'separator'); el.tabIndex = 0;
      el.setAttribute('aria-label', '调整课程目录' + name + '边缘');
      el.setAttribute('aria-orientation', 'vertical');
      el.title = '拖拽调整宽度，双击恢复默认';
      dock.appendChild(el); bindResizer(el);
    });
    document.body.appendChild(dock);
    dockBody = dock.querySelector('#xe-cat-body');
    dock.querySelectorAll('#xe-cat-side button').forEach(button => {
      button.addEventListener('click', () => setCatalogSide(button.dataset.side));
      ['keydown', 'keyup', 'keypress'].forEach(type => button.addEventListener(type, event => {
        if (event.key !== 'Escape') event.stopPropagation();
      }));
    });
    updateSideControls();
    dock.querySelector('#xe-cat-toggle').addEventListener('click', toggleDock);
    ['keydown', 'keyup', 'keypress'].forEach(type => dock.querySelector('#xe-cat-toggle').addEventListener(type, event => {
      if (event.key !== 'Escape') event.stopPropagation();
    }));
    bindCatalogSearch();
    log('已创建目录面板');
    return dock;
  }

  function updateSideControls() {
    if (dock) dock.dataset.side = catalogSide;
    dock?.querySelectorAll('#xe-cat-side button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.side === catalogSide));
    });
  }

  function setCatalogSide(side) {
    if (!['left', 'right'].includes(side) || side === catalogSide) return;
    catalogSide = side;
    store.set(SIDE_KEY, side);
    resizeState = null;
    updateSideControls();
    layout();
    liftSortPopover();
  }

  // 搜索沿用原站接口：补齐 change 触发，不截断成仅搜索已加载的目录。
  function bindCatalogSearch() {
    const searchInput = (target) => target?.tagName === 'INPUT' && target.closest('.catalog_search_bar');
    const submit = (input) => {
      clearTimeout(searchTimer);
      if (!input || !input.isConnected || input.composing || searchValues.get(input) === input.value) return;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      dockBody.scrollTop = 0;
    };
    dockBody.addEventListener('change', (e) => {
      if (searchInput(e.target)) searchValues.set(e.target, e.target.value);
    }, true);
    dockBody.addEventListener('input', (e) => {
      if (!searchInput(e.target) || e.isComposing || e.target.composing) return;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => submit(e.target), 450);
    });
    dockBody.addEventListener('compositionend', (e) => {
      if (!searchInput(e.target)) return;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => submit(e.target), 450);
    });
    dockBody.addEventListener('click', (e) => {
      if (e.target.closest('.search_box .el-input__icon')) submit(e.target.closest('.search_box').querySelector('input'));
    });
    // 保留输入框自身的事件处理，但不把按键冒泡给播放器快捷键。
    ['keydown', 'keyup', 'keypress'].forEach((type) => dockBody.addEventListener(type, (e) => {
      if (!searchInput(e.target)) return;
      if (type === 'keydown' && e.key === 'Enter' && !e.isComposing && !e.target.composing) {
        e.preventDefault(); submit(e.target);
      }
      if (e.key !== 'Escape') e.stopPropagation();
    }));
  }

  function resizeOrigin() {
    const r = dock.getBoundingClientRect();
    return { left: r.left, top: r.top, w: r.width, h: r.height };
  }

  // 只允许左右调宽；高度由所在布局自动决定。
  function resizeDock(edge, dx, r) {
    if (edge !== 'w' && edge !== 'e') return;
    const available = embeddedHost && !embeddedHost.classList.contains('xe-cat-stacked')
      ? Math.max(1, embeddedHost.clientWidth - CONF.gap - 320) : maxPanelWidth();
    const w = clamp(r.w + (edge === 'w' ? -dx : dx),
      Math.min(CONF.minWidth, available, maxPanelWidth()), Math.min(maxPanelWidth(), available));
    customDockW = w;
    layout();
  }

  function bindResizer(resizer) {
    resizer.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || collapsed()) return;
      resizeState = { ...resizeOrigin(), x: e.clientX, y: e.clientY, edge: resizer.dataset.edge };
      resizer.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    resizer.addEventListener('keydown', (e) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      resizeDock(resizer.dataset.edge, e.key === 'ArrowLeft' ? -20 : 20, resizeOrigin());
      e.preventDefault();
      e.stopPropagation();
    });
    resizer.addEventListener('dblclick', () => {
      customDockW = 0; layout();
    });
  }

  function bindResizeMove() {
    document.addEventListener('pointermove', (e) => {
      if (dock && resizeState) resizeDock(resizeState.edge, e.clientX - resizeState.x, resizeState);
    });
    const endResize = () => { resizeState = null; };
    document.addEventListener('pointerup', endResize);
    document.addEventListener('pointercancel', endResize);
    window.addEventListener('blur', endResize);
  }

  function toggleDock() {
    const keepFocus = dock?.contains(document.activeElement) || document.activeElement === catalogEntry;
    if (!collapsed()) collapsedScroll = [dockBody, ...dockBody.querySelectorAll('*')]
      .filter(el => el.scrollTop || el.scrollLeft).map(el => [el, el.scrollTop, el.scrollLeft]);
    dockCollapsed = !dockCollapsed;
    resizeState = null;
    applyCollapsed();
    layout();
    if (!collapsed()) {
      collapsedScroll.forEach(([el, top, left]) => { if (dockBody.contains(el) || el === dockBody) { el.scrollTop = top; el.scrollLeft = left; } });
      collapsedScroll = [];
    }
    if (keepFocus) (collapsed() ? catalogEntry : dock.querySelector('#xe-cat-toggle'))?.focus({ preventScroll: true });
    sync(true);
  }

  function applyCollapsed() {
    if (!dock) return;
    dock.classList.toggle('xe-collapsed', dockCollapsed);
  }

  // 6. 把目录节点搬进面板（同一时刻只保留一个目录节点，并记录原位以便搬回）
  function relocateCatalog() {
    const cat = catNode();
    if (!cat || !dockBody) return false;
    if (cat.parentElement !== dockBody) {
      if (!catOriginParent || !document.contains(catOriginParent)) { catOriginParent = cat.parentElement; catOriginNext = cat.nextSibling; }
      [...dockBody.children].forEach((c) => c !== cat && c.remove());   // 清理切换视频后残留的旧目录
      dockBody.appendChild(cat);
      log('目录已搬入面板');
    }
    return true;
  }

  // 6.1 退出接管：把目录搬回原位并移除面板，页面恢复原样
  function deactivate() {
    if (!active) return;
    active = false;
    leaveEmbedded();
    episodeTransitionUntil = 0;
    leaveFullLayout();
    const cat = catNode();
    if (cat && dockBody && cat.parentElement === dockBody && catOriginParent && document.contains(catOriginParent)) {
      catOriginParent.insertBefore(cat, catOriginNext?.parentElement === catOriginParent ? catOriginNext : null);
      log('已把目录放回原位置');
    }
    if (dock) dock.remove();
    dock = null; dockBody = null; dockFixed = false; collapsedScroll = [];
    catOriginParent = null; catOriginNext = null;
    log('已退出目录接管，恢复原页面布局');
  }

  // 7. 自动展开并定位到当前课时。每个 URL 只执行一次，不打扰用户后续手动滚动。
  function currentLessonNode() {
    if (!dockBody) return null;
    const badge = [...dockBody.querySelectorAll('.last_study')]
      .find((el) => el.textContent.trim() === '当前学习');
    return (badge && badge.closest('.section_item_box'))
      || dockBody.querySelector('#section_item_location .section_item_box')
      || dockBody.querySelector('.section_item_box.last_study_bg .scroll_height_light')?.closest('.section_item_box')
      || dockBody.querySelector('.section_item_box.last_study_bg');
  }

  function expandCurrentChapter() {
    if (!dockBody) return false;
    const chapter = dockBody.querySelector('#chapter_item_location');
    const item = chapter && chapter.querySelector('.el-collapse-item');
    if (!item || item.classList.contains('is-active')) return false;
    const header = item.querySelector('.el-collapse-item__header');
    if (!header) return false;
    header.click();
    log('已展开当前课时所在章节');
    return true;
  }

  function centerInScroller(target, scroller) {
    if (!target || !scroller || scroller.scrollHeight <= scroller.clientHeight + 8) return;
    const tr = target.getBoundingClientRect();
    const sr = scroller.getBoundingClientRect();
    scroller.scrollTop += tr.top - sr.top - (scroller.clientHeight - tr.height) / 2;
  }

  function followCurrentLesson(force) {
    const href = location.href;
    if (!force && followedHref === href) return true;
    if (!active || !dockBody || collapsed()) return false;
    if (dockBody.querySelector('.catalog_search_bar input')?.value.trim()) return true;

    // 当前课时位于折叠章节时，先展开；Vue 渲染完子课时后会再次尝试定位。
    if (expandCurrentChapter()) return false;

    const target = currentLessonNode();
    if (!target) return false;
    const scrollers = [
      target.closest('#infinite_list_location'),
      target.closest('#catalog_box'),
      dockBody
    ].filter((el, index, list) => el && list.indexOf(el) === index);
    scrollers.forEach((scroller) => centerInScroller(target, scroller));
    followedHref = href;
    log('已定位到当前课时：' + target.textContent.trim().replace(/\s+/g, ' ').slice(0, 60));
    return true;
  }

  function scheduleFollowCurrent(force, retry = 0) {
    clearTimeout(followTimer);
    followTimer = setTimeout(() => {
      if (!followCurrentLesson(force) && retry < 12) scheduleFollowCurrent(force, retry + 1);
    }, retry ? 360 : 160);
  }

  // 排序浮层移出滚动区域，并随原生全屏切换可见的宿主，定位在排序按钮下方。
  function placeSortPopover(ref, pop) {
    const doc = ref.ownerDocument, view = doc.defaultView;
    const r = ref.getBoundingClientRect();
    const w = pop.offsetWidth || 200;
    const left = Math.max(8, Math.min(r.right - w, view.innerWidth - w - 8));
    const css = '.xe-cat-pop{position:fixed !important;transform:none !important;margin:0 !important;'
      + `z-index:100000 !important;top:${Math.round(r.bottom + 6)}px !important;left:${Math.round(left)}px !important;}`;
    let st = doc.getElementById('xe-cat-pop-style');
    if (!st) { st = doc.createElement('style'); st.id = 'xe-cat-pop-style'; doc.head.appendChild(st); }
    if (st.textContent !== css) st.textContent = css;
  }

  function liftSortPopover() {
    if (!dock) return;
    const ref = dock.querySelector('.sort_box');
    if (!ref) return;
    // 站点也会直接把弹层挂在 body；每次全屏/退出全屏都要重新搬到可见的宿主。
    const host = document.fullscreenElement || document.body;
    const menus = [...document.querySelectorAll('.selector-wrapper')];
    menus.forEach((menu) => {
      const pop = menu.closest('.ss-popover__box') || menu;
      if (pop.parentElement !== host) host.appendChild(pop);
      pop.classList.add('xe-cat-pop', 'xe-sort-popover-layer');
      if (!collapsed()) placeSortPopover(ref, pop);
    });
  }

  // 清理旧版布局残留的播放器宽度设置。
  function restoreVideoWidth(el) {
    if (!el.dataset.xeOldStyle) return;
    const old = JSON.parse(el.dataset.xeOldStyle);
    el.style.marginLeft = old.ml;
    el.style.marginRight = old.mr;
    el.style.maxWidth = old.mw;
    delete el.dataset.xeOldStyle;
  }

  // 8.1 把原生全屏锚定在不会随换集销毁的 documentElement。
  // 浏览器一旦销毁 fullscreenElement 就会退出全屏；事后重进又需要新的用户手势。
  // 因此在播放器请求全屏时直接使用稳定的宿主，而不是换集后尝试补一次 requestFullscreen。
  function installFullscreenBridge() {
    const request = Element.prototype.requestFullscreen;
    if (request) {
      Element.prototype.requestFullscreen = function (options) {
        const player = pick(SEL.player) || pick(SEL.videoRoot);
        if (!active || !player || !(this === player || player.contains(this) || this.contains(player))) {
          return request.call(this, options);
        }
        const wasOwned = nativeFullOwned;
        nativeFullOwned = true;
        return request.call(document.documentElement, options).catch((error) => {
          nativeFullOwned = wasOwned;
          throw error;
        });
      };
    }
    const exit = document.exitFullscreen;
    if (exit) {
      document.exitFullscreen = function () {
        // 下一集/自动连播时播放器的 destroy() 可能主动退出全屏。
        // 只挡住已确认的切集过程，用户点击退出或按 Esc 仍正常退出。
        if (nativeFullOwned && document.fullscreenElement && isEpisodeTransition()) return Promise.resolve();
        return exit.call(document);
      };
    }
    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target;
      const fullControl = target.closest('xg-fullscreen,xg-cssfullscreen,.xgplayer-fullscreen,.xgplayer-cssfullscreen,[data-action="fullscreen"],[data-action="cssfullscreen"]');
      if (fullControl) {
        episodeTransitionUntil = 0;
        if (fullSession && (nativeFullOwned || fullSession === 'web')) {
          // 新播放器可能认为自己尚未全屏；退出按钮由稳定宿主统一处理。
          event.preventDefault();
          event.stopImmediatePropagation();
          if (document.fullscreenElement) exit.call(document).catch((error) => log('退出全屏失败：' + error.message));
          else {
            if (webFullRoot) webFullRoot.classList.remove('xgplayer-is-css-fullscreen', 'xgplayer-is-cssfullscreen', 'xgplayer-is-fullscreen');
            leaveFullLayout(); sync(true);
          }
        } else if (active && request && fullControl.matches('xg-fullscreen,.xgplayer-fullscreen,[data-action="fullscreen"]')) {
          // 部分播放器初始化时缓存了原生方法；直接在这次用户手势中进入稳定宿主。
          event.preventDefault();
          event.stopImmediatePropagation();
          nativeFullOwned = true;
          request.call(document.documentElement).catch((error) => {
            nativeFullOwned = false;
            log('进入全屏失败：' + error.message);
          });
        }
        return;
      }
      const nav = target.closest('.section_item_box,.loop_nav,.xgplayer-next,.xgplayer-nextplay,.xgplayer-playnext,[data-action="next"],button,a');
      if (active && nav && (nav.matches('.section_item_box,.loop_nav,.xgplayer-next,.xgplayer-nextplay,.xgplayer-playnext,[data-action="next"]')
        || /下一[集章节]|上一[集章节]/.test(nav.textContent))) episodeTransitionUntil = Date.now() + 8000;
    }, true);
    document.addEventListener('ended', (event) => {
      if (active && event.target.tagName === 'VIDEO') episodeTransitionUntil = Date.now() + 8000;
    }, true);
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      episodeTransitionUntil = 0;
      if (fullSession === 'web') {
        if (webFullRoot) webFullRoot.classList.remove('xgplayer-is-css-fullscreen', 'xgplayer-is-cssfullscreen', 'xgplayer-is-fullscreen');
        leaveFullLayout(); sync(true);
      }
    }, true);
  }

  function isEpisodeTransition() {
    return Date.now() < episodeTransitionUntil || (fullSession && (location.href !== fullHref || pick(SEL.video) !== fullVideo));
  }

  function isFullMode(player) {
    if (document.fullscreenElement) return true;
    if (fullSession === 'web') {
      if (isEpisodeTransition()) return true;
      if (pick(WEB_FULL_SEL)) return true;
      // 根节点的全屏尺寸是脚本设置的，不能再用它来判定，否则无法退出网页全屏。
      leaveFullLayout();
      return false;
    }
    if (pick(WEB_FULL_SEL)) return true;
    return [player, player.querySelector('.xgplayer'), player.querySelector(SEL.videoRoot)].filter(Boolean).some(el => {
      const r = el.getBoundingClientRect();
      return Math.abs(r.top) <= 12 && Math.abs(r.left) <= 12
        && Math.abs(r.width - window.innerWidth) <= 24 && Math.abs(r.height - window.innerHeight) <= 24;
    });
  }

  // 收起后在播放器同侧保留标签；普通页随文档滚动，全屏贴在同侧屏幕边缘。
  function updateCatalogEntry(player) {
    if (!collapsed()) { removeCatalogEntry(); return; }
    const host = document.fullscreenElement || document.body;
    if (!catalogEntry) {
      catalogEntry = document.createElement('button');
      catalogEntry.id = 'xe-cat-entry'; catalogEntry.type = 'button';
      catalogEntry.innerHTML = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="xe-cat-entry-arrow"/></svg><span>课程目录</span>';
      catalogEntry.setAttribute('aria-controls', 'xe-cat-dock');
      catalogEntry.setAttribute('aria-expanded', 'false');
      catalogEntry.setAttribute('aria-label', '展开课程目录');
      catalogEntry.title = '展开课程目录';
      catalogEntry.addEventListener('click', toggleDock);
      ['keydown', 'keyup', 'keypress'].forEach(type => catalogEntry.addEventListener(type, event => {
        if (event.key !== 'Escape') event.stopPropagation();
      }));
    }
    if (catalogEntry.parentElement !== host) host.appendChild(catalogEntry);
    catalogEntry.dataset.side = catalogSide;
    const arrow = catalogEntry.querySelector('.xe-cat-entry-arrow');
    const path = catalogSide === 'left' ? 'M7 5l5 5-5 5' : 'M13 5l-5 5 5 5';
    if (arrow.getAttribute('d') !== path) arrow.setAttribute('d', path);
    const anchor = player || (catOriginParent?.isConnected ? catOriginParent : pick('.main_content'));
    const r = fullSession ? { left: 0, right: window.innerWidth, top: 0 }
      : anchor?.getBoundingClientRect() || { left: 16, right: window.innerWidth - 16, top: CONF.viewportTop };
    const width = catalogEntry.offsetWidth;
    const left = catalogSide === 'left' ? r.left : r.right - width;
    catalogEntry.style.position = 'fixed';
    catalogEntry.style.left = Math.round(left) + 'px';
    catalogEntry.style.top = Math.round(r.top + 12) + 'px';
  }

  function removeCatalogEntry() { catalogEntry?.remove(); catalogEntry = null; }

  const FULL_PLAYER_PROPS = ['position', 'left', 'top', 'width', 'height', 'max-width', 'max-height', 'transform', 'overflow'];
  const rememberStyle = (el, props) => props.map((p) => [p, el.style.getPropertyValue(p), el.style.getPropertyPriority(p)]);
  const restoreStyle = (el, old) => {
    if (!el || !old) return;
    old.forEach(([p, val, pri]) => { if (val) el.style.setProperty(p, val, pri); else el.style.removeProperty(p); });
  };

  // 8.2 完整播放器（含进度条和控制按钮）与目录分别占位。
  function fitPlayerFullscreen(player, availW, left) {
    if (fullPlayer !== player) {
      restoreStyle(fullPlayer, fullPlayerOld);
      if (fullPlayer) fullPlayer.classList.remove('xe-cat-full-player');
      fullPlayer = player;
      fullPlayerOld = rememberStyle(player, FULL_PLAYER_PROPS);
    }
    player.classList.add('xe-cat-full-player');
    const values = { position: 'fixed', left: left + 'px', top: '0px', width: availW + 'px', height: window.innerHeight + 'px',
      'max-width': 'none', 'max-height': 'none', transform: 'none', overflow: 'hidden' };
    Object.entries(values).forEach(([p, value]) => player.style.setProperty(p, value, 'important'));
    const host = document.fullscreenElement || document.body;
    if (!fullBackdrop) { fullBackdrop = document.createElement('div'); fullBackdrop.id = 'xe-cat-full-backdrop'; }
    if (fullBackdrop.parentElement !== host) host.appendChild(fullBackdrop);
  }

  function fitVideoFullscreen() {
    const v = pick(SEL.video);
    if (!v) return;
    if (fsVideoEl !== v) {
      unfitVideoFullscreen();
      fsVideoEl = v;
      fsVideoOld = rememberStyle(v, FS_PROPS);
    }
    // 保留原始比例，画面居中在播放器中，controls 也局限在同一区域。
    const values = { position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%',
      transform: 'none', 'object-fit': 'contain', 'max-width': '100%', 'max-height': '100%' };
    Object.entries(values).forEach(([p, value]) => v.style.setProperty(p, value, 'important'));
  }

  function unfitVideoFullscreen() {
    restoreStyle(fsVideoEl, fsVideoOld);
    fsVideoEl = null; fsVideoOld = null;
  }

  function leaveFullLayout() {
    removeCatalogEntry();
    unfitVideoFullscreen();
    restoreStyle(fullPlayer, fullPlayerOld);
    if (fullPlayer) fullPlayer.classList.remove('xe-cat-full-player');
    fullPlayer = null; fullPlayerOld = null;
    if (webFullRoot && webFullAdded) webFullRoot.classList.remove('xgplayer-is-css-fullscreen');
    webFullRoot = null; webFullAdded = false;
    if (fullBackdrop) fullBackdrop.remove();
    fullBackdrop = null;
    fullSession = ''; fullHref = ''; fullVideo = null;
    if (dock) {
      dock.classList.remove('xe-full-dock');
      if (dock.parentElement !== document.body) document.body.appendChild(dock);
    }
    liftSortPopover();
  }

  function hideCollapsedDock() {
    leaveEmbedded();
    const host = document.fullscreenElement || document.body;
    if (dock.parentElement !== host) host.appendChild(dock);
    dock.style.display = 'none';
    dockFixed = true;
  }

  // 10. 默认嵌进网页网格；全屏或收起时才脱离文档流。
  function leaveEmbedded() {
    if (embeddedFallback) {
      if (dock?.parentElement === embeddedFallback) document.body.appendChild(dock);
      embeddedFallback.remove(); embeddedFallback = null;
    }
    if (!embeddedHost) return;
    embeddedHost.classList.remove('xe-cat-embedded-player', 'xe-cat-stacked', 'xe-cat-left');
    Object.entries(embeddedOld).forEach(([name, old]) => {
      if (old.value) embeddedHost.style.setProperty(name, old.value, old.priority);
      else embeddedHost.style.removeProperty(name);
    });
    embeddedHost = null; embeddedOld = null;
  }

  function embedDock(player, videoRoot) {
    restoreVideoWidth(videoRoot);
    if (embeddedHost !== player) {
      leaveEmbedded();
      embeddedVideoHeight = videoRoot.getBoundingClientRect().height || 550;
      embeddedHost = player;
      embeddedOld = Object.fromEntries(['--xe-catalog-width', '--xe-video-height', '--xe-catalog-rows', '--xe-catalog-stack-height'].map(name =>
        [name, { value: player.style.getPropertyValue(name), priority: player.style.getPropertyPriority(name) }]));
      player.classList.add('xe-cat-embedded-player');
    }
    const available = player.clientWidth;
    player.classList.toggle('xe-cat-left', catalogSide === 'left');
    player.classList.toggle('xe-cat-stacked', available < CONF.minWidth + CONF.gap + 320);
    const width = Math.min(customDockW || CONF.dockWidth, CONF.maxWidth, Math.max(CONF.minWidth, available - CONF.gap - 320));
    player.style.setProperty('--xe-catalog-width', width + 'px');
    player.style.setProperty('--xe-video-height', embeddedVideoHeight + 'px');
    const rows = [...player.children].filter(el => el !== dock && getComputedStyle(el).display !== 'none'
      && !['absolute', 'fixed'].includes(getComputedStyle(el).position)).length;
    player.style.setProperty('--xe-catalog-rows', Math.max(1, rows));
    player.style.setProperty('--xe-catalog-stack-height', Math.min(Math.max(320, embeddedVideoHeight), CONF.maxHeight) + 'px');
    if (dock.parentElement !== player) player.appendChild(dock);
    // 默认由完整播放器区域撑高，包含视频下方标题栏；目录自身不反过来撑高播放器。
    dock.style.cssText = `display:flex;position:relative;width:${width}px;max-height:${CONF.maxHeight}px;height:auto;align-self:stretch;`;
    dockFixed = true;
    dock.querySelectorAll('.xe-cat-resizer').forEach(el => {
      el.setAttribute('aria-valuenow', width);
      el.setAttribute('aria-valuemax', maxPanelWidth());
    });
  }

  function embedWithoutPlayer() {
    if (!embeddedFallback?.isConnected) {
      leaveEmbedded();
      const origin = catOriginParent?.isConnected ? catOriginParent : pick('.main_content') || document.body;
      embeddedFallback = document.createElement('div'); embeddedFallback.id = 'xe-cat-inline-slot';
      origin.insertBefore(embeddedFallback, catOriginNext?.parentElement === origin ? catOriginNext : null);
    }
    embeddedFallback.style.width = `min(100%,${Math.min(customDockW || CONF.dockWidth, CONF.maxWidth)}px)`;
    embeddedFallback.style.margin = catalogSide === 'left' ? '16px auto 16px 0' : '16px 0 16px auto';
    if (dock.parentElement !== embeddedFallback) embeddedFallback.appendChild(dock);
    dock.style.cssText = `position:relative;display:flex;height:${Math.min(560, CONF.maxHeight)}px;`;
    dockFixed = true;
  }

  function layout() {
    if (!dock) return;
    const player = pick(SEL.player) || pick(SEL.videoRoot);
    // 切集短暂没有播放器时，保留全屏侧栏，等待新播放器挂载。
    if (!player) {
      if (fullSession && (document.fullscreenElement || isEpisodeTransition())) return;
      if (fullSession || fullPlayer) leaveFullLayout();
      if (collapsed()) hideCollapsedDock(); else embedWithoutPlayer();
      updateCatalogEntry(null);
      return;
    }
    const videoRoot = player.querySelector(SEL.videoRoot) || player;

    if (isFullMode(player)) {
      leaveEmbedded();
      if (document.fullscreenElement?.tagName === 'VIDEO') { dock.style.display = 'none'; removeCatalogEntry(); return; }
      fullSession = document.fullscreenElement ? 'native' : 'web';
      if (fullSession === 'web') {
        const root = player.querySelector('.xgplayer') || videoRoot;
        if (webFullRoot !== root) {
          if (webFullRoot && webFullAdded) webFullRoot.classList.remove('xgplayer-is-css-fullscreen');
          webFullRoot = root;
          webFullAdded = !root.classList.contains('xgplayer-is-css-fullscreen');
          root.classList.add('xgplayer-is-css-fullscreen');
        }
      }
      fullHref = location.href;
      fullVideo = pick(SEL.video);
      const host = document.fullscreenElement || document.body;
      if (dock.parentElement !== host) host.appendChild(dock);
      dock.classList.add('xe-full-dock');
      restoreVideoWidth(videoRoot);
      const width = panelW();
      // 全屏始终贴顶铺满，左右调宽不会改变高度。
      const r = rectInViewport({ left: catalogSide === 'left' ? 0 : window.innerWidth - width,
        top: 0, w: width, h: window.innerHeight });
      fitPlayerFullscreen(player, collapsed() ? window.innerWidth : window.innerWidth - r.w,
        !collapsed() && catalogSide === 'left' ? r.w : 0);
      fitVideoFullscreen();
      if (collapsed()) hideCollapsedDock(); else setDockRect(r);
      updateCatalogEntry(player);
      liftSortPopover();
      dockFixed = true;
      return;
    }
    if (fullSession || fullPlayer) leaveFullLayout();
    if (collapsed()) { restoreVideoWidth(videoRoot); hideCollapsedDock(); }
    else embedDock(player, videoRoot);
    updateCatalogEntry(player);
  }

  // 10. 重新把面板挂到 DOM 里（SPA 重渲染后可能被移除）
  function remount() {
    if (!catNode()) return;
    active = true;
    if (!dock?.isConnected) ensureDock();
    applyCollapsed();
    relocateCatalog();
    colorChapterHeaders();
    layout();
    scheduleFollowCurrent(false);
  }

  // 11. 目录 Tab 未渲染时，尝试点击「目录」把它渲染出来：
  //     1) 商品/训练营页用 ss-tabs-v2，Tab 节点 id 固定为 tab-catalog；2) 课程视频页用 .content_switch_tab
  let tabClickedHref = '';
  function openCatalogTab() {
    if (tabClickedHref === location.href) return false;            // 同一 URL 只点一次，避免反复切换 Tab
    const goodsTab = pick('#tab-catalog') || pick('.ss-tabs-v2__item[aria-controls="pane-catalog"]');
    if (goodsTab) { tabClickedHref = location.href; goodsTab.click(); log('已切换到「目录」Tab（商品页）'); return true; }
    for (const el of document.querySelectorAll('.content_switch_tab *')) {
      const texts = [...el.children].map((k) => k.textContent.trim());
      const idx = texts.indexOf('目录');
      if (idx >= 0 && el.children.length >= 2) {
        tabClickedHref = location.href; el.children[idx].click(); log('已切换到「目录」Tab（视频页）'); return true;
      }
    }
    return false;
  }

  // 12. 防抖同步：有真实目录才接管；缺失时恢复布局，继续等待原站异步渲染。
  function sync(force) {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      if (!isLessonPage()) {
        if (active && Date.now() < episodeTransitionUntil) return;
        if (fullSession && (document.fullscreenElement || isEpisodeTransition())) return;
        deactivate(); return;
      }                   // 已不在学习界面：立刻把目录放回原位
      const cat = catNode();
      if (!cat) { deactivate(); openCatalogTab(); return; }
      if (force || !active || !dock?.isConnected || !dockBody || cat.parentElement !== dockBody) remount(); else { colorChapterHeaders(); layout(); }
    }, 120);
  }

  // 13. 记忆清晰度与倍速：切换下一集后自动恢复上次的选择
  // 菜单项统一是 xgplayer 的 li.option-item（清晰度/倍速弹层共用），故按文案区分
  // 1) 清晰度 = 原画/超清/高清 等；2) 倍速 = 1x/1.5x 等
  const PREF = { rate: 'xe_pref_rate', def: 'xe_pref_def' };
  const OX_ITEM = '.option-item';
  const RATE_RE = /^([0-9]+(?:\.[0-9]+)?)\s*[xX]$/;
  const DEF_TEXTS = ['原画', '超清', '高清', '标清', '蓝光'];
  let boundVideo = null, seenHref = '', prefTimer = 0, prefTries = 0, prefAuto = false, prefSilenceUntil = 0;

  const itemText = (el) => (el.textContent || '').trim();
  const silenceLeft = () => prefSilenceUntil - Date.now();
  const itemsBy = (pred) => [...document.querySelectorAll(OX_ITEM)].filter(pred);
  const defItems = () => itemsBy((el) => DEF_TEXTS.indexOf(itemText(el)) > -1);
  const rateItems = () => itemsBy((el) => RATE_RE.test(itemText(el)));
  const rateItemFor = (rate) => rateItems().find((el) => Math.abs(parseFloat(itemText(el)) - rate) < 0.01);

  // 脚本自动点击菜单项时置位 prefAuto：既避免被 onPrefClick 当成用户操作重复记忆，也避免误触发静默
  function clickItem(item) {
    if (!item) return false;
    prefAuto = true;
    try { item.click(); } finally { prefAuto = false; }
    return true;
  }

  // 1) 用户手动点清晰度/倍速时立即记忆（捕获阶段，先于播放器自身处理），并短暂静默自动恢复
  //    静默很关键：否则用户刚选「超清」，播放器改了流地址被误判成换集，脚本会立刻把清晰度改回旧值
  function onPrefClick(event) {
    if (prefAuto) return;
    const item = event.target.closest(OX_ITEM);
    if (!item) return;
    const text = itemText(item);
    if (DEF_TEXTS.indexOf(text) > -1) { store.set(PREF.def, text); log('已记住清晰度：' + text); }
    else if (RATE_RE.test(text)) { store.set(PREF.rate, String(parseFloat(text))); log('已记住倍速：' + text); }
    else return;
    prefSilenceUntil = Date.now() + 3000;
  }

  // 2) 恢复上次的清晰度与倍速；用户刚手动改过则整体跳过
  function applyPrefs() {
    if (silenceLeft() > 0) return;
    const v = pick(SEL.video);
    const rate = parseFloat(store.get(PREF.rate) || '0');
    if (v && rate > 0 && Math.abs(v.playbackRate - rate) > 0.01) {
      if (!clickItem(rateItemFor(rate))) v.playbackRate = rate;   // 弹层未渲染时直接设置播放属性兜底
      log('已恢复倍速：' + rate + 'x');
    }
    const def = store.get(PREF.def);
    if (!def) return;
    const sel = defItems().find((el) => el.classList.contains('selected'));
    if (sel && itemText(sel) === def) return;
    if (clickItem(defItems().find((el) => itemText(el) === def))) log('已恢复清晰度：' + def);
    else log('未找到清晰度选项：' + def + '（当前可选：' + defItems().map(itemText).join('/') + '）');
  }

  // 偏好是否已生效（倍速看 video 属性；清晰度只在弹层选项可见时才能判断）
  function prefApplied() {
    const v = pick(SEL.video);
    const rate = parseFloat(store.get(PREF.rate) || '0');
    if (v && rate > 0 && Math.abs(v.playbackRate - rate) > 0.01) return false;
    const def = store.get(PREF.def);
    const sel = defItems().find((el) => el.classList.contains('selected'));
    return !def || !sel || itemText(sel) === def;
  }

  // 4) 换集判定只看 URL 变化或播放器元素被替换，绝不看 src：切换清晰度也会改 src，否则会把用户的选择立刻改回去
  function watchEpisode() {
    const v = pick(SEL.video);
    if (!v) return;
    const href = location.href;
    const switched = href !== seenHref || v !== boundVideo;
    boundVideo = v;
    if (!switched) return;
    seenHref = href;
    prefTries = 0;
    clearInterval(prefTimer);
    applyPrefs();                                              // 1) 立刻尝试一次
    prefTimer = setInterval(() => {                             // 2) 播放器可能在加载后才写默认值，重试几次
      if (silenceLeft() > 0 || prefApplied() || ++prefTries >= 6) { clearInterval(prefTimer); return; }
      applyPrefs();
    }, 1200);
  }

  // 13.1 全屏切换：面板并进全屏容器内，视频与面板分列两侧，避免叠在画面上
  function handleFullscreen() {
    if (!document.fullscreenElement) {
      nativeFullOwned = false;
      episodeTransitionUntil = 0;
      leaveFullLayout();
    }
    layout();
    liftSortPopover();
  }

  // 14. 主入口：只在课时学习界面接管目录；其余页面完全不动作，保持原样
  function boot() {
    if (!isLessonPage()) {
      if (active && Date.now() < episodeTransitionUntil) return;
      if (!guardLogged) { guardLogged = true; log('当前不是课时学习界面，脚本不接管（页面=' + pageType() + diag() + '）'); }
      deactivate();
      return;
    }
    guardLogged = false;
    start();
    // 独立课时可能没有目录；不以 URL 参数推断，也不预先挤占播放器。
    if (!catNode()) { deactivate(); openCatalogTab(); return; }
    remount();
    log('初始化完成（页面=' + pageType() + diag() + '）');
  }

  // 15. 启动自愈循环：DOM 变化/滚动缩放/轮询都会重新同步（只在学习界面生效）
  function start() {
    if (started) return;
    started = true;
    bindResizeMove();
    installFullscreenBridge();
    // 1) DOM 重建或播放器全屏类名变化时同步；忽略脚本自身的样式写入。
    new MutationObserver((records) => {
      if (!records.some((record) => record.type === 'childList'
        || (record.target.matches('.xgplayer,.video-player,.course-player-box') && record.oldValue !== record.target.getAttribute('class')))) return;
      if (dock && !dock.isConnected && (embeddedHost || embeddedFallback)) {
        document.body.appendChild(dock); leaveEmbedded();
      }
      sync(false);
      scheduleFollowCurrent(false);
      liftSortPopover();
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'], attributeOldValue: true });
    document.addEventListener('click', (event) => {
      if (event.target.closest('.sort_box')) setTimeout(liftSortPopover, 0);
    }, true);
    // 清除度/倍速菜单项：捕获阶段先记忆用户的选择，避免被后续自动恢复改回去
    document.addEventListener('click', onPrefClick, true);
    // 2) 滚动/缩放时重新定位面板与排序浮层
    const onMove = () => { if (dockFixed) { layout(); liftSortPopover(); } };
    window.addEventListener('scroll', onMove, { passive: true });
    window.addEventListener('resize', onMove);
    // 3) 全屏：把面板并进全屏容器内，与视频左右并排，而不是叠在视频画面上
    document.addEventListener('fullscreenchange', () => {
      handleFullscreen();
      sync(true);
    });
    // 3.1 视频元数据就绪后重新同步布局（画面由 object-fit 保持原始比例）。
    document.addEventListener('loadedmetadata', (e) => { if (e.target && e.target.tagName === 'VIDEO' && dockFixed) layout(); }, true);
    // 4) 兜底轮询：处理极端懒渲染、当前课时定位、换集后的清晰度/倍速恢复
    watchEpisode();
    setInterval(() => {
      sync(false);
      scheduleFollowCurrent(false);
      watchEpisode();
    }, 2000);
  }

  // 16. 进入学习页后先观察并恢复播放偏好，真实目录出现后再接管。
  boot();
  setInterval(() => { if (!active) boot(); }, 1500);
})();
