export default class Filter{
	removeDuplicates(target){
		return Array.from(new Set(target));
	}
	byTerm(options){
		return options.target.filter(
			(single) => {
				return single.includes(options.term) === options.shouldInclude;
			}
		);
	}
	byObjectValue(options){
		return options.target.filter(
    		(single) => { //ensure operations are returning correct matches
    			return single[options.property].toString().toLowerCase().includes(options.value.toString().toLowerCase()) === options.shouldInclude;
    		}
		);
	}
}