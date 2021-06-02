let url = 'https://freemind-test.netlify.app/.netlify/functions/test'

function $(id) {
    return document.getElementById(id);
}

function submitForm() {
    var valid = true;

    // data
    var name = $('name');
    var email = $('email');
    var phone = $('phone');
    var exp = $('exp');
    var position = $('position');
    var filename = $('filename');


    // error

    var name_error = $("name__error");
    var email_error = $("email__error");
    var phone_error = $("phone__error");
    var position_error = $("position__error");
    var exp_error = $("exp__error")
    var file_error = $("file__error")



    var data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        exp: exp.value,
        position: position.value,
        filename: filename.value.split(/(\\|\/)/g).pop()
    };

    // check validate


    var rex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var rexName = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u


    if (name.value === "") {
        valid = false
        name_error.innerHTML = "Hãy nhập tên của bạn"
    }
    else {
        name_error.innerHTML = ""
    }
    if (filename.value === "") {
        valid = false
        file_error.innerHTML = "Chưa chọn file"
    }
    else {
        file_error.innerHTML = ""
    }
    if (email.value === "") {
        valid = false
        email_error.innerHTML = "Hãy nhập email của bạn"
    }
    else {
        email_error.innerHTML = ""
    }
    if (phone.value === "") {
        valid = false
        phone_error.innerHTML = "Hãy nhập sđt của bạn"
    }
    else {
        phone_error.innerHTML = ""
    }
    if (exp.value === "") {
        valid = false
        exp_error.innerHTML = "Hãy nhập kinh nghiệm làm việc của bạn"
    }
    else {
        exp_error.innerHTML = ""
    }
    if (position.value === "") {
        valid = false
        position_error.innerHTML = "Chọn ví trí bạn muốn ứng tuyển"
    }
    else {
        position_error.innerHTML = ""
    }

    if (phone.value.length < 10 || phone.value.length > 12) {
        valid = false
        phone_error.innerHTML = ("SĐT phải từ 10-12 số");
    }
    else {
        phone_error.innerHTML = "";
    }


    if (rex.test(email.value) != true) {
        valid = false
        email_error.innerHTML = "email không đúng định dạng"
    }
    else {
        email_error.innerHTML = "";
    }

    if(rexName.test(name.value) != true) {
        valid = false;
        name_error.innerHTML = "ten phai bao gom ho va ten"
    }

    

    else if (valid === true) {


        name.value = "";
        phone.value = "";
        email.value = "";
        position.value = "";
        exp.value = "";
        filename.value = ""


        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch(url, options)
        .then(function (response) {
                response.json()
            })
        .then((response) => {
            console.log(response)
            alert("Nộp CV thành công")
        })
        .catch((error) => {
            console.log(error)
        })

    }


}

$("btn-submit").onclick = submitForm