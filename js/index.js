var oll = document.getElementById("oll");
var submitOll = document.getElementById("submitOll");

var urlString = window.location.href;
var url = new URL(urlString);
var ollAlgFromUrl = url.searchParams.get("alg");
if (ollAlgFromUrl !== null){
    updateImages(ollAlgFromUrl);
    oll.value = ollAlgFromUrl;    
}

submitOll.addEventListener("click", function(){
    updateImages(oll.value);
});

function updateImages(ollAlg){
    updateROLLImages(ollAlg);
}

function updateROLLImages(ollAlg){
    
    var swapAlgs = {
        "noswap":"",
        "diag":"R U R' B2' R U' R' U' B2' U B2' U B2'",
        "adjf":"F2 D F D' F L2' B' U B L2",
        "adjb":"U2 F2 D F D' F L2' B' U B L2 U2",
        "adjl":"U' F2 D F D' F L2' B' U B L2 U",
        "adjr":"U F2 D F D' F L2' B' U B L2 U",
    }

    var arrows = {
        "noswap":"",
        "diag":"&arw=U0U8,U8U0",
        "adjf":"&arw=U6U8,U8U6",
        "adjb":"&arw=U0U2,U2U0",
        "adjl":"&arw=U0U6,U6U0",
        "adjr":"&arw=U2U8,U8U2",
    }
    
    var visualcubeUrl = "https://cubing.net/api/visualcube/?fmt=jpg&stage=coll&view=plan&case="

    cornerPerms = ["noswap", "diag", "adjf", "adjb", "adjl", "adjr"]
    cornerPerms.forEach(perm => {
        document.getElementById(perm).src = visualcubeUrl + ollAlg + swapAlgs[perm] + arrows[perm];
    });
    window.history.pushState(ollAlg, ollAlg, "?alg=" + encodeURI(ollAlg));
}

function updateJOLLImages(ollAlg){

}