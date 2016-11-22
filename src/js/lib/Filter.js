export default class Filter{
	removeDuplicates(target){
		return Array.from(new Set(target));
	}
	removeByTerm(options){
		return options.target.filter(
			(single) => {
				return !single.includes(options.term);
			}
		);
		//return filtered;
	}
	byTerm(options){
		return options.target.filter(
			(single) => {
				return single.includes(options.term);
			}
		);
		//return filtered;
	}
}