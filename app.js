const billAmtElement =  document.querySelector("#input-bill-amt");
const givenAmtElement =  document.querySelector("#input-given-amt");
const computeBtn = document.querySelector("#btn-compute");
const errorText = document.querySelector("#error-msg");
const denominationCount = document.querySelectorAll(".denomination-count");
const denomination = [1, 5, 10, 20, 50, 100, 200, 500, 2000];

computeBtn.addEventListener("click", () => {
    hideMessage();
    var billAmt =  parseFloat(billAmtElement.value);
    var givenAmt = parseFloat(givenAmtElement.value);

    if(billAmt > 0){
        if (billAmt <= givenAmt) {
            amtToReturn = givenAmt - billAmt;
            computeChange(amtToReturn)
        } else {
            showMessage("Are you giving the treat? 🤪");
        }
    }else{
        showMessage("Invalid Bill Amount!!");
    }
    
})

function computeChange(amtToReturn){
    for(var i = denomination.length - 1; i >= 0; i--){
        const numberOfNotes = Math.trunc(amtToReturn / denomination[i]);
        amtToReturn %= denomination[i];
        denominationCount[i].innerText = numberOfNotes;
    }
}

function showMessage(msg){
    errorText.style.display = "block";
    errorText.innerText = msg;
}

function hideMessage(){
    errorText.style.display="none";
}