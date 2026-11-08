import {filterRooms} from '../domain/filtering.js'; import {checkAvailability} from '../domain/availability.js'; import {parseTime} from '../domain/time.js';
export function createStore({rooms,now}){
  const state={attendees:8,equipment:[],selectedRoomId:null,start:'11:00',end:'12:00',checked:false}; const listeners=new Set();
  const matching=()=>filterRooms(rooms,{attendees:state.attendees,equipment:state.equipment});
  const ensureSelection=()=>{ const ids=matching().map(r=>r.id); if(!ids.includes(state.selectedRoomId)) state.selectedRoomId=ids[0]||null; };
  const view=()=>{ ensureSelection(); const match=matching(); const room=rooms.find(r=>r.id===state.selectedRoomId)||null; const availability=state.checked&&room?checkAvailability(room,parseTime(state.start),parseTime(state.end),now):null; return {state:{...state,equipment:[...state.equipment]},matching:match,room,availability}; };
  const emit=()=>listeners.forEach(fn=>fn(view()));
  const api={getView:view,subscribe(fn){listeners.add(fn);fn(view());return()=>listeners.delete(fn);},setAttendees(v){state.attendees=Math.max(1,Number(v)||1);state.checked=false;ensureSelection();emit();},toggleEquipment(item){state.equipment=state.equipment.includes(item)?state.equipment.filter(x=>x!==item):[...state.equipment,item];state.checked=false;ensureSelection();emit();},selectRoom(id){state.selectedRoomId=id;emit();},setTime(start,end){state.start=start;state.end=end;emit();},check(){state.checked=true;emit();}}; ensureSelection(); return api;
}
