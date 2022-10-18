const {
    Worker, isMainThread, parentPort, ab
} = require('worker_threads');


if (isMainThread) { // 부모일때
    const worker = new Worker(__filename);

    worker.on('message',
        message => {
            console.log('worker ->  main :     ', message);
            if (signal == "worker is done") {

                console.log("main's jobs")

            }
        }
    );

    console.log("main is end")

} else { // 워커일때
    console.log("worker's job");
    
    parentPort.postMessage('worker is done');
    parentPort.close();

    console.log("worker is end");
}