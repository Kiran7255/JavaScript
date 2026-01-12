
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML=` <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space': e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

  
    </div>
    `;
});