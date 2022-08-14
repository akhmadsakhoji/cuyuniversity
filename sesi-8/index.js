let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberic = "123456789";
    const symbol = "!@#$%^&*();:'|`~-=?/.,><"

    const data = lowerAlphabet + upperAlphabet + numberic + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];        
    }
    return generator;    
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(()=>{
        alert("Password Has Been Generated");
    },200)
}

function savePassword(){
    if(confirm("Apakah anda ingin mendownload?")){
        saveButton.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${password.value}`));
        saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt');    
        setTimeout(()=>{
            alert("Password berhasil disimpan")
        },200)
    }
}

function copy(){
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}