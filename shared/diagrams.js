/**
 * diagrams.js — SVG diagram registry
 *
 * Each entry is a function(params, find, W, H) that returns an SVG string.
 * params = the given values object from the exercise
 * find   = which variable is unknown
 */

const DIAGRAM_REGISTRY = {

  trapez(params, find, W = 200, H = 120) {
    const a = params.a || 12, c = params.c || 6;
    const pad = 28, baseY = H - 22, topY = 22;
    const baseW = W - pad * 2;
    const ratio = Math.min(Math.max(c / a, 0.2), 0.95);
    const topW = baseW * ratio;
    const topX = pad + (baseW - topW) / 2;
    const hX = pad + baseW / 2 + 10;
    const hl = v => v === find ? '#e8522a' : '#f5f0e8';
    const hls = v => v === find ? '#e8522a' : '#8899bb';
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${pad},${baseY} ${pad + baseW},${baseY} ${topX + topW},${topY} ${topX},${topY}"
        fill="rgba(74,155,111,0.08)" stroke="#4a9b6f" stroke-width="2" stroke-linejoin="round"/>
      <line x1="${hX}" y1="${baseY}" x2="${hX}" y2="${topY}"
        stroke="${hls('h')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="${hX - 4}" y1="${baseY}" x2="${hX + 4}" y2="${baseY}" stroke="${hls('h')}" stroke-width="1.5"/>
      <line x1="${hX - 4}" y1="${topY}"  x2="${hX + 4}" y2="${topY}"  stroke="${hls('h')}" stroke-width="1.5"/>
      <text x="${pad + baseW / 2}" y="${baseY + 16}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('a')}">a</text>
      <text x="${topX + topW / 2}" y="${topY - 7}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('c')}">c</text>
      <text x="${hX + 10}" y="${(baseY + topY) / 2 + 5}" text-anchor="start"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('h')}">h</text>
    </svg>`;
  },

  raute(params, find, W = 200, H = 140) {
    const pad = 28, cx = W / 2, cy = H / 2;
    const dx = (W - pad * 2) / 2;
    const dy = (H - pad * 2) / 2;
    const hl = v => v === find ? '#e8522a' : '#f5f0e8';
    const hls = v => v === find ? '#e8522a' : '#8899bb';
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${cx},${cy - dy} ${cx + dx},${cy} ${cx},${cy + dy} ${cx - dx},${cy}"
        fill="rgba(74,155,111,0.08)" stroke="#4a9b6f" stroke-width="2" stroke-linejoin="round"/>
      <line x1="${cx - dx}" y1="${cy}" x2="${cx + dx}" y2="${cy}"
        stroke="${hls('e')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="${cx}" y1="${cy - dy}" x2="${cx}" y2="${cy + dy}"
        stroke="${hls('f')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="${cx}" y="${cy + dy + 16}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('e')}">e</text>
      <text x="${cx + dx + 10}" y="${cy + 5}" text-anchor="start"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('f')}">f</text>
    </svg>`;
  },

  deltoid(params, find, W = 200, H = 160) {
    const pad = 28, cx = W / 2;
    const dx = (W - pad * 2) / 2;
    const topY = 22, botY = H - 18;
    const midY = topY + (botY - topY) * 0.35;
    const hl = v => v === find ? '#e8522a' : '#f5f0e8';
    const hls = v => v === find ? '#e8522a' : '#8899bb';
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${cx},${topY} ${cx + dx},${midY} ${cx},${botY} ${cx - dx},${midY}"
        fill="rgba(74,155,111,0.08)" stroke="#4a9b6f" stroke-width="2" stroke-linejoin="round"/>
      <line x1="${cx - dx}" y1="${midY}" x2="${cx + dx}" y2="${midY}"
        stroke="${hls('e')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="${cx}" y1="${topY}" x2="${cx}" y2="${botY}"
        stroke="${hls('f')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="${cx}" y="${botY + 16}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('f')}">f</text>
      <text x="${cx + dx + 10}" y="${midY + 5}" text-anchor="start"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('e')}">e</text>
    </svg>`;
  },

  parallelogramm(params, find, W = 220, H = 120) {
    const pad = 28, baseY = H - 22, topY = 22;
    const baseW = W - pad * 2;
    const skew = 30;
    const hl = v => v === find ? '#e8522a' : '#f5f0e8';
    const hls = v => v === find ? '#e8522a' : '#8899bb';
    const hX = pad + skew + 10;
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${pad},${baseY} ${pad + baseW},${baseY} ${pad + baseW + skew},${topY} ${pad + skew},${topY}"
        fill="rgba(74,155,111,0.08)" stroke="#4a9b6f" stroke-width="2" stroke-linejoin="round"/>
      <line x1="${hX}" y1="${baseY}" x2="${hX}" y2="${topY}"
        stroke="${hls('h')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="${hX - 4}" y1="${baseY}" x2="${hX + 4}" y2="${baseY}" stroke="${hls('h')}" stroke-width="1.5"/>
      <line x1="${hX - 4}" y1="${topY}"  x2="${hX + 4}" y2="${topY}"  stroke="${hls('h')}" stroke-width="1.5"/>
      <text x="${pad + baseW / 2}" y="${baseY + 16}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('a')}">a</text>
      <text x="${hX + 10}" y="${(baseY + topY) / 2 + 5}" text-anchor="start"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('h')}">h</text>
    </svg>`;
  },

  dreieck(params, find, W = 200, H = 140) {
    const pad = 28, baseY = H - 22, topY = 22;
    const baseW = W - pad * 2;
    const peakX = pad + baseW * 0.45;
    const hX = peakX;
    const hl = v => v === find ? '#e8522a' : '#f5f0e8';
    const hls = v => v === find ? '#e8522a' : '#8899bb';
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${pad},${baseY} ${pad + baseW},${baseY} ${peakX},${topY}"
        fill="rgba(74,155,111,0.08)" stroke="#4a9b6f" stroke-width="2" stroke-linejoin="round"/>
      <line x1="${hX}" y1="${baseY}" x2="${hX}" y2="${topY}"
        stroke="${hls('h')}" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="${hX - 4}" y1="${baseY}" x2="${hX + 4}" y2="${baseY}" stroke="${hls('h')}" stroke-width="1.5"/>
      <line x1="${hX - 4}" y1="${topY}"  x2="${hX + 4}" y2="${topY}"  stroke="${hls('h')}" stroke-width="1.5"/>
      <text x="${pad + baseW / 2}" y="${baseY + 16}" text-anchor="middle"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('g')}">g</text>
      <text x="${hX + 10}" y="${(baseY + topY) / 2 + 5}" text-anchor="start"
        font-family="Fraunces,serif" font-size="13" font-weight="700" fill="${hl('h')}">h</text>
    </svg>`;
  },

};
