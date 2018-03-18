const TICK_INTERVAL = 1000;

export function tick (callback) {
	
	if (window.globalGeneratorRate > 0) {
		if (window.callback.incrementTime)
			clearTimeout(window.callback.incrementTime);
		store.dispatch({
					payload: window.globalGeneratorRate
				});
				callback.dispatch({
		setTimeout(tick.bind(this, callback), interval);
	});	
	export function increment (state, modifier = 1) {
	return state.counter + 1 * modifier;
}
