window.incrementalGame = {
        state: {
            counter: 0
        }
    }; 

class PubSub {
    constructor () {
        this.subscribers = [];
    }

    // subscribe allows a new subscriber to listen for changes by providing
    // callback function in the parameter
    subscribe (fn) {
        this.subscribers.push(fn);
    }

    // one can publish any data to subscribers
    publish (data) {
        this.subscribers.forEach(subscriber => {
            subscriber(data);
        });
    }
}

	const pubSub = new PubSub();
    
    var index = document.querySelector('#cs');
	const btn = document.querySelector('#n1');
	
    var index1 = 0;
	
    pubSub.subscribe(action => {
        if (action.type !== 'CTR') {
            return;
        }
        index1 ++;
        window.incrementalGame.state.counter = index1;
        index.innerHTML = window.incrementalGame.state.counter;
        console.log(window.incrementalGame.state.counter);
    });
    btn.addEventListener('click', function() {
        pubSub.publish({
            type: 'CTR',
            payload: window.incrementalGame.state.counter
        });
    });