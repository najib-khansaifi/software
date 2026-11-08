export const EQUIPMENT = Object.freeze(['Display','Projector','Whiteboard','Microphone','Computers','Video conference']);
export const ROOMS = Object.freeze([
  Object.freeze({id:'N-201',name:'North Collaboration Suite',capacity:10,equipment:Object.freeze(['Display','Whiteboard','Video conference']),blocked:false,bookings:Object.freeze([[585,630],[840,900]])}),
  Object.freeze({id:'A-305',name:'Atlas Seminar Room',capacity:28,equipment:Object.freeze(['Projector','Whiteboard','Microphone']),blocked:false,bookings:Object.freeze([[660,750],[960,1020]])}),
  Object.freeze({id:'B-112',name:'Byte Computing Studio',capacity:24,equipment:Object.freeze(['Computers','Projector','Display']),blocked:false,bookings:Object.freeze([[780,870]])}),
  Object.freeze({id:'Q-404',name:'Quiet Focus Room',capacity:6,equipment:Object.freeze(['Whiteboard']),blocked:true,bookings:Object.freeze([])}),
  Object.freeze({id:'H-118',name:'Horizon Workshop Room',capacity:18,equipment:Object.freeze(['Projector','Whiteboard','Display']),blocked:false,bookings:Object.freeze([[615,675],[900,945]])}),
  Object.freeze({id:'F-510',name:'Forum Lecture Room',capacity:50,equipment:Object.freeze(['Projector','Microphone','Video conference']),blocked:false,bookings:Object.freeze([[570,600],[720,780],[900,960]])})
]);
