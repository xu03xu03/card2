
        // 從localStorage中獲取選擇結果
        var selections = JSON.parse(localStorage.getItem('selections'));

        // 初始化顯示結果的文本
var resultText = "您所選擇的字母是：";
selections.sort((a, b) => a.choice - b.choice);
var selectedLetters = selections.map(selection => selection.letter);
resultText += selectedLetters.join(" ");
document.getElementById("results").innerText = resultText;


      // 設置所有卡片初始為隱藏，並根據選擇結果決定顯示的卡片
document.addEventListener('DOMContentLoaded', function() {
    const primaryResultsContainer = document.getElementById('primaryResults');
    const secondaryResultsContainer = document.getElementById('secondaryResults');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardLetters = card.getAttribute('data-letter').split('、');
        const matchCount = cardLetters.filter(letter => selectedLetters.includes(letter)).length;

        // 根據匹配字母的數量顯示相應卡片
        if (matchCount === 3) {
            card.style.display = 'block'; // 顯示匹配三個字母的卡片
            primaryResultsContainer.appendChild(card);
        } else if (matchCount === 2) {
            card.style.display = 'block'; // 顯示匹配兩個字母的卡片
            secondaryResultsContainer.appendChild(card);
        } else {
            card.style.display = 'none'; // 其他卡片保持隱藏
        }
    });

    document.getElementById('nextTestButton').addEventListener('click', () => {
        window.location.href = 'next_test.html'; // 假設有一個名為 next_test.html 的頁面
    });
});