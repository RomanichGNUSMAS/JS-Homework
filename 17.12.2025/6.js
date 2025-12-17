class Range {
	constructor(start,end){
		this.start = start;
		this.end = end;
		this[Symbol.iterator] = function(){
			const th = this;
				let i = th.start;
				return {
					next(){
						return {
							value:i,done:i++ > th.end
						}
					}
				}
		}
	}
}

const range = new Range(1,3)
for (const x of range) {
  console.log(x);
}

for (const x of range) {
  console.log(x);
  }

for (const x of range){
	console.log(x)
	}
console.log([...range])