//Javascript, tolong carikan .masuk-list
let masuk = document.querySelector('.masuk-list');

//Javascript, tolong carikan .tambah-list
let tblTambah = document.querySelector('.tambah-list');

//Javascript, tolong carikan .tugas
let tugas = document.querySelector('.tugas');

//Membuat tombol disable
masuk.addEventListener('keyup', () => {
  if(masuk.value.trim() != 0){
    tblTambah.classList.add('active')
  }
  else {
    tblTambah.classList.remove('active')
  }
})

// membuat item baru untuk list
tblTambah.addEventListener('click', () => {
  if(masuk.value.trim() != 0) {
    let itemBaru = document.createElement('div')
    itemBaru.classList.add('items');
    itemBaru.innerHTML = ` <p> ${masuk.value} </p>
            <div class="tbl-item">
             <i class="fa-solid fa-check"></i>
              <i class="fa-solid fa-circle-xmark"></i>
            </div>`
    tugas.appendChild(itemBaru);
    masuk.value = '';
  }
  else {
    alert('Masukkan tugas pada kolom!')
  }
})

// menghapus items yang sudah di tulis
tugas.addEventListener('click', (e) =>{
    if (e.target.classList.contains('fa-circle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

// menandai items yang sudah terlaksana
tugas.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')
    ) {
        e.target.parentElement.parentElement.classList.toggle('lengkap');
    }
})

