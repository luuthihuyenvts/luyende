
const ITEMS = [
  {
    "title": "Đề Hà Nội - Đáp án",
    "province": "Hà Nội",
    "type": "Đề + đáp án",
    "file": "de-thi/de-ha-noi-dap-an.pdf",
    "download": "de-thi/de-ha-noi-dap-an.pdf",
    "source": null
  },
  {
    "title": "Đề Hà Nội PDF",
    "province": "Hà Nội",
    "type": "Đề thi",
    "file": "de-thi/de-ha-noi.pdf",
    "download": "de-thi/de-ha-noi.pdf",
    "source": null
  },
  {
    "title": "Đề Hà Nội Word",
    "province": "Hà Nội",
    "type": "Đề thi",
    "file": "de-thi/de-ha-noi-docx.pdf",
    "download": "de-thi/de-ha-noi-docx.pdf",
    "source": "src-docx/de-ha-noi-docx.docx"
  },
  {
    "title": "Đề Hà Tĩnh",
    "province": "Hà Tĩnh",
    "type": "Đề thi",
    "file": "de-thi/de-ha-tinh.pdf",
    "download": "de-thi/de-ha-tinh.pdf",
    "source": "src-docx/de-ha-tinh.docx"
  },
  {
    "title": "Đề Hải Phòng - Lần 2",
    "province": "Hải Phòng",
    "type": "Đề thi",
    "file": "de-thi/de-hai-phong-lan-2.pdf",
    "download": "de-thi/de-hai-phong-lan-2.pdf",
    "source": null
  },
  {
    "title": "Đề Khánh Hòa",
    "province": "Khánh Hòa",
    "type": "Đề thi",
    "file": "de-thi/de-khanh-hoa.pdf",
    "download": "de-thi/de-khanh-hoa.pdf",
    "source": null
  },
  {
    "title": "Đề Nghệ An 1",
    "province": "Nghệ An",
    "type": "Đề thi",
    "file": "de-thi/de-nghe-an-1.pdf",
    "download": "de-thi/de-nghe-an-1.pdf",
    "source": null
  },
  {
    "title": "Đề Nghệ An 2",
    "province": "Nghệ An",
    "type": "Đề thi",
    "file": "de-thi/de-nghe-an-2.pdf",
    "download": "de-thi/de-nghe-an-2.pdf",
    "source": null
  },
  {
    "title": "Đề Phú Thọ",
    "province": "Phú Thọ",
    "type": "Đề thi",
    "file": "de-thi/de-phu-tho.pdf",
    "download": "de-thi/de-phu-tho.pdf",
    "source": null
  },
  {
    "title": "Đề Phú Thọ 2026",
    "province": "Phú Thọ",
    "type": "Đề thi",
    "file": "de-thi/de-phu-tho-2026.pdf",
    "download": "de-thi/de-phu-tho-2026.pdf",
    "source": null
  },
  {
    "title": "Đề Sơn La",
    "province": "Sơn La",
    "type": "Đề thi",
    "file": "de-thi/de-son-la.pdf",
    "download": "de-thi/de-son-la.pdf",
    "source": null
  },
  {
    "title": "Đề Sơn La 1",
    "province": "Sơn La",
    "type": "Đề thi",
    "file": "de-thi/de-son-la-1.pdf",
    "download": "de-thi/de-son-la-1.pdf",
    "source": "src-docx/de-son-la-1.docx"
  },
  {
    "title": "Đề Tuyên Quang 1",
    "province": "Tuyên Quang",
    "type": "Đề thi",
    "file": "de-thi/de-tuyen-quang-1.pdf",
    "download": "de-thi/de-tuyen-quang-1.pdf",
    "source": "src-docx/de-tuyen-quang-1.docx"
  },
  {
    "title": "Đề Tuyên Quang 2",
    "province": "Tuyên Quang",
    "type": "Đề thi",
    "file": "de-thi/de-tuyen-quang-2.pdf",
    "download": "de-thi/de-tuyen-quang-2.pdf",
    "source": "src-docx/de-tuyen-quang-2.docx"
  },
  {
    "title": "Đề Đà Nẵng",
    "province": "Đà Nẵng",
    "type": "Đề thi",
    "file": "de-thi/de-da-nang.pdf",
    "download": "de-thi/de-da-nang.pdf",
    "source": "src-docx/de-da-nang.docx"
  },
  {
    "title": "Đề Đắk Lắk",
    "province": "Đắk Lắk",
    "type": "Đề thi",
    "file": "de-thi/de-dak-lak.pdf",
    "download": "de-thi/de-dak-lak.pdf",
    "source": null
  },
  {
    "title": "Đề Đắk Lắk 2",
    "province": "Đắk Lắk",
    "type": "Đề thi",
    "file": "de-thi/de-dak-lak-2.pdf",
    "download": "de-thi/de-dak-lak-2.pdf",
    "source": null
  },
  {
    "title": "Đề Đồng Nai 1",
    "province": "Đồng Nai",
    "type": "Đề thi",
    "file": "de-thi/de-dong-nai-1.pdf",
    "download": "de-thi/de-dong-nai-1.pdf",
    "source": null
  },
  {
    "title": "Đề Đồng Nai 2",
    "province": "Đồng Nai",
    "type": "Đề thi",
    "file": "de-thi/de-dong-nai-2.pdf",
    "download": "de-thi/de-dong-nai-2.pdf",
    "source": null
  },
  {
    "title": "Đề Đồng Tháp",
    "province": "Đồng Tháp",
    "type": "Đề thi",
    "file": "de-thi/de-dong-thap.pdf",
    "download": "de-thi/de-dong-thap.pdf",
    "source": null
  }
];
let current = null;
const $ = s => document.querySelector(s);
const list = $('#list');
const cards = $('#cards');
const q = $('#q');
const province = $('#province');
const mode = $('#mode');
const viewerBox = $('#viewerBox');
const viewTitle = $('#viewTitle');
const viewMeta = $('#viewMeta');
const download = $('#download');
const openNew = $('#openNew');
const resultCount = $('#resultCount');
const count = $('#count');
const provCount = $('#provCount');

