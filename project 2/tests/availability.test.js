import test from 'node:test'; import assert from 'node:assert/strict'; import {validateWindow,overlaps,checkAvailability} from '../src/domain/availability.js'; import {ROOMS} from '../src/data/rooms.js';
const now=540;
const validations=[['09:00 rejected',540,570,false],['09:01 accepted',541,570,true],['past rejected',500,570,false],['equal rejected',660,660,false],['reversed rejected',700,660,false],['120 accepted',900,1020,true],['121 rejected',900,1021,false],['end day accepted',1320,1440,true],['beyond day rejected',1400,1441,false]];
for(const [name,s,e,ok] of validations)test(name,()=>assert.equal(validateWindow(s,e,now).ok,ok));
const overlapCases=[['left touch',540,600,[600,660],false],['right touch',660,720,[600,660],false],['partial left',590,610,[600,660],true],['partial right',650,700,[600,660],true],['inside',610,650,[600,660],true],['contains',590,670,[600,660],true]];
for(const [name,s,e,b,expected] of overlapCases)test(name,()=>assert.equal(overlaps(s,e,b),expected));
test('blocked room unavailable',()=>assert.equal(checkAvailability(ROOMS[3],660,720,now).code,'blocked'));
test('room-specific conflict found',()=>assert.equal(checkAvailability(ROOMS[1],700,730,now).code,'overlap'));
test('room-specific open slot available',()=>assert.equal(checkAvailability(ROOMS[2],660,720,now).available,true));
