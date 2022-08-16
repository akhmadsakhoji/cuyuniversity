const http = require('http');
const rupiah = require('rupiah-format');
const os = require('os');
const fs = require('fs');
const host = 'localhost'
const port = 3001
const server = http.createServer(function(request, response){
    const nama = "Akhmad Sakhoji Jamaludin"
    let uang = 500000
    let jajan = 150000
    let sisa = uang - jajan

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () =>{
        console.info('data uang berhasil disimpan');
    })

    const sisaRAM = os.freemem()
    const jenisCPU = os.cpus()

    function checkCPU(){
        let myCPU = []
        jenisCPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU[0]
    }

    const hasil =  /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${nama}</title>
        </head>
        <body>
            <h1 style="background: black; color: white; padding: 20px; text-align: center;">NODE JS UANG JAJAN</h1>
            <p>Halo, Nama saya ${nama} dan saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, dan sekarang uang saya sisa ${sisa}</p>
            <h5>merk CPU : ${checkCPU()}</h5>
        </body>
        </html>
    `



    response.statusCode = 200
    response.end(hasil)
});



server.listen(port, host, '', function(){
    console.info(`Server menyala di ${host}:${port}`);
})