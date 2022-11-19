const joinButton = document.querySelector(".join-btn");

joinButton.onclick = () => {
    const joinInput = document.querySelectorAll(".join-input");

    let admin = {
        name: joinInput[0].value,
        email: joinInput[1].value,
        password: joinInput[2].value
    }

    $.ajax({
        async: false,
        type: "post",
        url: "/api/admin/join",
        contentType: "application/json",
        data: JSON.stringify(admin),
        dataType: "json",
        success: (response) => {
            console.log(response);
            alert("회원가입 요청 성공");
        },
        error: (error) => {
            console.log(error)
            console.log(error.responseJSON)
            console.log(error.responseJSON.data)
            console.log(error.responseJSON.message)

            loadErrorMessage(error.responseJSON.data);
        }
    });

    function loadErrorMessage(errors){
        var errorflag = true;
          const errorArray = Object.values(errors);
          errorArray.forEach(error => {
          if(errorflag){
            alert(error);
                errorflag = false;
                return false;
            }
          });
        }
}