export async function sendData(data: number[], ip: string, port: number): Promise<number> {
    
    await console.log(data.toString() + " " + ip.toString()+ " " + port.toString());

    
    return -1;
    // var socket = createSocket('udp4');
    //     socket.send(data, port, ip, (err) => {
    //         if (err) {
    //             socket.close();
    //             console.log(err)
    //         }
    //     });

    // return new Promise((resolve, reject) => {
    //     var wait = setTimeout(() => {
    //         reject();
    //     }, 300);

    //     socket.on('error', (err) => {
    //         console.log(err)
    //         console.log('Closing socket...')
    //         socket.close();
    //     })

    //     socket.on('message', (msg: Buffer, rinfo: RemoteInfo) => {
    //         clearTimeout(wait);
    //         resolve({
    //             buffer: msg,
    //             remoteInfo: rinfo
    //         });
    //         socket.close();
    //     });
    // })
}