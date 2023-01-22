function checkform(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == "Dreamteam" && password == "Dreamteam123"){
        alert("Login Berhasil");
        form.setAttribute("action", "adminDaftarBooking.html");
    }
    else if(username == "" && password == ""){
        alert("masukkan Username & Password Anda!");
    }
    else if(username == ""){
        alert("form  username tidak boleh kosong");
    }
    else if(password == ""){
        alert("form password tidak boleh kosong");
    }
    else{
        alert("Username/Password yang Anda Masukkan Salah")
    }
}