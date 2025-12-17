class Range {
	constructor(start,end){
		this.start = start;
		this.end = end;
		this[Symbol.iterator] = function*(){
			for(let i = start;i <= end;++i){
				yield i;
		}};
	}}
const range = new Range(1,3)
for(let i of range){
	console.log(i)
}
console.log([...range])