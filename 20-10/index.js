document.getElementById('text-area').addEventListener('paste', e => e.preventDefault())
function checkpass() {
    let password = document.getElementById('text').value
    if (password === 'tuithichbana') {
        removeAfterSuccess()
        var list = document.createElement('div');
        list.innerHTML = `
        <p class="success">🥳Câu trả lời của Nhi hoàn toàn chính xác🥳</p>
        <p class="wish">Đối với nam giới, bản thân người phụ nữ khi sinh ra đã là một bông hoa xinh đẹp, với anh thì Nhi là đẹp nhất. Vì thế, nhân ngày 20/10 hôm nay, anh
            có món quà tinh thần muốn gửi tới em. </p>
        <p class="gift-text">❤️❤️❤️Đây là món quà mà anh đã tự chuẩn bị cho em từ lâu rồi nhé :v. Nhanh tay click vào để mở món quà đặc biệt này nhé ❤️❤️❤️</p>
        <a href="https://youtube.com/shorts/lX6vDDx1DJg"><img src="./Red-gift-box.png" class="gift"></a>
        `;
        document.getElementById("result").appendChild(list)
    } else {
        addNotice()
        setTimeout(removeNotice, 2000)
    }
}
function addNotice() {
    var list = document.createElement('div');
    list.innerHTML = '<div id="notice">Oops, có vẻ như đáp án không chính xác rồi :( hãy thử lại nhé </div>';
    document.getElementById("result").appendChild(list)
}
function removeNotice() {
    const notice = document.getElementById('notice');
    notice.remove()
}

function removeAfterSuccess() {
    const success = document.getElementById('befor-success')
    success.remove()
}


function hint(){
    alert("Hint: Hãy nhớ ra pass của hai đứa là gì)))")
}