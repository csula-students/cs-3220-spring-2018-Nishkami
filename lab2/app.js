window.incrementalGame = {
        state: {
            counter: 0
            var index = document.querySelector('#cs');
			var btn = document.querySelector('#cs2');
        }
    }; 



const pubSub = new PubSub();
    window.state = {
        index: -1
    };
    const colors = ['--red', '--blue', '--green'];
    var index = -1; // nothing to begin with
    const dom = document.querySelector('.rgb-square');
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        pubSub.publish(window.state.index);
    });
    pubSub.subscribe(action => {
        if (action.type !== 'CHANGE_COLOR') {
            return;
        }
        const oldColor = getColor(colors, index);
        if (oldColor) {
            dom.classList.remove(oldColor);
        }
        index ++;
        index = index % colors.length;
        window.state.index = index;
        const newColor = getColor(colors, index);
        dom.classList.add(newColor);
    });
    dom.addEventListener('click', function() {
        pubSub.publish({
            type: 'CHANGE_COLOR',
            payload: window.state.index
        });
    });
    function getColor (colors, index) {
        if (index < 0) {
            return '';
        }
        return colors[index];
    }