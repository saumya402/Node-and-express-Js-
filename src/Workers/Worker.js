const { Worker } = require("bullmq");
const Redis = require("ioredis")

const redisConnection = new Redis(
    "redis://default:IlBL3jv315KIDSnQVLMQb7H9BH7FqgWC@ultravivid-tame-stellar-19753.db.redis.io:13372",
    {
         maxRetriesPerRequest:null
    }
);

const worker = new Worker(
  "taskQ",
  async (job) => {
    console.log(`job started for the name ${job.data.name}`);
    console.log(`email = ${job.data.email}`)
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 10008);
    })

  },
  { connection: redisConnection },
);

worker.on("completed",(job)=>{
    console.log(`task has been  done for ${job.id}`)
})
worker.on("failed some error occured",(err)=>{
    console.log(`err`)
})