// onClick

const onClickBlock = document.querySelector("#onclick-block");

onClickBlock.addEventListener("click", function() {
    changeBlockPosition(this);
});

// onDblClick

const onDblClickBlock = document.querySelector("#ondblclick-block");

onDblClickBlock.ondblclick = function() {
    changeBlockPosition(this);
};

// onMouseOver

const onMouseOverBlock = document.querySelector("#onmouseover-block");

onMouseOverBlock.addEventListener("mouseover", function() {
    changeBlockPosition(this);
});

// onMouseOut

const onMouseOutBlock = document.querySelector("#onmouseout-block");

onMouseOutBlock.addEventListener("mouseout", function() {
    changeBlockPosition(this);
});

// onChange

const onChangeInput = document.querySelector("#onchange-input");

onChangeInput.addEventListener("change", function() {
    showText(this);
});

// onFocus

const onFocusInput = document.querySelector("#onfocus-input");

onFocusInput.addEventListener("focus", function() {
    showText(this);
});

// onBlur

const onBlurInput = document.querySelector("#onblur-input");

onBlurInput.addEventListener("blur", function() {
    showText(this);
});

// onInput

const onInputInput = document.querySelector("#oninput-input");

onInputInput.addEventListener("input", function() {
    showText(this);
});

// onKeyDown

const onKeyDownInput = document.querySelector("#onkeydown-input");

onKeyDownInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        showText(this);
    }
});


function changeBlockPosition(block) {
    
    block.style.marginLeft = "400px"
    block.style.transition = "1s"
}

function showText(input) {
    
    const result = input.nextElementSibling;
    let newText = input.value;
    result.textContent = newText;
    console.log(newText)
}