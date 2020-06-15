<div class="img-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1> <span id="typing"></span> </h1>
                <br>
                <div class="col-md-4 offset-md-4">
                    <a href="<?=base_url('map')?>" class="btn btn-lg btn-outline-light btn-block">
                        <i class="mdi mdi-map-outline"></i> Telusuri
                    </a>
                    <button onclick="toggleDetail()" class="mt-3 btn-block btn btn-lg btn-dark">Detail Web</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="detail" class="">
    <div class="closer">
        <i onclick="toggleDetail()" class="mdi mdi-close"></i>
    </div>
    <div class="container">
        <h2>Sistem Informasi Kondisi Jalan di Kabupaten Indragiri Hulu </h2>
        <p>Halaman website ini dibuat untuk memenuhi syarat tugas akhir perkuliahan pada Program Studi S1 Teknik
            Geodesi, Departemen Teknik Geodesi, Fakultas Teknik, Universitas Gadjah Mada dengan judul “Sistem Informasi
            Kondisi Jalan pada Ruas Jalan di Kabupaten Indragiri Hulu” berdasarkan data kerusakan jalan hasil video
            akuisisi menggunakan Mobile Mapping System (MMS). </p>
        <p>Halaman website ini berfungsi sebagai panduan pengguna peta online untuk mengetahui kondisi jalan di
            Kabupaten Indragiri Hulu, Provinsi Riau. Informasi yang diperoleh dari peta ini antara lain :</p>
        <ol>
            <li>Menampilkan 3 ruas jalan (penelitian) yang memiliki lajur jalan. Ruas jalan tersebut telah dibagi
                menjadi segmen jalan tiap 100 meter, terdiri dari 9 klasifikasi kerusakan jalan dan 19 jenis kerusakan
                jalan berdasarkan buku panduan manual Pavement Condition Index (PCI) yang diterbitkan oleh ASTM
                (American Society of Testing and Material) dan Kementerian Pekerjaan Umum dan Perumahan Rakyat
                Indonesia.</li>
            <li>Menampilkan ruas jalan yang ada di Kabupaten Indragiri Hulu.</li>
            <li>Menampilkan inventarisasi jalan berupa bahu jalan, median jalan, dan jembatan.</li>
            <li>Menampilkan tabel segmen jalan dengan jumlah kerusakan jalan dan detail informasi dari klasifikasi dan
                jenis kerusakan jalan.</li>
        </ol>
        <h2>Petunjuk Penggunaan Web </h2>
        <ol>
            <li>Web ini menyediakan menu dengan fungsi sebagai berikut :</li>
            <ul>
                <li>Map, untuk menuju ke halaman utama peta</li>
                <li>Peta, terdiri atas batas administrasi dan ruas jalan.</li>
                <ul>
                    <li>Batas administrasi : untuk memunculkan batas administrasi kecamatan dari Kabupaten Indragiri Hulu.</li>
                    <li>Ruas Jalan : untuk menyeleksi ruas jalan yang akan digunakan pengguna, ruas jalan yang di pilih akan difilter sesuai kebutuhan pengguna</li>
                </ul>
                <li>Segmen jalan, menampilkan tabel dan detail jumlah kerusakan jalan</li>
            </ul>
            <li>
                Web ini menggunakan basemap yang bersumber dari google satellite, dapat dilakukan perbesaran layer peta
                dengan mengklik <a class="leaflet-control-zoom-in">+</a> dan memperkecil layer peta dengan <a
                    class="leaflet-control-zoom-out">-</a> disediakan geolocate user 
                    <a style="background-color: #e4f7f8;display: inline-block;height: 20px;width: 20px;text-align: center;" class="leaflet-bar-part leaflet-bar-part-single" href="#" title="Show me where I am">
                        <span class="fa fa-map-marker"></span>
                    </a>
                untuk mengidentifikasi lokasi pengguna peta, menu search <a class="leaflet-control-geocoder-icon fa fa-search" type="button" title="Search for a place">&nbsp;</a> untuk mencari lokasi yang dituju, layer search 
                untuk mencari lokasi yang dituju, layer search <a style="background-color: #e4f7f8;padding: 7px"  class="search-button fa fa-binoculars" href="#" title="Search..."></a>
            </li>
            <li>
                Legenda peta <a style="display:inline-block" class="leaflet-control-layers-toggle" href="#" title="Layers"></a> menampilkan simbol dan keterangan dari peta, pengguna dapat mengaktif dan menonaktfikan layer peta secara manual sesuai kebutuhan
            </li>
            <li>Untuk menampilkan informasi data secara lengkap dan gambar dari tiap objek yang ada dipeta, dapat dipilih dan klik objek yang diinginkan dalam peta.  Informasi tersebut disediakan pada objek ruas jalan, inventarisasi jalan, dan kerusakan jalan yang dapat dilihat pula pada legenda.</li>
        </ol>
        <br>
        <h2 class="mt-5">Informasi Tambahan</h2>
        <div>
            <h5 class="mb-1"><b>Address</b></h5>
            Jl. Grafika No.2 Bulaksumur, Yogyakarta, 55281 <br>
            Departemen Teknik Geodesi <br>
            Fakultas Teknik  <br>
            Universitas Gadjah Mada <br>

        </div>
        <div>
            <h5 class="mb-1"><b>Contacts</b></h5>
            <div class="row">
                <div class="col-md-4">
                <table class="w-100">
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>dita.dwi.aryani@mail.ugm.ac.id</td>
                    </tr>
                    <tr>
                        <td>Phone </td>
                        <td>:</td>
                        <td>+62 812 1582 XXXX</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        <br>
    </div>
</div>