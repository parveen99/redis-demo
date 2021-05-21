let asyncRedis = require("async-redis");
let dotenv = require('dotenv');
dotenv.config();

var redisEndpoint = process.env.REDIS_ENDPOINT ;
// Get the port and host from the endpoint string
var PORT =  redisEndpoint.slice(-4);
        
var HOST = redisEndpoint.slice(0,-5);

//create a new Redis client 
var client = asyncRedis.createClient(PORT, HOST);
        
// Connect to Redis endpoint 
client.on('connect', function () {
    console.log('Connected to Redis node: ');
    });

    var setValue = async(key, value) => {
        return await client.set(key, value);
      };
      
    var getValue = async(key) => {
        let val = await client.get(key);
        return val;
      };
    
    var time = async() => {
        let timeArray = await client.time();
        let timeMicroSeconds = timeArray[1];
        return timeMicroSeconds;
    };
    
    
    async function operations() {
        let setTotal = 0;
        for(let i=0;i<100;i++){
            let beforeSetTime = await time();
    
            await setValue("aa", "bb");
            let afterSetTime = await time();
    
            let setDifference = afterSetTime - beforeSetTime;
            setTotal = setTotal + setDifference;
        }
        console.log("Average Set Time" ,setTotal/100);
    
        let getTotal = 0;
    
        for(let i=0;i<100;i++){
            let beforeGetTime = await time();
    
            await getValue("aa");
            let afterGetTime = await time();
    
            let getDifference = afterGetTime - beforeGetTime;
            getTotal = getTotal + getDifference;
    
        }
        console.log("Average Get Time :" , getTotal/100)
      }
    
    operations();
    
