export class BufferQueue {
    constructor (size) {
        this.memory = [];
        this.size = size;
    }

    push (value) {
		if (this.length > this.size){
		memory.push(value);
		}
		else
		{
			setSize(size+10);
		}
        // TODO: push an item to memory while keeping the size fixed
    }

    setSize (size) {
        arr.length=size;
    }

    get () {
        return this.memory;
    }
}
