// promise : micro task queue(job queue)(high priority task)
const promise= new Promise((res, rej)=>{
    res(7)
    rej()
    })
    promise.then(()=>{
        console.log(7)
        })
        .catch(()=> console.log("better luck next time!!"))
    
    // Timer function (Time Queue)(MacroTask Queue)(low priority queue)
    setTimeout(() => {
        console.log(add(1,3))
    }, 2000);
    
    // check queue  // will before any timer (Macro Task queue)
    setImmediate(()=>{
        console.log(add(1,2))
    })
    
    // will execute in the next iteration of the event loop (hight priority task)
    process.nextTick(()=>{
       console.log(add(10,20))
    })
    
    queueMicrotask(() => {
        console.log("after completion of any operation of micro task queue")
        });
     
    
    
    //console.log(process) // global object of a node.js that contains so many different methods like process.nextTick(), process.exit()
    
    
    const add = (a,b) => { return a+b }
    console.log(add(5,6))  // any high priority asynchronous task will execute after execution of this main function call
    
    
    //-------------------------------------------------------- event loop stages --------------------------------------------------------//               
    // 1. Timers: 
    // 2. I/O callbacks: 
    // 3. Idle, Prepare: 
    // 4. Poll: 
    // 5. Check: 
    // 6.Close callbacks: 
    
    // -------------------------------------------------------- Micro task queue task ------------------------------------------------ //
    // promise 
    // callbacks
    // async await
    // process.nextTick
    // queueMicrotask
    
    // --------------------------------------------------------- Macro task queue task --------------------------------------------------//
    // setimmidiate 
    // setTimeout 
    // setInterval