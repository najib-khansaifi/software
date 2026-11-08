import {MAX_DURATION} from '../config.js';
export function validateWindow(start,end,now){
  if(!Number.isInteger(start)||!Number.isInteger(end)) return {ok:false,code:'invalid',message:'Choose a valid start and end time.'};
  if(start<0||end>1440||start>=end) return {ok:false,code:'order',message:'End time must be later than start time.'};
  if(start<=now) return {ok:false,code:'now',message:'Start time must be after 09:00.'};
  if(end-start>MAX_DURATION) return {ok:false,code:'duration',message:'Bookings can be at most 120 minutes.'};
  return {ok:true,code:'ok',message:'Time window is valid.'};
}
export function overlaps(start,end,[bookedStart,bookedEnd]){ return start<bookedEnd && bookedStart<end; }
export function checkAvailability(room,start,end,now){
  const validation=validateWindow(start,end,now); if(!validation.ok) return {...validation,available:false};
  if(room.blocked) return {ok:false,available:false,code:'blocked',message:'This room is temporarily blocked.'};
  const conflict=room.bookings.find(b=>overlaps(start,end,b));
  if(conflict) return {ok:false,available:false,code:'overlap',message:'The selected time overlaps an existing booking.',conflict};
  return {ok:true,available:true,code:'available',message:'Available for the selected time.'};
}
