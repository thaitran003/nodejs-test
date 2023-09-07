const { createClient } = require('redis')
const client = createClient();
async function connect() {
    try {
        await client.connect();
        client.on('connect', () => { });
        console.log('connect redis thanh cong');
    }
    catch (error) {
        console.log('connect redis that bai')
    }
}
module.exports = { connect }