const {
    Worker, isMainThread, parentPort, ab
} = require('worker_threads');      // 두번째 쓰레드

if (isMainThread) { // 부모일때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));  // 첫번째 쓰레드
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else { // 워커일때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}