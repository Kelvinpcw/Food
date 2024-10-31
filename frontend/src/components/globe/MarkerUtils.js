// src/components/globe/MarkerUtils.js
export const markerSvg = `
  <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#FF4081"/>
    <circle cx="12" cy="12" r="3" fill="white"/>
  </svg>
`;

export function getTooltipHTML(text) {
  return `
    <div class="marker-tooltip">
      <div class="marker-label">${text}</div>
    </div>
  `;
}