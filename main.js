let count = 0
let counting = document.getElementById("counter")
let saveP = document.getElementById("savePast")

function plus() {
count += 1
counting.textContent = count
}

function save() {
    let saveNew = count + " - "
    saveP.textContent += saveNew
    counting.textContent = 0
    return count = 0
}