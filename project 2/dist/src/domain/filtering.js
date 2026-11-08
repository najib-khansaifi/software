export function normalizeRequirements(attendees,equipment){ const n=Number(attendees); return {attendees:Number.isFinite(n)&&n>=1?Math.floor(n):1,equipment:[...new Set(equipment||[])]}; }
export function matchesRoom(room,requirements){ const r=normalizeRequirements(requirements.attendees,requirements.equipment); return room.capacity>=r.attendees && r.equipment.every(item=>room.equipment.includes(item)); }
export function filterRooms(rooms,requirements){ return rooms.filter(room=>matchesRoom(room,requirements)); }
