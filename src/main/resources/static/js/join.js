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
        success: (response, textStatus ,request) => {
            alert("회원가입 요청 성공"); 
            const successURI = request.getResponseHeader("Location");
            location.replace(successURI + "?email=" + response.data);
        },
        error: (error) => {
            if(error.responseJSON.message == '이미 사용중인 이메일입니다') {
                alert(error.responseJSON.message);
            }
            loadErrorMessage(error);
        }
    });

    function loadErrorMessage(error){
        var errorflag = true;
          const errorArray = Object.values(error.responseJSON.errorMap);
          errorArray.forEach(msg => {
          if(errorflag){
            alert(msg);
                errorflag = false;
                return false;
            }
          });
        }
}