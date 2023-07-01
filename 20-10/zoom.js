var imageModal = document.getElementById("img-modal");
function onClick(element){
    var modal = document.getElementsByClassName("myModal")[0];
    modal.style.display = "block";
    imageModal.src = element.src;
//đóng bằng nút "close"
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', function() { 
        modal.style.display = "none";
      });
 //đóng bằng cách kích vào background
    // modal.addEventListener('click', function() {
    //     modal.style.display = "none";
    // });
}
    
   


