var oll = document.getElementById("oll");
var submitOll = document.getElementById("submitOll");
submitOll.addEventListener("click", function(){
    
    var swapAlgs = {
        "noswap":"",
        "diag":"R U R' B2' R U' R' U' B2' U B2' U B2'",
        "adjf":"F2 D F D' F L2' B' U B L2",
        "adjb":"U2 F2 D F D' F L2' B' U B L2 U2",
        "adjl":"U' F2 D F D' F L2' B' U B L2 U",
        "adjr":"U F2 D F D' F L2' B' U B L2 U",
    }

    var ollAlg = oll.value;
    var visualcubeUrl = "https://cubing.net/api/visualcube/?fmt=jpg&stage=cll&view=plan&case="
    document.getElementById("img_noswap").src = visualcubeUrl + ollAlg + swapAlgs["noswap"];
    document.getElementById("img_diag").src = visualcubeUrl + ollAlg + swapAlgs["diag"];
    document.getElementById("img_adjf").src = visualcubeUrl + ollAlg + swapAlgs["adjf"];
    document.getElementById("img_adjb").src = visualcubeUrl + ollAlg + swapAlgs["adjb"];
    document.getElementById("img_adjl").src = visualcubeUrl + ollAlg + swapAlgs["adjl"];
    document.getElementById("img_adjr").src = visualcubeUrl + ollAlg + swapAlgs["adjr"];
});