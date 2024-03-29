const convAry = [
  ["メスガキ", "ざぁ～こ♡"],
  ["レイプ", "合意なし"],
  ["ロリ", "つるぺた"],
  ["ロリババア", "つるぺたババア"],
  ["監禁", "閉じ込め"],
  ["鬼畜", "超ひどい"],
  ["逆レイプ", "逆レ"],
  ["強制/無理矢理", "命令/無理矢理"],
  ["近親相姦", "近親もの"],
  ["拷問", "責め苦"],
  ["催眠", "トランス/暗示"],
  ["獣姦", "畜えち"],
  ["洗脳", "精神支配"],
  ["痴漢", "秘密さわさわ"],
  ["調教", "しつけ"],
  ["奴隷", "下僕"],
  ["陵辱", "屈辱"],
  ["輪姦", "回し"],
  ["蟲姦", "虫えっち"],
  ["モブ姦", "モブおじさん"],
  ["異種姦", "異種えっち"],
  ["機械姦", "機械責め"],
  ["睡眠姦", "すやすやえっち"],
  ["催眠音声", "トランス/暗示ボイス"],
  // 以下、恐らく変換されるだろう用語
  ["凌辱", "屈辱"],
];
const CONV_BEFORE = 0;
const CONV_AFTER = 1;

// 配列を元にした変換処理
function genTxt() {
  var txt = document.getElementById("befGen").value;
  for (var i = 0; i < convAry.length; i++) {
    txt = txt.replace(convAry[i][CONV_BEFORE], convAry[i][CONV_AFTER]);
  }
  document.getElementById("aftGen").value = txt;
}

// 配列を元に変換一覧表を動的に表示
window.addEventListener("load", function() {
  var tbody = document.getElementById('column');
  if (tbody != null) {
    for (var i = 0; i < convAry.length; i++) {
      var tr = document.createElement('tr');
      for (var j = CONV_BEFORE; j <= CONV_AFTER; j++) {
        var td = document.createElement('td');
        td.innerHTML = convAry[i][j];
        tbody.appendChild(td);
        td.classList.add("clm");
      }
      tbody.appendChild(tr);
    }
  }
});
