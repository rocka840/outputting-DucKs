$(start);

function start(){
    $("#btn").on("click",duck);
}

function duck(){
    //alert("hi");
    let myInputVal = $("#ducks").val();
    $("#katherine").load(`showImages.php?count=${myInputVal}`);
}