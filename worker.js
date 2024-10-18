// onmessage = (e) => {
//     console.log(e)
//     console.log("Worker message received from main thread")
// }


import { WebWorkerMLCEngineHandler } from "https://esm.run/@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler();

onmessage = (msg) => {
    handler.onmessage(msg);
    console.log(msg)
};






