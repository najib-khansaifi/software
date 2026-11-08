export function parseTime(value){ if(typeof value!=='string'||!/^\d{2}:\d{2}$/.test(value)) return null; const [h,m]=value.split(':').map(Number); if(!Number.isInteger(h)||!Number.isInteger(m)||h<0||h>23||m<0||m>59) return null; return h*60+m; }
export function formatTime(minutes){ const h=Math.floor(minutes/60),m=minutes%60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`; }