function absUrl(path){ return new URL(path, window.location.href).href; }
function viewerUrl(item){
  const direct = item.file;
  if(mode.value === 'gview') return 'https://docs.google.com/gview?embedded=1&url=' + encodeURIComponent(absUrl(direct));
  return direct;
}
function scrollToViewer(){
  document.querySelector('#practice').scrollIntoView({behavior:'smooth', block:'start'});
}
function renderViewer(item){
  current = item;
  viewTitle.textContent = item.title;
  viewMeta.innerHTML = `<span class="provinceBadge">${item.province}</span> · ${item.type || 'Đề thi'} · Xem trực tiếp PDF`;
  download.href = item.download || item.file;
  openNew.href = item.file;
  const warning = mode.value === 'gview' ? '<div class="notice">Nếu Google Viewer không hiển thị, hãy chuyển sang chế độ “Xem PDF trực tiếp”.</div>' : '';
  viewerBox.innerHTML = warning + `<iframe class="viewerFrame" src="${viewerUrl(item)}" title="${item.title}"></iframe>`;
  document.querySelectorAll('[data-file]').forEach(el=>el.classList.toggle('active', el.dataset.file===item.file));
}
function filteredItems(){
  const kw = q.value.trim().toLowerCase();
  const pv = province.value;
  return ITEMS.filter(it => (!pv || it.province === pv) && (!kw || (it.title+' '+it.province+' '+it.type).toLowerCase().includes(kw)));
}
function itemButton(it){
  const idx = ITEMS.indexOf(it);
  return `<button class="item" data-file="${it.file}" data-idx="${idx}">
    <strong>${it.title}</strong>
    <span>${it.province} · ${it.type || 'Đề thi'}</span>
  </button>`;
}
function cardButton(it){
  const idx = ITEMS.indexOf(it);
  return `<button class="examCard" data-file="${it.file}" data-idx="${idx}">
    <b>${it.province}</b>
    <strong>${it.title}</strong>
    <span>Nhấn để xem đề</span>
  </button>`;
}
function bindButtons(){
  document.querySelectorAll('[data-idx]').forEach(btn=>{
    btn.onclick = () => { renderViewer(ITEMS[+btn.dataset.idx]); scrollToViewer(); };
  });
}
function renderList(){
  const filtered = filteredItems();
  resultCount.textContent = filtered.length + ' đề';
  list.innerHTML = filtered.map(itemButton).join('') || '<div class="empty smallEmpty">Không tìm thấy đề phù hợp.</div>';
  cards.innerHTML = filtered.map(cardButton).join('') || '<div class="empty smallEmpty">Không tìm thấy đề phù hợp.</div>';
  bindButtons();
}
function init(){
  const provinces = [...new Set(ITEMS.map(x=>x.province))].sort((a,b)=>a.localeCompare(b,'vi'));
  province.innerHTML = '<option value="">Tất cả tỉnh/thành</option>' + provinces.map(p=>`<option value="${p}">${p}</option>`).join('');
  count.textContent = ITEMS.length;
  provCount.textContent = provinces.length;
  renderList();
  if(ITEMS[0]) renderViewer(ITEMS[0]);
}
q.addEventListener('input', renderList);
province.addEventListener('change', renderList);
mode.addEventListener('change', ()=>{ if(current) renderViewer(current); });
$('#randomBtn').addEventListener('click',()=>{ if(ITEMS.length) { const it = ITEMS[Math.floor(Math.random()*ITEMS.length)]; renderViewer(it); scrollToViewer(); } });
init();
