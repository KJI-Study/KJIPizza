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
        url: "/api/join",
        data: JSON.stringify(admin),
        dataType: "json",
        success: (response) => {
            console.log(response);
            alert("회원가입 요청 성공");
        },
        error: (error) => {
            console.log(error);
            alert("회원가입 요청 실패");
        }
    });
}